import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuilderPage from "./pages/BuilderPage";
import { Layout } from "./components/Layout";
import { ToastProvider } from "./components/Toast";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <ToastProvider>
        <Layout>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/builder" element={<BuilderPage />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
