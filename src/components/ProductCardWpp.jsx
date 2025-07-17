import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons'
import { formatearPrecio, individualMensajeWhatsApp } from '../utils/utils';
import Swal from 'sweetalert2';

import imgNoDisp from "../assets/nodisp.jpg"


const ProductCardWpp = ({ product }) => {
    return (
        <div className='border-[#d82737] border-2 rounded-lg p-4 shadow-md relative h-fit  flex flex-col justify-between md:mb-0 mb-4 '>
            {product.descuento &&
                <div className='absolute top-4 left-0 bg-[#d82737] text-white uppercase py-1 px-2 rounded-r'>
                    {Math.floor(product.descuento)}% OFF
                </div>
            }
            {product.img1 ?
                <img src={product.img1} alt={product.nombre} className='w-full h-48 object-cover' /> :
                <img src={imgNoDisp} alt={product.nombre} className='w-full h-48 object-cover' />}
            <h3 className='text-base uppercase h-12 font-bold'>{product.descripcion}</h3>
            <p className='text-xs font-medium   text-gray-400 h-3'>COD: {product.codproducto}</p>
            <p className='text-xs font-medium   text-gray-400 h-3'>{product.marca}</p>
            <div>
                <p className='text-gray-500'>{formatearPrecio(product.precio_final)}</p>
                <Button
                    className="mt-2 w-full text-white flex items-center justify-center gap-2 font-bold"
                    variant="solid"
                    style={{
                        backgroundColor: '#20b358',
                        color: 'white',
                        borderColor: '#52c41a',
                        textTransform: "uppercase",
                        fontWeight: "bold"
                    }}
                    onClick={async () => {
                        const mensaje = individualMensajeWhatsApp(product);
                        const telefono = "5493535669619";
                        const url = `https://wa.me/${telefono}?text=${mensaje}`;
                        window.open(url, '_blank');
                        const result = await Swal.fire({
                            title: '¿Pudiste comunicarte con el vendedor por WhatsApp?',
                            text: 'Esto nos ayuda a confirmar tu pedido.',
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonText: 'Sí, me comuniqué',
                            cancelButtonText: 'No aún',
                        });

                        if (result.isConfirmed) {
                            await Swal.fire({
                                title: '¡Gracias por tu consulta!',
                                icon: 'success',
                                timer: 2000,
                                showConfirmButton: false,
                            });
                        }
                    }}
                >
                    <WhatsAppOutlined className="text-xl" />
                    Consultar al wpp
                </Button>
            </div>
        </div>
    )
}

export default ProductCardWpp
