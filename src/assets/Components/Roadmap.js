import Footer from "../img/Footer.gif"
import FooterMobile from "../img/RoadmapMobile.gif"

import { useEffect, useState } from "react";
function SneakPeaks() {
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
        <main class="absolute h-screen flex">
            <img src={isMobile ? FooterMobile : Footer} class="lg:block bottom-0 transform bg-cover -z-10 prevent-drag h-screen w-full object-cover" alt="Header Image" />
            <div className="absolute inset-0 flex justify-center pt-20 md:pt-16">
                <h1 className="text-white mx-11 text-center text-5xl md:text-6xl font-bold fontTitle">Roadmap ComingSoon</h1>
            </div>
        </main>
    )
}

export default SneakPeaks;