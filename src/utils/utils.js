export const generarMensajeWhatsApp = (cart, cartTotal) => {
    if (!cart.length) return "";

    let mensaje = "Hola, quisiera hacer un pedido con los siguientes productos:%0A%0A";

    cart.forEach(item => {
        const subtotal = formatearPrecio(item.precio_final * item.cantidad);
        mensaje += `• ${item.descripcion}%0A`;
        mensaje += `  Codigo: ${item.codproducto}%0A`;
        mensaje += `  Cantidad: ${item.cantidad}%0A`;
        mensaje += `  Precio: $${item.precio_final} c/u%0A`;
        mensaje += `  Subtotal: ${subtotal}%0A%0A`;

    });

    mensaje += `Total: $${cartTotal}%0A`;
    mensaje += "¿Cómo puedo continuar con la compra?";

    return mensaje;
};

export const individualMensajeWhatsApp = (producto) => {
    if (!producto) return "";

    let mensaje = "Hola, quiero consultar por el siguiente producto:%0A%0A";


    mensaje += `• ${producto.descripcion}%0A`;
    mensaje += `  Codigo: ${producto.codproducto}%0A`;
    mensaje += `  Marca: ${producto.marca}%0A`;
    // mensaje += `  Precio: $${producto.precio} c/u%0A`;
    // mensaje += `  Color: ${producto.nombreColor}%0A`;
    // mensaje += `  Talle: ${producto.talle}%0A`;
    // mensaje += `  Subtotal: $${producto}%0A%0A`;



    mensaje += "¿Cómo puedo continuar con la compra?";

    return mensaje;
};

export const generalMensajeWhatsApp = () => {

    let mensaje = "Hola, me comunico desde la web, mi consulta es la siguiente:%0A%0A";

    return mensaje;
};


export const formatearPrecio = (numero) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    }).format(numero);
}

export const aplicarDescuento = (precio, porcentaje) => {
    const descuento = (precio * porcentaje) / 100;
    return precio - descuento;
}