// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Instantly scroll to top (no animation)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // 🔴 This prevents smooth animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
