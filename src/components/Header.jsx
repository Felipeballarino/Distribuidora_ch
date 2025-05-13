import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useAuth } from '../context/auth/useAuth'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const { user, logout } = useAuth()

    return (
        <header className='w-full flex justify-between items-center px-10  bg-[#d82737] fixed z-100 h-[80px]'>
            <Link to={"/"}>
                <h1>logo</h1>
            </Link>
            <div>
                {user ?
                    <>
                        <button onClick={logout} className='text-white hidden md:flex text-center cursor-pointer'>
                            <LogoutOutlined /> Cerrar sesión
                        </button>
                        <button onClick={logout} className='text-white flex md:hidden flex-col text-center cursor-pointer'>
                            <LogoutIcon /> Cerrar
                        </button>
                    </>

                    :
                    <>
                        <button onClick={() => setModalOpen(true)} className='text-white text-center cursor-pointer text-sm hidden md:flex gap-1'>
                            <LoginOutlined /> Iniciar sesión
                        </button>
                        <button onClick={() => setModalOpen(true)} className='text-white flex md:hidden flex-col justify-center items-center text-center cursor-pointer text-sm'>
                            <LoginIcon /> Ingresar
                        </button>
                    </>
                }
            </div>
            <Login open={modalOpen} onClose={() => setModalOpen(false)} />
        </header >
    )
}

export default Header
