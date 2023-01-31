import React, { createContext, useContext, useState } from "react";
export const screenContext = createContext({});
export const nume1 = createContext({});
export const nume2 = createContext({});

export const ScreenContextProvider = ({ children }) => {
  const [num, setNum] = useState(""); // hook que me sirve para el screen
  const [num1, setNum1] = useState(""); // hook que me sirve para el primer valor de operacion "x"+"y"="z" siendo este x
  const [num2, setNum2] = useState(""); // hook que me sirve para el primer valor de operacion "x"+"y"="z" siendo este y
  return (
    <screenContext.Provider
      value={{ num, setNum}}
    >
      <nume1.Provider value={{ num1, setNum1 }}>
        <nume2.Provider value={{ num2, setNum2 }}>{children}</nume2.Provider>
      </nume1.Provider>
    </screenContext.Provider>
  );
};
