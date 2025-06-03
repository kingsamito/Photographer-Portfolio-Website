import logo from "../assets/imgs/Logo.png"
import facebook from "../assets/icons/facebook.svg"
import twitter from "../assets/icons/twitter.svg"
import youtube from "../assets/icons/youtube.svg"
import instagram from "../assets/icons/instagram.svg"
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-10 bg-[#F8F8F8] py-10">
            <div className={`items-center grid lg:grid-cols-[1fr_1fr_1fr_auto_1fr_1fr_1fr] w-full lg:h-[109px] font-playfairDisplaySC text-[#363636] text-[20px] text-center uppercase`}>
                <NavLink to="" className="pb-6">home</NavLink>
                <NavLink to="about" className="pb-6">about</NavLink>
                <NavLink to="services" className="pb-6">services</NavLink>
                <NavLink to="" className="-order-1 lg:order-none">
                    <img src={logo} alt="Company Logo" className="lg:block m-auto h-[70px] lg:h-[101px]" />
                </NavLink>
                <NavLink to="portfolio" className="pb-6">portfolio</NavLink>
                <NavLink to="blog" className="pb-6">blog</NavLink>
                <NavLink to="contact" className="pb-6">contact</NavLink>
            </div>
            <p className="lg:w-[619px] font-cormorantGaramond font-light text-[28px] text-center">Lorem ipsum dolor sit amet consectetur. Morbi volut tempus posuere viverra massa fames sed. Dignissim urisus et ac egestas dignissim.</p>
            <div className="flex gap-[26px]">
                <img src={facebook} alt="facebook Logo" />
                <img src={twitter} alt="twitter Logo" />
                <img src={youtube} alt="youtube Logo" />
                <img src={instagram} alt="instagram Logo" />
            </div>
            <p className="font-cormorantGaramond font-medium text-[20px]">Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    )
}

export { Footer }
