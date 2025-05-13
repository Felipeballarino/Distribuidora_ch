import React from 'react'
import Header from './header'
import Footer from './Footer'
import { FloatButton } from 'antd'
import { WhatsAppOutlined } from '@ant-design/icons'
import { generalMensajeWhatsApp } from '../utils/utils'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='mt-[80px]' >
                {children}
            </main>
            <Footer />
            <FloatButton
                icon={<WhatsAppOutlined style={{ color: 'white', fontSize: "40px" }} />}
                style={{
                    insetInlineEnd: 24,
                    backgroundColor: '#25D366', // Verde típico de WhatsApp
                    color: 'white',
                    width: "70px",
                    height: "70px"
                }}
                className="whatsapp-float"
                onClick={() => {
                    const mensaje = generalMensajeWhatsApp();
                    const telefono = "5493535669619";
                    const url = `https://wa.me/${telefono}?text=${mensaje}`;
                    window.open(url, '_blank');

                }}
            />
        </div>
    )
}

export default Layout
