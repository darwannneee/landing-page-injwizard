import { useEffect, useState } from "react";
import WalletChecker from "../assets/img/Wallet_Checker.gif"
import CheckerMobile from "../assets/img/Checker_mobile.gif"
import Button from "../assets/img/Button.png"

function Checker() {
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
        <div>
            <main class="h-screen flex">
                <img src={isMobile ? CheckerMobile : WalletChecker} class="lg:block bottom-0 transform bg-cover -z-10 prevent-drag h-screen w-full object-cover" alt="Header Image" />
                <div className="absolute inset-0 flex flex-col items-center pt-[245px] md:pt-56">
                    <h1 className="text-white text-center text-3xl md:text-4xl font-bold fontTitle">Wallet Checker</h1>
                    <input className="w-48 h-7 md:w-80 md:h-11 mt-4 md:mt-16 rounded-2xl text-center"></input>
                    <button
                    className="w-16 h-7 md:w-28 md:mt-3 md:h-10 dekstop:w-56 dekstop:h-20 mx-2 bg-cover bg-center relative  dekstop:hover:w-60 dekstop:hover:h-24 hover:shadow-md mt-1"
                    style={{
                        backgroundImage: `url(${Button})`,
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6))', // Sesuaikan bayangan sesuai kebutuhan
                    }}
                    >
                        <span className="fontTitle text-white text-xs md:text-xl dekstop:text-3xl">check</span>
                    </button>
                </div>
            </main>
        </div>
    )
}


export default Checker;