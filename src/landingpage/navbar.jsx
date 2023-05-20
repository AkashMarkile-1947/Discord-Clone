import react from 'react'
import discordLogo from '../../assets/discord_main_logo.svg';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="section bg-transparent z-50" id="nav">
            <div className="section-container flex justify-between items-center w-11/12 mx-auto px-5 py-2  text-md fond-semibold navbar text-lg text-white">
                <img src={discordLogo} alt="discord" />
                <div id="bg-white sm:w-8/12 w-full">
                    <a href="#" className="nav-link sm:mr-5 mr-2 hidden md:inline">Download</a>
                    <a href="#" className="nav-link sm:mr-5 mr-2  hidden md:inline">Saftey</a>
                    <a href="#" className="nav-link sm:mr-5 mr-2  hidden md:inline">Support</a>
                    <a href="#" className="nav-link sm:mr-5 mr-2  hidden md:inline">Blog</a>
                    <a href="#" className="nav-link  hidden md:inline">Careers</a>
                </div>
                <a href="#" className="text-[1rem] px-4 py-1 hover:text-[#404eed] hover-shadow-lg bg-white text-[#292b2f] rounded-3xl">Login</a>
            </div>
        </nav>
    )

}

export default Navbar;