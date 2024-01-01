import ImageRoadmap from "../img/Roadmap.gif"
function Roadmap() {
    return (
        <main class="min-h-screen flex">
            <img src={ImageRoadmap} class="lg:block bottom-0 transform object-cover -z-10 prevent-drag" alt="Header Image" />
        </main>
    )
}

export default Roadmap;