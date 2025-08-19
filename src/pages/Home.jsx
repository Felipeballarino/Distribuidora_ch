import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import rack from "../assets/rack.png"
import { Mail, Phone, Place } from "@mui/icons-material";
import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { sendEmail } from "../services/EmailSevice";
import 'swiper/css';

import banner from "../assets/banner.jpg"

const Home = () => {
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("success");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);
        const formDataObject = {
            nombre: data.get("nombre"),
            email: data.get("email"),
            mensaje: data.get("mensaje"),
        };

        const response = await sendEmail(formDataObject);

        if (response.mensaje === "Correo enviado con éxito") {
            setAlertMessage("Correo enviado con éxito");
            setAlertSeverity("success");
            form.reset(); // Limpiar formulario
        } else {
            setAlertMessage("Error al enviar el correo. Inténtalo nuevamente.");
            setAlertSeverity("error");
        }

        setOpen(true); // Mostrar alerta
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Layout>
            <section className='md:h-[75vh] h-[50vh] relative'>
                <img
                    src={rack}
                    alt="banner1"
                    className="h-full w-full object-cover absolute top-0 left-0 -z-10"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 -z-10"></div>
                <div className='w-full h-[80%] flex flex-col justify-center items-center gap-8'>
                    <h1 className='text-white  uppercase font-bold  md:text-5xl text-3xl text-center'>Repuestos Electricos para tu vehiculo</h1>
                    <Link to={"/productos"} className='bg-[#d82737] text-white font-bold  uppercase px-4 py-2 shadow rounded-lg cursor-pointer border '>Ver Productos</Link>
                </div>
            </section>
            <section className='flex justify-center py-20'>
                <h1 className='md:text-4xl uppercase font-bold'>CH importadora y distribuidora.</h1>
            </section>
            <section className='bg-[#d82737] px-10 py-15'>
                <div>
                    <h2 className='md:text-4xl text-3xl text-white uppercase font-bold'>Nuestra Historia</h2>
                    <div className='flex md:flex-row flex-col w-full gap-3'>
                        <div className='text-white mt-5 uppercase font-semibold md:w-2/3'>
                            <p className='md:text-xl text-base mb-4'>
                                En <b>Distribuidora CH, llevamos más de una década de trayectoria, forjada con esfuerzo,
                                    compromiso y el apoyo incondicional de nuestra familia. Desde nuestra fundación en 2008</b>,
                                cada paso ha sido una prueba de dedicación, superando obstáculos y cosechando éxitos gracias
                                a la determinación que nos define.
                            </p>
                            <p className='md:text-xl text-base'>
                                Creemos que el <b>trabajo arduo</b>, la <b>persistencia</b> y la <b>pasión</b> por lo que hacemos son
                                los pilares que nos han permitido crecer. Hoy, seguimos adelante con la misma convicción:
                                transformar desafíos en oportunidades y construir un futuro sólido para quienes confían en nosotros.
                            </p>
                        </div>
                        <div className='md:w-1/3'>
                            <img
                                src={banner}
                                alt="banner1"
                            // className="w-1/2"
                            />
                        </div>
                    </div>
                </div>
                {/* <div className='mt-[4rem]'>
                    <h2 className='md:text-4xl text-center text-3xl text-white font-bold uppercase'>Algunas Marcas</h2>
                    {/* <CarouselMarcas /> */}
                {/* <div className='grid grid-cols-3'>
                        {
                            imgMarcas.map(img => (
                                <div className='flex items-center justify-center'>
                                    <img src={img.src} alt='' className='w-[200px]' />
                                </div>
                            ))
                        }
                    </div> */}
                {/* </div> */}
            </section>
            <section className='px-10 py-10 ' >
                <h1 className='md:text-4xl text-3xl text-[#d82737] uppercase font-bold'>Contacto y Redes</h1>
                <Box className="flex md:flex-row flex-col-reverse md:gap-0 gap-4 ">
                    <Box className="md:w-1/2 flex flex-col justify-center items-center uppercase font-bold">
                        <ul className="list-none flex flex-col gap-1 md:text-lg">
                            <li className='flex items-center gap-1'><Mail sx={{ color: "#d82737" }} /> pabloch79@hotmail.com</li>
                            <li className='flex items-center gap-1'><Phone sx={{ color: "#d82737" }} /> +549 3535 669 619</li>
                            <li className='flex items-center gap-1'><Place sx={{ color: "#d82737" }} /> Araucanos 2555, X5900 Villa Maria, Córdoba</li>
                        </ul>
                    </Box>

                    <Box className="flex flex-col justify-center items-center md:w-1/2 md:mt-0 mt-4" component="form" onSubmit={handleSubmit}>
                        <div className='w-full' >
                            <TextField
                                fullWidth
                                margin="normal"
                                name="nombre"
                                label="Nombre y Apellido"
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        color: 'black',
                                        borderRadius: '8px',
                                        '& fieldset': {
                                            borderColor: '#d82737',
                                            borderWidth: '2px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#d82737',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#d82737',
                                            boxShadow: 'none', // por si algún tema agrega sombra
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'black',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'black',
                                    },
                                }}
                                InputProps={{ style: { borderColor: "white" } }}
                                InputLabelProps={{ style: { background: "white" } }}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                name="email"
                                label="Email"
                                type="email"
                                required
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        color: 'black',
                                        borderRadius: '8px',
                                        '& fieldset': {
                                            borderColor: '#d82737',
                                            borderWidth: '2px',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#d82737',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#d82737',
                                            boxShadow: 'none', // por si algún tema agrega sombra
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'black',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'black',
                                    },
                                }}
                                InputProps={{ style: { borderColor: "white" } }}
                                InputLabelProps={{ style: { background: "white" } }}
                            />
                        </div>
                        <TextField
                            fullWidth
                            margin="normal"
                            name="mensaje"
                            label="Mensaje"
                            multiline
                            rows={4}
                            required
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'black',
                                    borderRadius: '8px',
                                    '& fieldset': {
                                        borderColor: '#d82737',
                                        borderWidth: '2px',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#d82737',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#d82737',
                                        boxShadow: 'none', // por si algún tema agrega sombra
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'black',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'black',
                                },
                            }}
                            InputProps={{ style: { borderColor: "white" } }}
                            InputLabelProps={{ style: { background: "white" } }}
                        />
                        <Button variant="contained" sx={{ background: "#d82737", width: "30%", height: "40px", fontWeight: "bold" }} type="submit">
                            Enviar
                        </Button>
                    </Box>
                </Box>

                {/* Snackbar para mostrar alertas */}
                <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: "100%" }}>
                        {alertMessage}
                    </Alert>
                </Snackbar>
            </section>
        </Layout >
    )
}

export default Home

