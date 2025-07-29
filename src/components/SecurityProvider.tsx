import React, { createContext, useContext, useEffect, useState } from "react";
import { validateApiKey, secureStorage } from "../lib/security";

interface SecurityContextType {
  isApiKeyValid: boolean;
  isSecureConnection: boolean;
  sessionId: string;
  checkSecurity: () => void;
}

const SecurityContext = createContext<SecurityContextType | undefined>(
  undefined
);

export const useSecurityContext = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error(
      "useSecurityContext must be used within a SecurityProvider"
    );
  }
  return context;
};

interface SecurityProviderProps {
  children: React.ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({
  children,
}) => {
  const [isApiKeyValid, setIsApiKeyValid] = useState(false);
  const [isSecureConnection, setIsSecureConnection] = useState(false);
  const [sessionId, setSessionId] = useState("");

  const generateSessionId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const checkSecurity = () => {
    // Check API key validity
    setIsApiKeyValid(validateApiKey());

    // Check if connection is secure (HTTPS in production)
    setIsSecureConnection(
      window.location.protocol === "https:" ||
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
    );

    // Generate or retrieve session ID
    let storedSessionId = secureStorage.getItem("session_id", 30 * 60 * 1000); // 30 minutes
    if (!storedSessionId) {
      storedSessionId = generateSessionId();
      secureStorage.setItem("session_id", storedSessionId);
    }
    setSessionId(storedSessionId);
  };

  useEffect(() => {
    checkSecurity();

    // Set up periodic security checks
    const interval = setInterval(checkSecurity, 5 * 60 * 1000); // Every 5 minutes

    return () => clearInterval(interval);
  }, []);

  // Security warning for development
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      if (!isApiKeyValid) {
        console.warn(
          "⚠️ API key is not properly configured. Some features may not work."
        );
      }
      if (!isSecureConnection && window.location.hostname !== "localhost") {
        console.warn(
          "⚠️ Insecure connection detected. Use HTTPS in production."
        );
      }
    }
  }, [isApiKeyValid, isSecureConnection]);

  const value: SecurityContextType = {
    isApiKeyValid,
    isSecureConnection,
    sessionId,
    checkSecurity,
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};
