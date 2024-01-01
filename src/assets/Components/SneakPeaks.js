import SneakPeaksImage from "../img/SneakPeaks.gif"
function SneakPeaks() {
    return (
        <main class="min-h-screen flex">
            <img src={SneakPeaksImage} class="lg:block bottom-0 transform object-cover -z-10 prevent-drag" alt="Header Image" />
        </main>
    )
}

export default SneakPeaks;