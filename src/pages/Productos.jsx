import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from '../components/Layout';
import FiltrosCatalogos from '../components/FiltrosCatalogos';
import { useGlobalData } from '../context/data/useGlobalData';
import ProductCard from '../components/ProductCard';
import { Spin } from 'antd';


const Productos = () => {
    const { categorias, marcas, productos } = useGlobalData();

    const [searchParams, setSearchParams] = useSearchParams();
    const [marcaSeleccionada, setMarcaSeleccionada] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        const marcasFromURL = searchParams.get("marcas")?.split(",") || [];
        const categoriasFromURL = searchParams.get("categorias")?.split(",") || [];
        setMarcaSeleccionada(marcasFromURL);
        setCategoriaSeleccionada(categoriasFromURL);
    }, [searchParams]);

    useEffect(() => {
        const params = {};
        if (marcaSeleccionada.length > 0) {
            params.marcas = marcaSeleccionada.join(",");
        }
        if (categoriaSeleccionada.length > 0) {
            params.categorias = categoriaSeleccionada.join(",");
        }
        setSearchParams(params);
    }, [marcaSeleccionada, categoriaSeleccionada, setSearchParams]);

    const productosFiltrados = productos?.filter(product => {
        const coincideMarca = marcaSeleccionada.length > 0 ? marcaSeleccionada.includes(product.marca) : true
        const coincideCategoria = categoriaSeleccionada.length > 0 ? categoriaSeleccionada.includes(product.grupo) : true
        const coincideBusqueda = busqueda
            ? [
                product.descripcion,
                product.marcaNombre,
                product.categoriaNombre,
                product.codproducto
            ]
                .some(campo =>
                    campo?.toLowerCase().includes(busqueda.toLowerCase())
                )
            : true;

        return coincideMarca && coincideCategoria && coincideBusqueda;
    }) || [];

    return (
        <Layout>
            <div className="p-6 md:grid md:grid-cols-8 md:items-start flex flex-col items-center gap-4 min-h-screen ">
                <FiltrosCatalogos
                    marcas={marcas}
                    categorias={categorias}
                    marcaSeleccionada={marcaSeleccionada}
                    setMarcaSeleccionada={setMarcaSeleccionada}
                    categoriaSeleccionada={categoriaSeleccionada}
                    setCategoriaSeleccionada={setCategoriaSeleccionada}
                    onSearch={setBusqueda}
                />
                <div className='md:col-span-6 md:grid md:grid-cols-3 gap-4'>
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="md:col-span-3  flex justify-center items-center min-h-screen">
                            <Spin size="large" />
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}
export default Productos
