import SneakPeaksImage from "../img/SneakPeek.gif"
import SneakPeaksImageHandphone from "../img/SneakPeekMobile.gif"

import { useEffect, useState } from "react";
function SneakPeaks() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 600);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main class="h-screen flex">
            <img src={isMobile ? SneakPeaksImageHandphone : SneakPeaksImage} class="lg:block bottom-0 transform bg-cover -z-10 prevent-drag h-screen w-full object-cover" alt="Header Image" />
        </main>
    )
}

export default SneakPeaks;