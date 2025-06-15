import { useState } from "react";
import { AddProductScan } from "./components/AddProductScan";
import { ProductScanGS1Parser } from "./components/ProductScanGS1Parser";

export const App = () => {
  const [listadoProductos, setListadoProductos] = useState([]);

  const onNuevoPorductoEscaneado = async (escaneoData) => {
    const { lot, error } = escaneoData;
    if (!lot || error) {
      return;
    }
    const escaneoDataExistente = listadoProductos.find(
      (escaneo) => escaneo.lot === lot
    );

    if (!escaneoDataExistente) {
      setListadoProductos([escaneoData, ...listadoProductos]);
    }
  };

  return (
    <>
      <hr />

      <AddProductScan
        onNuevoPorductoEscaneado={onNuevoPorductoEscaneado}
      />

      {listadoProductos.map((escaneoProducto, index) => (
        <ProductScanGS1Parser key={index + 1} escaneoProducto={escaneoProducto} />
      ))}
    </>
  )
}
