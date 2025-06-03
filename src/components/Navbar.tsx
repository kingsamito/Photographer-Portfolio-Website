import logo from "../assets/imgs/Logo.png"
import menu from "../assets/icons/menu.svg"
import { useState } from "react"
import { NavLink } from "react-router"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="z-50 fixed flex flex-col items-center bg-[#F5F5F5] bg-opacity-70 w-full">
            <div className="flex justify-between items-center lg:hidden pr-10 w-full">
                <img src={logo} alt="Company Logo" className="lg:hidden h-[70px]" />
                <img src={menu} alt="Menu icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className={`items-center grid lg:grid-cols-[1fr_1fr_1fr_auto_1fr_1fr_1fr] w-full lg:h-[109px] font-playfairDisplaySC text-[#363636] text-[20px] text-center uppercase ${isOpen ? '' : 'hidden lg:grid'}`}>
                <NavLink to="" className="pb-6">home</NavLink>
                <NavLink to="about" className="pb-6">about</NavLink>
                <NavLink to="services" className="pb-6">services</NavLink>
                <NavLink to="" className="">
                    <img src={logo} alt="Company Logo" className="lg:block hidden h-[70px] lg:h-[101px]" />
                </NavLink>
                <NavLink to="portfolio" className="pb-6">portfolio</NavLink>
                <NavLink to="blog" className="pb-6">blog</NavLink>
                <NavLink to="contact" className="pb-6">contact</NavLink>
            </div>
        </nav>
    )
}/*  */

export { Navbar } 
