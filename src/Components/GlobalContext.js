import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

  const [saldo, setSaldo] = React.useState([null]);

  React.useEffect(() => {
    window.localStorage.setItem('saldo', saldo)
  }, [saldo])

  return (
    <GlobalContext.Provider  
    value={{ saldo, setSaldo }}
    >
      {children}
    </GlobalContext.Provider>
    );
}