import HeaderImage from "../img/Header.gif"

function Header() {
    return (
        <main class="min-h-screen flex">
            <img src={HeaderImage} class="lg:block bottom-0 transform object-cover -z-10 prevent-drag" alt="Header Image" />
        </main>
    )
}

export default Header;