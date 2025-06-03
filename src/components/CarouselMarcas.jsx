import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import marca1 from "../assets/marcas/marca1.png"
import marca2 from "../assets/marcas/marca2.jpg"
import marca3 from "../assets/marcas/marca3.jpg"
import marca4 from "../assets/marcas/marca4.jpg"
import marca5 from "../assets/marcas/marca5.jpg"
import marca6 from "../assets/marcas/marca6.jpg"
import marca7 from "../assets/marcas/marca7.png"


const imgMarcas = [
    { src: marca1, alt: "marca1" },
    { src: marca2, alt: "marca2" },
    { src: marca3, alt: "marca3" },
    { src: marca4, alt: "marca4" },
    { src: marca5, alt: "marca5" },
    { src: marca6, alt: "marca6" },
    { src: marca7, alt: "marca7" },

]
const CarouselMarcas = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
                0: {
                    slidesPerView: 1, // para móviles
                },
                768: {
                    slidesPerView: 3, // para tablets en adelante
                }
            }}
            navigation
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            className='h-[250px]'
        >
            {imgMarcas.map((marca, index) => (
                <SwiperSlide key={index} className='flex items-center justify-center'  >
                    <img src={marca.src} alt={marca.alt} className='h-[150px] object-contain' />
                </SwiperSlide>
            ))}

        </Swiper>
    )
}

export default CarouselMarcas
