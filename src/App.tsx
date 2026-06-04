import { useEffect, useMemo, useState } from "react";
import { useKV } from "@github/spark/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import SignInPage from "./components/pages/SignInPage";
import PrivacyPage from "./components/pages/PrivacyPage";
import TermsPage from "./components/pages/TermsPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import DecisionTreePage from "./components/pages/DecisionTreePage";
import DistributionTreePage from "./components/pages/DistributionTreePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/CookieConsent";

type Page = "home" | "signin" | "privacy" | "terms";

const COOKIE_CONSENT_SHOWN_KEY = "cookie-consent-shown";
const COOKIE_CONSENT_LOGO_CLICKED_KEY = "cookie-consent-logo-clicked";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useKV<boolean>(
    "cookie-consent-accepted",
    false,
  );

  useEffect(() => {
    const consentAlreadyShown =
      localStorage.getItem(COOKIE_CONSENT_SHOWN_KEY) === "true";
    const logoAlreadyClicked =
      localStorage.getItem(COOKIE_CONSENT_LOGO_CLICKED_KEY) === "true";

    if (cookieAccepted || consentAlreadyShown || logoAlreadyClicked) {
      setShowCookieConsent(false);
      return;
    }

    localStorage.setItem(COOKIE_CONSENT_SHOWN_KEY, "true");
    setShowCookieConsent(true);
  }, [cookieAccepted]);

  const currentPage = useMemo<Page>(() => {
    switch (location.pathname) {
      case "/signin":
        return "signin";
      case "/privacy":
        return "privacy";
      case "/terms":
        return "terms";
      default:
        return "home";
    }
  }, [location.pathname]);

  const navigateTo = (page: Page) => {
    const pagePathMap: Record<Page, string> = {
      home: "/",
      signin: "/signin",
      privacy: "/privacy",
      terms: "/terms",
    };

    navigate(pagePathMap[page]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showSiteChrome = ["/", "/signin", "/privacy", "/terms"].includes(
    location.pathname,
  );

  const handleCookieAccept = () => {
    setCookieAccepted(true);
    localStorage.setItem(COOKIE_CONSENT_SHOWN_KEY, "true");
    setShowCookieConsent(false);
  };

  const handleCookieLogoClick = () => {
    localStorage.setItem(COOKIE_CONSENT_LOGO_CLICKED_KEY, "true");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--popover)",
            color: "var(--popover-foreground)",
            border: "1px solid var(--border)",
          },
        }}
      />

      {showSiteChrome && (
        <Header currentPage={currentPage} onNavigate={navigateTo} />
      )}

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Routes>
            <Route path="/" element={<LandingPage onNavigate={navigateTo} />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/projects/decision-tree"
              element={<DecisionTreePage />}
            />
            <Route
              path="/projects/distribution-tree"
              element={<DistributionTreePage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      {showSiteChrome && <Footer onNavigate={navigateTo} />}

      <AnimatePresence>
        {!cookieAccepted && showCookieConsent && (
          <CookieConsent
            onAccept={handleCookieAccept}
            onLogoClick={handleCookieLogoClick}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
