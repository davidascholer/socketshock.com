import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import "@github/spark/spark";

import App from "./App.tsx";
import { ErrorFallback } from "./ErrorFallback.tsx";

import "./main.css";
import "./styles/theme.css";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
);

// Fade out and remove the splash screen once React has painted
requestAnimationFrame(() => {
  const splash = document.getElementById("splash");
  if (splash) {
    splash.classList.add("fade-out");
    splash.addEventListener("transitionend", () => splash.remove(), {
      once: true,
    });
  }
});
