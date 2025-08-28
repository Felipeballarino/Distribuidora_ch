import { Button, Image } from 'antd';
import { formatearPrecio, } from '../utils/utils';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import imgNoDisp from "../assets/nodisp.jpg"
import { useGlobalCart } from '../context/cart/useGlobalCart'

const ProductCard = ({ product }) => {
    const { addToCart } = useGlobalCart()


    const handleAddToCart = () => {
        addToCart(product, 1);
    };


    return (
        <div className='border-[#d82737] border-2 rounded-lg p-4 shadow-md relative h-fit  flex flex-col justify-between md:mb-0 mb-4 '>
            {product.descuento &&
                <div className='absolute top-4 left-0 z-1  bg-[#d82737] text-white uppercase py-1 px-2 rounded-r'>
                    {Math.floor(product.descuento)}% OFF
                </div>
            }
            <div>
                {product.img1 ?
                    <Image
                        style={{ objectFit: "cover" }}
                        width="100%"
                        height="12rem"
                        src={product.img1}
                        alt={product.nombre}
                    />
                    :
                    <Image
                        style={{ objectFit: "cover" }}
                        width="100%"
                        height="12rem"
                        src={imgNoDisp}
                        alt={product.nombre}
                    />
                }
            </div>
            <div>
                <div>
                    <h3 className='text-base uppercase h-12 font-bold'>{product.descripcion}</h3>
                    <p className='text-xs font-medium   text-gray-400 h-3'>COD: {product.codproducto}</p>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-xs font-medium   text-gray-400 h-3'>{product.marca}</p>
                            <p className='text-gray-500'>{formatearPrecio(product.precio_final)}</p>
                        </div>
                        <Button onClick={handleAddToCart} shape="circle" size='large' style={{ color: "#d82737", border: "#d82737 solid 1px" }} icon={<AddShoppingCartIcon fontSize='small' />} />

                    </div>
                </div>
            </div>

        </div >
    )
}

export default ProductCard
