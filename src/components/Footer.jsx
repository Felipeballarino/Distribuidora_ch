import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <div className='border-t py-2 flex justify-center text-white bg-[#d82737] h-[90px] px-10'>
            <div className='flex justify-center'>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Footer
