import { FaBuilding } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiGlobeHemisphereEast } from "react-icons/pi";
import { NAV_LINKS } from "../assets/data";
import { Link, NavLink } from "react-router-dom";



export default function Header() {

    return (
        <header className='bg-white/90 sticky top-0 z-[99999] px-10'>
            <div className="mx-auto max-w-large flex items-center justify-between h-20">
                <Link to="/" className='flex items-center gap-2 text-brown-dark'>
                    <FaBuilding size={40} />
                    <span className='flex flex-col justify-center'>
                        <span className="text-2xl font-light uppercase tracking-wider">Weifert</span>
                        <div className="font-light text-xs uppercase tracking-wider">Real estate</div>
                    </span>
                </Link>
                <div className="flex items-center gap-6">
                    <nav>
                        <ul className='flex items-center gap-4'>
                        {
                            NAV_LINKS.map(({ title, link }, index) => (
                                <li key={title}>
                                    <NavLink to={link} className='flex hover:text-brown text-brown-dark items-center justify-center gap-2 px-4'>
                                        <span className='text-sm uppercase tracking-wide'>{title}</span>
                                        {index === 1 ? <MdOutlineKeyboardArrowDown size={16} /> : null}
                                    </NavLink>
                                </li>
                            ))
                        }
                        </ul>
                    </nav>
                    <div className="flex items-center gap-2">
                        <NavLink to='/contact' className={({isActive}) => `flex items-center justify-center text-brown-light ${isActive ? 'bg-brown text-white' : 'bg-brown-dark hover:bg-brown hover:text-white'} rounded-sm px-4 h-10`}>
                            <span className='text-sm uppercase'>Contact</span>
                        </NavLink>
                        <button className="w-10 aspect-square rounded-sm flex items-center justify-center text-brown-dark hover:bg-brown-dark/10">
                            <PiGlobeHemisphereEast size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}