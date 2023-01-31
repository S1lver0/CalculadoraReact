import "./botones.css";
import React, { useContext, useEffect, useState } from "react";
import { screenContext, nume1, nume2 } from "../context/screenContext";
export const Boton = ({ valor }) => {
  const screen = useContext(screenContext);
  const numen1 = useContext(nume1);
  const numen2 = useContext(nume2);
  const [alter, setAlter] = useState(false);

  useEffect(() => {
    if (valor === "=" || alter == true) {
      if (numen1.num1 != "" && numen2.num2 != "") {
        let numero1 = numen1.num1.split("");
        let numero2;
        let operador = numero1[numen1.num1.length - 1];
        numero1.pop(); // eliminamos el operador
        numero1 = numero1.join(""); //convertimos a string el array
        numero1 = Number(numero1);
        ///
        numero2 = Number(numen2.num2);
        console.log(numero1);
        console.log(numero2);
        
        switch (operador) {
          case "X":
            screen.setNum(numero1 * numero2);
            break;
          case "/":
            screen.setNum(numero1 / numero2);
            break;
          case "-":
            screen.setNum(numero1 - numero2);
            break;
          case "+":
            screen.setNum(numero1 + numero2);
            break;
        }
        //seteamos al estado base
        numen1.setNum1("");
        numen2.setNum2("");
      }
    }
  });

  return (
    <button
      className={
        valor === "X" ||
        valor === "/" ||
        valor === "-" ||
        valor === "+" ||
        valor === "="
          ? "boton0"
          : "botonN"
      }
      id={valor === "0" ? "cero" : ""}
      onClick={() => {
        // nos sirve en el caso de que ingresemos otra vez un operador de manera consecutiva
        ///en el caso de que fuera un operador tiene que verificar si puede hacer la operacion o no
        if (
          valor === "X" ||
          valor === "/" ||
          valor === "-" ||
          valor === "+" ||
          valor === "="
        ) {
          //para obtener el numero de screen y agregarlo al primera variable de la operacion añadiendo al final el operador
          if (numen1.num1 === "") {
            if (valor !== "=") {
              numen1.setNum1(screen.num + valor);
              screen.setNum("");
            }
          } else {
            if (valor !== "=") {
              numen2.setNum2(screen.num);
              setAlter(true);
            } else {
              numen2.setNum2(screen.num);
            }
          }
        } else {
          let num = screen.num;
          screen.setNum(num + valor);
        }
      }}
    >
      {valor}
    </button>
  );
};
