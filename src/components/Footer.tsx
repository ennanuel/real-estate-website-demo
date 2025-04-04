import { FaBuilding } from "react-icons/fa";
import { NAV_LINKS } from "../assets/data";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";



export default function Footer() {


    return (
        
        <footer className='bg-brown-dark text-white flex-col'>
            <div className='px-10 pt-8 pb-6'>
                <div className="mx-auto max-w-large flex items-center justify-between">
                    <a href="#!" className='flex items-center gap-2'>
                        <FaBuilding size={40} />
                        <span className='flex flex-col justify-center'>
                            <span className="text-2xl font-light uppercase tracking-wider">Weifert</span>
                            <span className="font-light text-xs uppercase tracking-wider">Real estate</span>
                        </span>
                    </a>

                    <nav>
                        <ul className='flex items-center gap-8'>
                            {
                                NAV_LINKS.map(({ title, link }, index) => (
                                    link !== "Apartments" ?
                                        <li key={index}>
                                            <Link to={link} className='text-sm relative h-8 flex items-center justify-center gap-2 text-white/80 hover:text-brown-light before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-brown-light before:scale-x-0 before:origin-right hover:before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300'>
                                                <span className='uppercase text-sm'>{title}</span>
                                            </Link>
                                        </li> :
                                        null
                                ))
                            }
                            <li className='ml-2'>
                            <a href="#" className='flex items-center justify-center gap-6 px-6 h-12 rounded-full bg-white text-brown-dark'>
                                <span className='text-sm'>View apartments</span>
                                <GoArrowRight size={16} />
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="pt-6 pb-4 px-10 border-t border-white/40">
            <div className="mx-auto max-w-large flex items-center justify-between gap-4">
                <p className='text-white/50 text-sm'>Copyright © {(new Date()).getFullYear()} City Center Weifert</p>
                <div className="flex items-center gap-4">
                {
                    [{ title: "+381 61 30 33 923", link: "#" }, { title: "weifertcenter@gmail.com", link: "#" }].map(({ title, link }, index) => (
                    <a key={index} href={link} className='opacity-60 hover:opacity-100 underline'>
                        <span className='text-sm'>{title}</span>
                    </a>
                    ))
                }
                </div>
            </div>
            </div>
        </footer>
    )
}