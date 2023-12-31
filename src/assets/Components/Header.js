import HeaderImage from "../img/Header.gif"
import HeaderMobile from "../img/headerMobile.gif"
import Button from "../img/Button.png"

import { useEffect, useState } from "react";
function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 600); // Atur nilai threshold sesuai kebutuhan
        };

        // Panggil handleResize saat komponen dimount dan ukuran layar berubah
        handleResize();
        window.addEventListener('resize', handleResize);

        // Membersihkan event listener saat komponen di-unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="relative">
            <img
                src={isMobile ? HeaderMobile : HeaderImage}
                className="lg:block bottom-0 transform object-cover -z-10 prevent-drag h-screen w-full"
                alt="Header Image"
            />

            <div className="absolute inset-0 md:flex items-center justify-center pt-96 mx-10 md:mx-0 text-center md:pt-32 dekstop:pt-40">
                <button
                    className="w-40 h-16 md:w-44 md:h-16 dekstop:w-56 dekstop:h-20 mx-2 bg-cover bg-center relative hover:w-48 hover:h-20 dekstop:hover:w-60 dekstop:hover:h-24 hover:shadow-md"
                    style={{
                        backgroundImage: `url(${Button})`,
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6))', // Sesuaikan bayangan sesuai kebutuhan
                    }}
                >
                    <span className="fontTitle text-white md:text-2xl dekstop:text-3xl">DISCORD</span>
                </button>

                <button
                    className="w-40 h-16 md:w-44 mt-5 md:mt-0 md:h-16 dekstop:w-56 dekstop:h-20 bg-cover bg-center relative md:mx-28 dekstop:mx-48 hover:w-48 hover:h-20 dekstop:hover:w-60 dekstop:hover:h-24 hover:shadow-md"
                    style={{
                        backgroundImage: `url(${Button})`,
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6))', // Sesuaikan bayangan sesuai kebutuhan
                    }}
                >
                    <span className="fontTitle text-white md:text-2xl dekstop:text-3xl">CHECKER</span>
                </button>

                <button
                    className="w-40 h-16 md:w-44 mt-5 md:mt-0 md:h-16 dekstop:w-56 dekstop:h-20 mx-2 bg-cover bg-center relative hover:w-48 hover:h-20 dekstop:hover:w-60 dekstop:hover:h-24 hover:shadow-md"
                    style={{
                        backgroundImage: `url(${Button})`,
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6))', // Sesuaikan bayangan sesuai kebutuhan
                    }}
                >
                    <span className="fontTitle text-white md:text-2xl dekstop:text-3xl">TWITTER</span>
                </button>
            </div>

        </div>
    
    )
}

export default Header;