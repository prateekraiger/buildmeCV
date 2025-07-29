// Security utilities for the application

/**
 * Validates if the API key is properly configured
 */
export const validateApiKey = (): boolean => {
  const apiKey = process.env.GEMINI_API_KEY;
  return !!(apiKey && apiKey.length > 0 && apiKey !== "your-api-key-here");
};

/**
 * Sanitizes user input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim();
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Rate limiting utility (simple client-side implementation)
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number = 10, windowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];

    // Remove old requests outside the window
    const validRequests = requests.filter((time) => now - time < this.windowMs);

    if (validRequests.length >= this.maxRequests) {
      return false;
    }

    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    return true;
  }
}

export const apiRateLimiter = new RateLimiter(5, 60000); // 5 requests per minute

/**
 * Content Security Policy headers for enhanced security
 */
export const getCSPHeaders = () => ({
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://generativelanguage.googleapis.com",
    "frame-ancestors 'none'",
  ].join("; "),
});

/**
 * Validates file uploads (if implemented)
 */
export const validateFileUpload = (
  file: File
): { valid: boolean; error?: string } => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
  ];

  if (file.size > maxSize) {
    return { valid: false, error: "File size exceeds 5MB limit" };
  }

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: "File type not allowed" };
  }

  return { valid: true };
};

/**
 * Secure local storage wrapper
 */
export const secureStorage = {
  setItem: (key: string, value: string): void => {
    try {
      // Add timestamp for expiration
      const item = {
        value,
        timestamp: Date.now(),
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.warn("Failed to save to localStorage:", error);
    }
  },

  getItem: (
    key: string,
    maxAge: number = 24 * 60 * 60 * 1000
  ): string | null => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;

      const parsed = JSON.parse(item);
      const age = Date.now() - parsed.timestamp;

      if (age > maxAge) {
        localStorage.removeItem(key);
        return null;
      }

      return parsed.value;
    } catch (error) {
      console.warn("Failed to read from localStorage:", error);
      return null;
    }
  },

  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  },
};
