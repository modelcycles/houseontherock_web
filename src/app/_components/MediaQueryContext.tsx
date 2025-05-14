"use client";

import React, { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

// import { createContext } from "react";

type MediaQueryContextType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const MediaQueryContext = createContext<MediaQueryContextType | null>(null);

export const MediaQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1950px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width:1951px)" });

  return (
    <MediaQueryContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaQueryContext);
  if (!context) {
    throw new Error("useMedia must be used within a MediaQueryProvider");
  }
  return context;
};
