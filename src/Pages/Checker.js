import { useEffect, useState } from "react";
import WalletChecker from "../assets/img/Wallet_Checker.gif"
import CheckerMobile from "../assets/img/Checker_mobile.gif"
import WhitelistData from "../assets/data/wl.json"
import OgData from "../assets/data/og.json"

function Checker() {
    const [isMobile, setIsMobile] = useState(false);
    const [status, setStatus] = useState("none")

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

    const handleOnchange = (event) => {
        const address = event.target.value;
        
        if (address.trim() !== "") {
            if(WhitelistData.find(data => data.wallet === address && data.mintlimit === 1) && !OgData.find(data => data === address)) {
                setStatus('wl')
            } 
            else if(WhitelistData.find(data => data.wallet === address && data.mintlimit === 2)) {
                setStatus('wl2')
            } 
            else if(OgData.find(data => data === address)) {
                setStatus('og')

                if(WhitelistData.find(data => data.wallet === address && data.mintlimit === 1)) {
                    setStatus('wl3')
                } 
            } 
            else {
                setStatus("no");
            }
        } else {
            setStatus("none");
        }
    }    

    return (
        <div>
            <main class="h-screen flex">
                <img src={isMobile ? CheckerMobile : WalletChecker} class="lg:block bottom-0 transform bg-cover -z-10 prevent-drag h-screen w-full object-cover" alt="Header Image" />
                <div className="absolute inset-0 flex flex-col items-center pt-[245px] md:pt-56 dekstop:pt-[820px]">
                    <h1 className="text-white text-center text-3xl md:text-4xl font-bold fontTitle dekstop:text-9xl">Wallet Checker</h1>
                    <input className="w-48 h-7 md:w-80 dekstop:w-[1140px] dekstop:h-[140px] md:h-11 mt-4 md:mt-16 dekstop:mt-28 rounded-2xl text-center fontTitle dekstop:text-7xl" name="inputAddress" onInput={handleOnchange}></input>
    
                {status === 'og' && (
                    <div>
                        <h1 className="text-white fontTitle text-sm mt-2 md:mt-5 md:text-2xl dekstop:text-7xl dekstop:mt-16">Congrats you got 2 new wizard collection</h1>
                    </div>
                )}

                {status === 'wl' && (
                    <div>
                       <h1 className="text-white fontTitle text-sm mt-2 md:mt-5 md:text-2xl dekstop:text-7xl dekstop:mt-16">Congrats you got a new wizard collection</h1>
                    </div>
                )}

                {status === 'wl2' && (
                    <div>
                        <h1 className="text-white fontTitle text-sm mt-2 md:mt-5 md:text-2xl dekstop:text-7xl dekstop:mt-16">Congrats you got 2 new wizard collection</h1>
                    </div>
                )}

                {status === 'wl3' && (
                    <div>
                        <h1 className="text-white fontTitle text-sm mt-2 md:mt-5 md:text-2xl dekstop:text-7xl dekstop:mt-16">Congrats! You got 2+1 Wizard Collection</h1>
                    </div>
                )}

                {status === 'no' && (
                    <div>
                       <h1 className="text-white fontTitle text-sm mt-2 md:mt-5 md:text-2xl dekstop:text-7xl dekstop:mt-16">sorry, you can mint at public phase</h1>
                    </div>
                )}

                {status === 'none' && (
                    <div>
                        <h1 className=""></h1>
                    </div>
                )}
                

                </div>
            </main>
        </div>
    )
}


export default Checker;