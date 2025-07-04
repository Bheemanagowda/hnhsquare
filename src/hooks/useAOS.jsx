// src/hooks/useAOS.js
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useAOS = (options = { duration: 3000, once: true }) => {
  useEffect(() => {
    AOS.init(options);
  }, []);
};
