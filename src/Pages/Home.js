import Header from "../assets/Components/Header";
import SneakPeaks from "../assets/Components/SneakPeaks";
import Roadmap from "../assets/Components/Roadmap";
import MoreSneakPeaks from "../assets/Components/MoreSneakPeaks";

function Home() {
    return (
       <div>
            <Header />
            <SneakPeaks />
            <Roadmap />
            {/* <MoreSneakPeaks /> * */}
       </div>
    )
}

export default Home;

{/* <main class="h-screen flex">
            <img src={isMobile ? Footer : FooterMobile} class="lg:block bottom-0 transform bg-cover -z-10 prevent-drag h-screen w-full object-cover" alt="Header Image" />
            <div className="absolute inset-0 flex justify-center pt-16">
                <h1 className="text-white text-6xl font-bold fontTitle">Roadmap ComingSoon</h1>
            </div>
        </main> */}