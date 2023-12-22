import Logo from "../assets/img/Logo_Trans.gif"

function Home() {
    return (
        <main className="bg-[url('./assets/img/Header.png')] h-screen md:bg-cover">
            <div className="pt-40">
                <img src={Logo} className="w-56 mx-auto"/>
                <h1 className="text-white fontTitle text-[85px] text-center -mt-14 tracking-wider">
                    INJ WIZARD
                </h1>
            </div>
        </main>
    )
}

export default Home;