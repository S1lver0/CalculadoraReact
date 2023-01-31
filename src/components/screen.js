import "./screen.css";
import React, { useContext } from "react";
import { screenContext } from "../context/screenContext";

export const Screen = () => {
  const screen = useContext(screenContext);

  return <div className="pantalla">{screen.num}</div>;
};
