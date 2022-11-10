import { Boton } from "./botones";
import "./panelBotones.css";

export const Panelbotones = () => {
  return (
    <div className="container-botons">
      <div className="rows">
        <Boton className="boton" valor="AC"></Boton>
        <Boton className="boton" valor="+/-"></Boton>
        <Boton className="boton" valor="%"></Boton>
        <Boton className="boton" valor="/"></Boton>
      </div>
      <div className="rows">
        <Boton className="boton" valor="7"></Boton>
        <Boton className="boton" valor="8"></Boton>
        <Boton className="boton" valor="9"></Boton>
        <Boton className="boton" valor="X"></Boton>
      </div>
      <div className="rows">
        <Boton className="boton" valor="4"></Boton>
        <Boton className="boton" valor="5"></Boton>
        <Boton className="boton" valor="6"></Boton>
        <Boton className="boton" valor="-"></Boton>
      </div>
      <div className="rows">
        <Boton className="boton" valor="1"></Boton>
        <Boton className="boton" valor="2"></Boton>
        <Boton className="boton" valor="3"></Boton>
        <Boton className="boton" valor="+"></Boton>
      </div>
      <div className="rows">
        <Boton id="valor0" valor="0"></Boton>
        <Boton className="boton" valor="."></Boton>
        <Boton className="boton" valor="="></Boton>
      </div>
    </div>
  );
};
