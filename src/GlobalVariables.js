import React from "react";
import { createContext, useState } from "react";
const GlobalVariablesContext = createContext();

const GlobalVariables = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [hideError, setHideError] = useState(false);
  return (
    <GlobalVariablesContext.Provider
      value={{
        loading,
        setLoading,
        hideError,
        setHideError,
      }}
    >
      {children}
    </GlobalVariablesContext.Provider>
  );
};

export { GlobalVariables, GlobalVariablesContext };
