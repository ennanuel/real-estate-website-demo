

import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { PiTelegramLogoLight, PiWhatsappLogoLight } from 'react-icons/pi';


import APARTMENTS from "../assets/APARTMENTS.json";

import { buildingImage1, buildingImage2, buildingImage3, buildingImage4, buildingImage5, buildingImage6, buildingImage7 } from '../assets/images';
import { VscAdd } from 'react-icons/vsc';
import { HiArrowRight } from 'react-icons/hi';

const IMAGES = [buildingImage1, buildingImage2, buildingImage3, buildingImage4, buildingImage5];

const ARTICLES = [
    {
        title: "The world’s first villa community designed by Bentley Home",
        desc: "This year’s most talked about off-plan project exploring new horizons of ultra-luxury living in Dubai. Choose one of three iconic automotive aesthetics for your ready-to-move-in interiors, complete with stunning lagoon views.",
        image: buildingImage5
    },
    {
        title: "A new icon of coastal living — Palm Jebel Ali by Nakheel",
        desc: "An exclusive launch of Dubai’s most anticipated masterpiece. Twice the size of Palm Jumeirah, this project combines true waterfront luxury, panoramic sea views, and villas crafted for life along the city’s most exciting shoreline.",
        image: buildingImage6
    }
]


export default function () {


    return (
        <div className='font-montserrat text-gray-900'>
            <section className="px-10 mb-10">
                <div className="mt-20 mx-auto max-w-large flex flex-col">
                    <div className="flex items-end justify-between gap-20">
                        <h1 className='text-[3rem] text-gray-900 leading-[3.4rem] tracking-tighter'>Feel the life<br />in the heart of Pancev</h1>
                        <div className="mt-6 flex text-gray-800 items-end gap-6">
                            <p className='text-2xl max-w-[16ch] tracking-tight'>with a leading real estate agency</p>
                            <button className='h-12 flex items-center justify-center gap-8 border border-brown text-brown px-6 rounded-full hover:bg-brown hover:text-white'>
                                <span>Contact us</span>
                                <GoArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 overflow-hidden rounded-sm">
                        <img src={buildingImage7} alt="real estate image" className="hover:scale-110 transition-transform duration-300 w-full h-auto block object-cover max-h-[70vh]" />
                    </div>
                </div>
            </section>
            <section className='px-10'>
                <div className="mx-auto max-w-large flex flex-col">
                    <h3 className='mt-10 text-3xl text-gray-900 tracking-tighter'>Upcoming & Latest Launches</h3>
                    <ul className="mt-10 grid grid-cols-6 gap-6">
                        {
                            APARTMENTS.slice(0, 5).map(({ id, name, city, address, }, index) => (
                                <li key={id} className={`${index === 0 ? 'col-span-4' : 'col-span-2'}`}>
                                    <a href="#" className="flex flex-col gap-4 h-full">
                                    <div className={`${index !== 0 ? 'aspect-square' : ''} flex-1 w-full rounded-sm relative overflow-hidden`}>
                                        <img src={IMAGES[index]} className="absolute top-0 left-0 w-full h-full object-cover" />
                                        <div className="p-4 relative flex items-center gap-2 flex-wrap">
                                            { 
                                                ["For family", "For living", "For reselling", "Luxury"].map((item, index) => (
                                                    <li key={index} className='flex items-center justify-center h-8 px-4 rounded-full bg-white/80 backdrop-blur-md'>
                                                        <span className='text-sm whitespace-nowrap'>{item}</span>
                                                    </li>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className='text-2xl text-gray-800'>{name}</h3>
                                        <p className="mt-1 text-sm text-gray-400">{city}, {address}</p>
                                        <p className='text-gray-800 text-base'>From {['1,388', '23,383', '33,331', '5,389'][Math.floor(Math.random() * 4)]} USD</p>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="mx-auto mt-16 mb-20">
                        <a href="#" className='group flex flex-col gap-4 justify-center items-center'>
                            <span className="group-hover:border-gray-800 group-hover:text-gray-800 transition-[border-color,_color] duration-300 flex items-center justify-center border text-gray-400 border-gray-500 rounded-full w-16 aspect-square">
                                <VscAdd size={20} className='group-hover:rotate-90 transition-transform duration-300' />
                            </span>
                        <span className='text-sm text-gray-900'>View all projects</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className='px-10 py-10'>
                <div className="mx-auto max-w-large">
                    {
                        ARTICLES.slice(0, 1).map(({ title, desc, image }) => (
                            <div key={title} className='flex gap-6 min-h-screen py-10'>
                                <div className="flex-1 flex flex-col justify-between gap-20">
                                    <div className="flex-col flex gap-6">
                                        <h2 className='text-[2.6rem] leading-[3.2rem] tracking-tight'>{title}</h2>
                                        <p className='text-base max-w-[48ch] tracking-tight'>{desc}</p>
                                        <button className='mt-2 w-fit flex items-center justify-center pl-6 pr-4 gap-8 h-12 rounded-full bg-brown text-white'>
                                            <span className='text-base'>Learn more</span>
                                            <HiArrowRight size={16} />
                                        </button>
                                    </div>
                                    <div className="text-brown-dark flex items-center gap-4">
                                        <span className="text-2xl flex items-center gap-3">
                                            <span>01</span>
                                            <span className='text-lg'>/</span>
                                            <span>02</span>
                                        </span>
                                        <div className="flex-1 h-[2px] bg-brown-dark/20">
                                            <span className="block w-1/2 bg-brown-dark h-full"></span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="group opacity-60 hover:opacity-100 relative w-8 overflow-hidden flex">
                                                <span className='group-hover:scale-0 group-hover:-translate-x-full origin-left transition-transform duration-300 w-8 aspect-square flex items-center justify-center'><GoArrowLeft size={32} /></span>
                                                <span className='group-hover:scale-100 group-hover:-translate-x-full scale-0 origin-right transition-transform duration-300 w-8 aspect-square flex items-center justify-center'><GoArrowLeft size={32} /></span>
                                            </button>
                                            <button className="group opacity-60 hover:opacity-100 relative w-8 overflow-hidden flex">
                                                <span className='group-hover:scale-100 scale-0 group-hover:translate-x-0 -translate-x-full origin-left transition-transform duration-300 w-8 aspect-square flex items-center justify-center'><GoArrowRight size={32} /></span>
                                                <span className='group-hover:scale-0 group-hover:translate-x-0 -translate-x-full origin-right transition-transform duration-300 w-8 aspect-square flex items-center justify-center'><GoArrowRight size={32} /></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="flex-1">
                                    <img src={image} alt="Building image" className="block rounded-sm object-cover w-full h-full" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="bg-brown-light text-brown-dark px-10 py-20">
                <div className="mx-auto max-w-large flex flex-col gap-4 items-center justify-center ">
                    <h2 className='text-[3rem] leading-[3.6rem] font-light tracking-tight text-center max-w-[24ch]'>"<span className="font-normal">Let the experts</span> help you make <span className="font-normal">the right investment</span>"</h2>
                    <p className='text-lg text-center'>Get in contact with us</p>
        
                    <div className="mt-4 flex flex-col w-full max-w-[1024px] gap-4">
                        <div className="flex gap-8">
                            {
                                [{ title: "Telegram", Icon: PiTelegramLogoLight }, { title: "WhatsApp", Icon: PiWhatsappLogoLight }].map(({ title, Icon }) => (
                                    <a href="#" className='flex items-center gap-3'>
                                        <span className="flex items-center justify-center w-8 aspect-square rounded-full bg-white/80">
                                            <Icon size={20} />
                                        </span>
                                        <span className="text-sm font-normal">{title}</span>
                                    </a>
                                ))
                            }
                        </div>
                        <form className="flex items-center gap-4 py-6 px-8 rounded-md bg-white/80">
                            <input type="text" id="name" name="name" placeholder="Name" className='flex-3 py-2 outline-none focus:outline-none border-b border-brown-dark/30 focus:border-brown-dark placeholder:text-brown-dark/40' />
                            <input type="tel" id="phone" name="phone" placeholder="Phone number" className='flex-3 py-2 outline-none focus:outline-none border-b border-brown-dark/30 focus:border-brown-dark placeholder:text-brown-dark/40' />
                            <button className='flex-2 flex items-center justify-center px-6 h-12 bg-brown-dark text-white rounded-full'>
                                <span className="tracking-tight">Get in touch</span>
                            </button>
                        </form>
                        <p className='text-xs text-center'>By submitting this form, you agree to our <a href="#" className="underline">privacy policy</a></p>
                    </div>
                </div>
            </section>
        </div>
    )
}