"use client";
import { useCallback, useEffect, useState } from "react";

const MAX_MOBILE_SCREEN_SIZE = "(max-width: 767px)" as const;

export const IsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(MAX_MOBILE_SCREEN_SIZE).matches;
  });

  const handleMediaChange = useCallback((event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(MAX_MOBILE_SCREEN_SIZE);

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return isMobile;
};
