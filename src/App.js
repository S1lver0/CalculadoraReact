import React, { useState } from "react";
import "./App.css";
import { Panelbotones } from "./components/panelBotones";
import { Screen } from "./components/screen";
import { ScreenContextProvider } from "./context/screenContext";

export const App = () => {
  return (
    <ScreenContextProvider>
      <Screen/>
      <Panelbotones />
    </ScreenContextProvider>
  );
};
