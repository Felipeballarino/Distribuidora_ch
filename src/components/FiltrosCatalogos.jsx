import { Checkbox, Collapse } from "antd";
import { Input } from 'antd';
const { Panel } = Collapse;
const { Search } = Input;

const FiltrosCatalogos = ({
    marcas,
    categorias,
    marcaSeleccionada,
    setMarcaSeleccionada,
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    onSearch
}) => {


    const handleCategoriaChange = (checked, nombreCategoria) => {
        if (checked) {
            setCategoriaSeleccionada([...categoriaSeleccionada, nombreCategoria]);
        } else {
            setCategoriaSeleccionada(
                categoriaSeleccionada.filter((c) => c !== nombreCategoria)
            );
        }
    };

    const handleMarcaChange = (checked, nombreMarca) => {
        if (checked) {
            setMarcaSeleccionada([...marcaSeleccionada, nombreMarca]);
        } else {
            setMarcaSeleccionada(
                marcaSeleccionada.filter((m) => m !== nombreMarca)
            );
        }
    };

    return (
        <div className="flex flex-col col-span-2 w-full md:static relative md:h-auto h-[130px]">
            <div className="mb-4">
                <Search
                    placeholder="Buscar productos"
                    onSearch={onSearch}
                    className="w-full custom-search"
                    size="large" />
            </div>
            {/* Desktop: filtros fijos visibles */}
            <div className="hidden md:flex flex-col gap-4">
                <div className="border-[#d82737] border-2 px-3 py-2 rounded ">
                    <h1 className="uppercase text-xl mb-2 text-[#d82737] font-bold">Categorías</h1>
                    <ul className="flex flex-col gap-1">
                        {categorias.map((cat) => (
                            <Checkbox
                                key={cat.id}
                                checked={categoriaSeleccionada.includes(cat.grupo)}
                                onChange={(e) =>
                                    handleCategoriaChange(e.target.checked, cat.grupo)
                                }
                            >
                                {cat.grupo}
                            </Checkbox>
                        ))}
                    </ul>
                </div>

                <div className="border-[#d82737] border-2 px-3 py-2 rounded ">
                    <h1 className="uppercase text-xl mb-2 text-[#d82737] font-bold">Marcas</h1>
                    <ul className="flex flex-col gap-1">
                        {marcas.map((marca) => (
                            <Checkbox
                                key={marca.id}
                                checked={marcaSeleccionada.includes(marca.marca)}
                                onChange={(e) =>
                                    handleMarcaChange(e.target.checked, marca.marca)
                                }
                            >
                                {marca.marca}
                            </Checkbox>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile: filtros en acordeón */}
            <div className="md:hidden absolute top-[45%] w-full z-50 flex gap-4 ">
                <div className="w-1/2 border-[#d82737] border-2 rounded h-fit">
                    <Collapse ghost >
                        <Panel header="Categorías" key="1" className="uppercase font-bold bg-white">
                            <ul className="flex flex-col gap-1">
                                {categorias.map((cat) => (
                                    <Checkbox
                                        key={cat.id}
                                        checked={categoriaSeleccionada.includes(cat.grupo)}
                                        onChange={(e) =>
                                            handleCategoriaChange(e.target.checked, cat.grupo)
                                        }
                                    >
                                        {cat.grupo}
                                    </Checkbox>
                                ))}
                            </ul>
                        </Panel>
                    </Collapse>
                </div>
                <div className="w-1/2 border-[#d82737] border-2 rounded h-fit">
                    <Collapse ghost>
                        <Panel header="Marcas" key="2" className="uppercase font-bold bg-white" >
                            <ul className="flex flex-col gap-1">
                                {marcas.map((marca) => (
                                    <Checkbox
                                        key={marca.id}
                                        checked={marcaSeleccionada.includes(marca.marca)}
                                        onChange={(e) =>
                                            handleMarcaChange(e.target.checked, marca.marca)
                                        }
                                    >
                                        <span className="block break-words whitespace-normal">{marca.marca}</span>
                                    </Checkbox>
                                ))}
                            </ul>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default FiltrosCatalogos;
