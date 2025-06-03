import { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useAuth } from '../context/auth/useAuth'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../assets/logo.png"

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const { user, logout } = useAuth()
    return (
        <header className='w-full flex justify-between items-center px-10  bg-[#d82737] fixed z-100 h-[90px]'>
            <Link to={"/"} className='flex md:h-[inherit] md:w-auto w-[35%]'>
                <img src={logo} alt="logo" />
            </Link>
            <div>
                {user?.codusuario != 0 ?
                    <>
                        <button onClick={logout} className='text-white text-sm hidden md:flex items-center gap-1 text-center cursor-pointer font-bold'>
                            {/* Bienvenido: */}
                            <p className='uppercase'>{user?.email} </p>
                            <span className='flex flex-col items-center uppercase'>
                                <AccountCircleIcon fontSize='large' />
                                Salir
                            </span>
                        </button>
                        <button onClick={logout} className='text-white flex items-center md:hidden flex-col text-center cursor-pointer uppercase font-bold'>
                            <AccountCircleIcon fontSize='large' />
                            Salir
                        </button>
                    </>

                    :
                    <>
                        <button onClick={() => setModalOpen(true)} className='text-white text-center cursor-pointer text-sm items-center hidden md:flex gap-1 uppercase font-bold'>
                            Iniciar sesión
                            <AccountCircleIcon fontSize='large' />

                        </button>
                        <button onClick={() => setModalOpen(true)} className='text-white flex md:hidden flex-col justify-center items-center text-center cursor-pointer text-sm uppercase font-bold'>
                            <AccountCircleIcon fontSize='large' />
                            Ingresar
                        </button>
                    </>
                }
            </div>
            <Login open={modalOpen} onClose={() => setModalOpen(false)} />
        </header >
    )
}

export default Header
