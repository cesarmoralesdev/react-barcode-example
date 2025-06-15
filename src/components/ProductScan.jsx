export const ProductScan = ({ escaneoProducto }) => {
    const { escaneo, GTIN, exp, lot, formatedCode, error } = escaneoProducto;
    return (
        <div>
            <label>
                <b>Escaneo:</b> {escaneo}
                <br />
                {error && <p>{error}</p>}
                {!error && (
                    <div>
                        {GTIN && <p>GTIN {GTIN}</p>}
                        {exp && <p>Expiry Date {exp}</p>}
                        {lot && <p>Batch Number {lot}</p>}
                        {formatedCode && <p>Format code {formatedCode}</p>}
                    </div>
                )}
                <br />
            </label>
            <br />
            <br />
        </div>
    );
};
