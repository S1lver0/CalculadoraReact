import "./botones.css";

export const Boton = ({ valor, numero }) => {
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
    >
      {valor}
    </button>
  );
};
