import HeaderImage from "../img/Header.gif"
import HeaderMobile from "../img/HeaderHandphone.gif"

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
        <main class="min-h-screen flex">
            <img src={isMobile ? HeaderMobile : HeaderImage} class="lg:block bottom-0 transform object-cover -z-10 prevent-drag h-screen w-full" alt="Header Image" />
        </main>
    
    )
}

export default Header;