import { useState } from "react";
import { useGS1Parser } from "../hooks/useGS1Parser";

export const AddProductScan = ({ onNuevoPorductoEscaneado }) => {
  const [input, setInput] = useState("");
  const [escaneo, setEscaneo] = useState("");
  const onInputChange = (event) => {
    setInput(event.target.value.trim());
  };
  const onInputEnter = (event) => {
    event.preventDefault();
    if (input.trim().length <= 1) return;
    const escaneoData = useGS1Parser({
      escaneo: input,
    });
    setEscaneo(input);
    setInput("");
    onNuevoPorductoEscaneado(escaneoData);
  };
  return (
    <form onSubmit={onInputEnter}>
      <label>Escaneo:</label>
      <input type="text" value={input} onChange={onInputChange} />
      <br />
      {escaneo !== "" && <label>Ultimo escaneo: {escaneo}</label>}
      <br />
      <br />
      <hr />
    </form>
  );
};
