// context/GlobalDataProvider.jsx
import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoriesServices";
import { getMarcas } from "../../services/marcasServices";
import { getProduct } from "../../services/productServices";
import { GlobalDataContext } from "./GlobalDataContext";
import Cookies from "js-cookie";


export const GlobalDataProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)
    const userCookie = Cookies.get('user_data');


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
        if (userCookie) {
            setLoading(true)
            fetchCategorias();
            fetchMarcas();
            fetchProductos();
            setLoading(false)
        }
    }, [userCookie]);

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
