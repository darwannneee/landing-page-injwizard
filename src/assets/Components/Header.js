import HeaderImage from "../img/Header.gif"
import HeaderMobile from "../img/HeaderHandphone.gif"
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

<div className="absolute inset-0 flex items-center justify-center pt-32">
      <button
        className="w-44 h-16 mx-2 bg-cover bg-center relative hover:w-48 hover:h-20 hover:shadow-md"
        style={{ backgroundImage: `url(${Button})` }}
      >
        <span className="fontTitle text-white text-2xl">DISCORD</span>
      </button>

      <button
        className="w-44 h-16 bg-cover bg-center relative mx-28 hover:w-48 hover:h-20 hover:shadow-md"
        style={{ backgroundImage: `url(${Button})` }}
      >
        <span className="fontTitle text-white text-2xl">CHECKER</span>
      </button>

      <button
        className="w-44 h-16 mx-2 bg-cover bg-center relative hover:w-48 hover:h-20 hover:shadow-md"
        style={{ backgroundImage: `url(${Button})` }}
      >
        <span className="fontTitle text-white text-2xl">TWITTER</span>
      </button>
    </div>
        </div>
    
    )
}

export default Header;