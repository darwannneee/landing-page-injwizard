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