import React, { createContext, useContext } from "react";

const MetadataContext = createContext();

export const MetadataProvider = ({ children }) => {
  const defaultMetadata = {
    title: "My Blog App",
    description: "Find amazing content and posts here.",
  };

  return (
    <MetadataContext.Provider value={defaultMetadata}>
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadata = () => useContext(MetadataContext);
