import { useEffect, useState, useContext } from "react";
import { getCategories } from "../../services/categoriesServices";
import { getMarcas } from "../../services/marcasServices";
import { getProduct } from "../../services/productServices";
import { GlobalDataContext } from "./GlobalDataContext";
import { AuthContext } from "../auth/AuthContext";

export const GlobalDataProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [categorias, setCategorias] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategorias = async () => {
        const data = await getCategories();
        setCategorias(data.grupos);
    };

    const fetchMarcas = async () => {
        const data = await getMarcas();
        setMarcas(data.marcas);
    };

    const fetchProductos = async () => {
        const data = await getProduct();
        setProductos(data.productos);
    };

    useEffect(() => {
        setLoading(true);
        const cargarDatos = async () => {
            if (user) {
                await Promise.all([
                    fetchCategorias(),
                    fetchMarcas(),
                    fetchProductos()
                ]);
            }
            setLoading(false);
        };

        cargarDatos();
    }, [user]);

    return (
        <GlobalDataContext.Provider
            value={{
                categorias,
                marcas,
                fetchCategorias,
                fetchMarcas,
                fetchProductos,
                productos,
                loading
            }}
        >
            {children}
        </GlobalDataContext.Provider>
    );
};
