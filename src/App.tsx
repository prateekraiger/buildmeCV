import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuilderPage from "./pages/BuilderPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { ToastProvider } from "./components/Toast";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <ToastProvider>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/builder" element={<BuilderPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
