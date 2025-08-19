import React, { useState, useEffect } from 'react'
import { GlobalCartContext } from './GlobalCartContext';

export const GlobalCartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });
    const [openCart, setOpenCart] = useState(false);


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        setCart(prev => {
            const existing = prev.find(item =>
                item.codproducto === product.codproducto
            );

            if (existing) {
                return prev.map(item =>
                    item.codproducto === product.codproducto
                        ? { ...item, cantidad: item.cantidad + quantity }
                        : item
                );
            } else {
                return [...prev, { ...product, cantidad: quantity }];
            }
        });

        showDrawerCart();
    };


    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.codproducto !== id));
        showDrawerCart()
    };

    const updateQuantity = (id, quantity) => {
        setCart(prev =>
            prev.map(item => {
                if (item.codproducto === id) {
                    return { ...item, cantidad: quantity };
                }
                return item;
            })
        );
    };

    const clearCart = () => setCart([]);


    const showDrawerCart = () => {
        setOpenCart(true);
    };

    const onCloseCart = () => {
        setOpenCart(false);
    };

    const cartTotal = cart.reduce((acc, item) => acc + item.precio_final * item.cantidad, 0);
    const cartItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <GlobalCartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartTotal,
                cartItems,
                openCart,
                onCloseCart,
                showDrawerCart
            }}
        >
            {children}
        </GlobalCartContext.Provider>
    );
};

