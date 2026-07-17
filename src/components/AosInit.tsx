"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    import("aos").then((module) => {
      const AOS = module.default;
      AOS.init({
        once: true,
        mirror: false,
        duration: 800,
        easing: "ease-out-cubic",
        offset: 50,
      });
    });
  }, []);

  return null;
}
