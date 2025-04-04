

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import APARTMENTS from "../assets/APARTMENTS.json";
import { apartment3dImage1, apartment3dImage2, apartment3dImage3, apartment3dImage4, buildingImage2, buildingInteriorImage1, buildingInteriorImage2, buildingIsometricImage1, buildingIsometricImage2, contactImage1, contactImage2 } from "../assets/images";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const apartments = [apartment3dImage1, apartment3dImage2, apartment3dImage3, apartment3dImage4, apartment3dImage1].map((image, index) => ({
    ...APARTMENTS[index],
    image
}));

export default function Apartments() {

    return (
        <div className="">
            <section className="px-10">
                <div className="mt-12 mx-auto pb-30 max-w-large min-h-screen flex flex-col gap-10">
                    <div className="flex items-center justify-between gap-6">
                        <h1 className="text-[3rem] leading-[3.4rem] text-gray-900 tracking-tighter">Trussardi Residences</h1>
                        <button className="px-6 h-12 flex items-center justify-center gap-6 rounded-full border border-brown text-brown bg-white hover:bg-brown hover:text-white">
                            <span>Schedule a viewing</span>
                            <GoArrowRight size={18} />
                        </button>
                    </div>
                    <div className="grid grid-cols-[3fr_1fr] grid-rows-2 gap-6">
                        <div className="p-3 relative row-span-full rounded-sm overflow-hidden">
                            <img src={buildingImage2} alt="Apartment image" className="absolute top-0 left-0 w-full h-full object-cover" />
                            <ul className="relative flex flex-wrap gap-3 items-center">
                                {
                                    ["Luxury", "For families", "For living", "For resale"].map((item, index) => (
                                        <li key={index} className="h-8 rounded-full bg-white/90 backdrop-blur-md px-3 flex items-center justify-center">
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="relative rounded-sm overflow-hidden border border-brown-dark/30">
                            <img src={buildingIsometricImage1} alt="Isometric plan of image" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative rounded-sm overflow-hidden border border-brown-dark/30">
                            <img src={buildingIsometricImage2} alt="Isometric plan of image" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <a href="#" className="group flex item-center gap-4">
                            <span className="w-12 aspect-square flex items-center justify-center bg-brown-dark border border-brown-dark text-white rounded-full group-hover:bg-white group-hover:text-brown-dark group-hover:rotate-45 transition-transform duration-300">
                                <HiArrowUpRight size={20} />
                            </span>
                            <div className="flex flex-col">
                                <h3 className="text-sm text-brown-dark/50 tracking-tight">Location</h3>
                                <p className="text-lg text-brown-dark tracking-tght">Prancev, Serbia</p>
                            </div>
                        </a>
                        <a href="#" className="group flex item-center gap-4">
                            <span className="w-12 aspect-square flex items-center justify-center bg-brown-dark border border-brown-dark text-white rounded-full group-hover:bg-white group-hover:text-brown-dark group-hover:rotate-45 transition-transform duration-300">
                                <HiArrowUpRight size={20} />
                            </span>
                            <div className="flex flex-col">
                                <h3 className="text-sm text-brown-dark/50 tracking-tight">Developer</h3>
                                <p className="text-lg text-brown-dark tracking-tght">Weifert Real Estate</p>
                            </div>
                        </a>
                    </div>

                    <div className="mt-10 flex justify-between gap-20">
                        <ul className="flex-1 grid grid-cols-3 gap-8">
                            {
                                [
                                    { title: <span>Starting price (AED)</span>, value: "1.3M" }, 
                                    { title: <span>Starting area (ft<sup>2</sup>)</span>, value: "864" },  
                                    { title: "Handover", value: "Q4 2025" }, 
                                    { title: "Floors", value: "11" }, 
                                    { title: "Bedrooms", value: "1 – 2" }, 
                                    { title: "Payment Plan", value: "63 / 1 / 36" }
                                ].map(({ title, value }, index) => (
                                    <li key={index} className="flex flex-col gap-3">
                                        <span className="text-3xl text-brown-dark">{value}</span>
                                        <p className="text-brown-dark/50">{title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex-1 flex flex-col gap-10">
                            <p className="text-brown-dark max-w-[48ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque optio minima magni rem, iusto, voluptatem culpa eos voluptas dolore a esse est! Accusamus eum asperiores in libero labore. Placeat!</p>
                            
                            <button className="w-fit px-6 h-12 gap-6 flex items-center justify-center border border-brown rounded-full text-brown hover:bg-brown hover:text-white">
                                <span className="text-base">Make an inquiry</span>
                                <GoArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col gap-14">
                        <h3 className="text-gray-900 text-4xl tracking-tight">More details</h3>
                        <ul className="flex flex-col">
                            {
                                [
                                    { title: "Collaborations", value: "Turssardi" }, 
                                    { title: "Furnishing", value: "Fully furnished by Trussardi Casa" }, 
                                    { title: "Transport accessibility", value: "2 minutes to Metro Station" }
                                ].map(({ title, value }) => (
                                    <li key={title} className="py-4 border-b border-brown-dark flex justify-between gap-6">
                                        <span className="text-brown-dark/60">{title}</span>
                                        <p className="text-brown-dark w-[32ch]">{value}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-brown-light text-brown-dark min-h-screen py-20 px-10">
                <div className="mx-auto max-w-large">
                    <h2 className="text-4xl tracking-tighter">Apartments</h2>
                    <div className="mt-12 flex items-center gap-4">
                        {
                            [{ title: 'All floors', value: "" }, { title: 'Ground', value: "" }, { title: '1st', value: "" }, { title: '2nd', value: "" }]
                                .map(({ title, value }, index) => (
                                    <button key={title} value={value} className={`${index === 0 ? 'bg-white' : 'hover:bg-white'} transition-colors duration-300 h-9 flex items-center justify-center border border-white rounded-full px-4`}>
                                        <span className="text-brown-dark text-sm">{title}</span>
                                    </button>
                                ))
                        }
                    </div>
                    <ul className="mt-8 grid grid-cols-3 gap-6">
                        {
                            apartments.map(({ city, address, image }, index) => (
                                <li key={index}>
                                    <Link to="/apartments/apartment/123" className="flex flex-col items-center justify-center gap-6 rounded-sm bg-white p-6">
                                        <p className="text-lg text-center tracking-tight">{city}, {address}</p>
                                        <img src={image} className="w-full aspect-video object-contain" alt="Apartment image" />
                                        <div className="mt-4 flex items center justify-center gap-6">
                                            <span className="flex flex-col gap-1 text-center justify-center items-center">
                                                <span className="text-brown-dark">{`${["Ground", "1st", "2nd", "3rd"][Math.floor(Math.random() * 4)]}`}</span>
                                                <span className="text-xs text-brown-dark/50">Floor</span>
                                            </span>
                                            <span className="flex flex-col gap-1 text-center justify-center items-center">
                                                <span className="text-brown-dark">{`${["1,233", "3,202", "5,223", "1,200"][Math.floor(Math.random() * 4)]}`} m<sup>2</sup></span>
                                                <span className="text-xs text-brown-dark/50">Area</span>
                                            </span>
                                            <span className="flex flex-col gap-1 text-center justify-center items-center">
                                                <span className="text-brown-dark">{`${["1,000", "1,500", "2,999", "5,400"][Math.floor(Math.random() * 4)]}`} RSD</span>
                                                <span className="text-xs text-brown-dark/50">Price per m<sup>2</sup></span>
                                            </span>
                                        </div>
                                        <button className="flex items-center justify-center gap-6 h-12 w-fit border border-brown text-brown px-6 rounded-full">
                                            <span className="text-sm">View apartment</span>
                                            <GoArrowRight size={14} />
                                        </button>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className="px-10">
                <div className="mx-auto max-w-large pt-40">
                    <h3 className="text-4xl tracking-tighter">Apartment gallery</h3>
                    <div className="flex gap-5 mt-12 min-h-[520px]">
                        <div className="rounded-sm overflow-hidden relative flex-1">
                            <img src={buildingInteriorImage1} alt="Apartment interior image" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-sm overflow-hidden relative flex-1">
                            <img src={buildingInteriorImage2} alt="Apartment interior image" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="mt-10 flex items-center gap-6">
                        <span className="flex items-center gap-4 text-2xl">
                            <span>01</span>
                            <span className="text-base">/</span>
                            <span>02</span>
                        </span>
                        <span className="flex-1 h-[2px] bg-brown-dark/20">
                            <span className="block w-1/2 h-full bg-brown-dark"></span>
                        </span>
                        <div className="flex gap-8">
                            <button className="group relative flex items-center justify-center">
                                <span className="flex items-center justify-center group-hover:-translate-x-full group-hover:scale-0 transition-transform duration-300 origin-left">
                                    <GoArrowLeft size={24} />
                                </span>
                                <span className="absolute top-0 left-0 w-full h-full flex translate-x-full group-hover:translate-x-0 scale-0 group-hover:scale-100 transition-transform duration-300 items-center justify-center origin-right">
                                    <GoArrowLeft size={24} />
                                </span>
                            </button>
                            <button className="group relative flex items-center justify-center">
                                <span className="flex items-center justify-center group-hover:translate-x-full group-hover:scale-0 transition-transform duration-300 origin-right">
                                    <GoArrowRight size={24} />
                                </span>
                                <span className="absolute top-0 left-0 w-full h-full flex -translate-x-full group-hover:translate-x-0 scale-0 group-hover:scale-100 transition-transform duration-300 items-center justify-center origin-left">
                                    <GoArrowRight size={24} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-10 pt-30 pb-20">
                <div className="mx-auto max-w-large min-h-[90vh] flex rounded-sm overflow-hidden">
                    <div className="flex-1 flex flex-col gap-4 items-center justify-center bg-brown-light p-10">
                        <h3 className="text-[3rem] leading-[3.6rem] text-center text-brown-dark tracking-tighter max-w-[10ch]">Want to know more details?</h3>
                        <p className="text-center text-brown-dark/60 text-lg tracking-tighter">Feel free to contact us</p>
                        <form action="" className="w-full flex flex-col gap-3 max-w-[360px]">
                            <input type="text" id="name" name="name" placeholder="Name" className="h-12 focus:outline-none bg-transparent border-b border-brown-dark/80 focus:border-brown-dark placeholder:text-brown-dark/50 text-brown-dark" />
                            <input type="tel" id="phone" name="phone" placeholder="Phone" className="h-12 focus:outline-none bg-transparent border-b border-brown-dark/80 focus:border-brown-dark placeholder:text-brown-dark/50 text-brown-dark" />
                            <button className="mt-6 flex items-center justify-center h-12 rounded-full bg-brown-dark text-white px-4">
                                <span>Schedule a call</span>
                            </button>
                        </form>
                        <p className="text-brown-dark/80 text-center text-xs">By submitting this form, you agree to our <a href="#" className="underline text-brown-dark">privacy policy</a></p>
                    </div>
                    <div className="flex-1 relative bg-orange-200">
                        <img src={contactImage2} alt="Contact us image" className="block absolute top-0 left-0 w-full h-full object-cover" />
                    </div>
                </div>
            </section>
        </div>
    )
}