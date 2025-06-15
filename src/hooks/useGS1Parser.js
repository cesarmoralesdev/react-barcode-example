import gs1Barcode from "gs1-parser";
import { getDate } from "../util/utilDate";
export const useGS1Parser = ({ escaneo }) => {
    try {
        let { GTIN, exp, lot, formatedCode } = gs1Barcode.decode(escaneo);
        exp = exp ? getDate(exp) : "";
        return {
            escaneo,
            GTIN,
            exp,
            lot,
            formatedCode,
            error: "",
        };
    } catch (error) {
        return {
            escaneo,
            GTIN: "",
            exp: "",
            lot: "",
            formatedCode: "",
            error: "Favor ingresar un codigo de barras",
        };
    }
};
