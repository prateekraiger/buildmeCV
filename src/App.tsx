import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuilderPage from "./pages/BuilderPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { ToastProvider } from "./components/Toast";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Font } from '@react-pdf/renderer';

Font.register({
    family: 'Inter',
    fonts: [
        { src: '/fonts/Inter/Inter-VariableFont_opsz,wght.ttf', fontWeight: 'normal' },
        { src: '/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf', fontStyle: 'italic' },
        { src: '/fonts/Inter/Inter-VariableFont_opsz,wght.ttf', fontWeight: 'bold' },
    ]
});

Font.register({
    family: 'Tomorrow',
    fonts: [
        { src: '/fonts/Tomorrow/Tomorrow-Regular.ttf', fontWeight: 'normal' },
        { src: '/fonts/Tomorrow/Tomorrow-Italic.ttf', fontStyle: 'italic' },
        { src: '/fonts/Tomorrow/Tomorrow-Bold.ttf', fontWeight: 'bold' },
    ]
});

import { Layout } from './components/Layout';

function App() {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <ToastProvider>
        <Layout>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/builder" element={<BuilderPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
