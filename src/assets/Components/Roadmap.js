import Footer from "../img/Footer.gif"
function Roadmap() {
    return (
        <main className="min-h-screen flex flex-col items-center relative">
            <img src={Footer} className="lg:block bottom-0 transform object-cover -z-10 prevent-drag h-screen w-full" alt="Footer Image" />
            <div className="absolute inset-0 flex justify-center pt-16">
                <h1 className="text-white text-6xl font-bold fontTitle">Roadmap ComingSoon</h1>
            </div>
        </main>

    )
}

export default Roadmap;