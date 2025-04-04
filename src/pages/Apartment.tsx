import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { apartment3dImage2, apartmentFloorPlan, buildingInteriorImage1, floorPlanImage } from "../assets/images";
import { PiTelegramLogoLight, PiWhatsappLogoLight } from "react-icons/pi";


export default function Apartment() {

    return (
        <div className="text-brown-dark">
            <section className="px-10 text-brown-dark">
                <div className="mx-auto max-w-large py-20 min-h-[90vh] flex items-center justify-center gap-26">
                    <div className="flex flex-col gap-6 justify-center">
                        <h2 className="text-[3rem] leading-[3.6rem] max-w-[24ch] tracking-tighter">Two room apartment</h2>
                        <div className="mt-4 flex items center justify-start gap-10">
                            <span className="flex flex-col gap-1">
                                <h3 className="text-3xl text-brown-dark">1st</h3>
                                <p className="text-brown-dark/50">Floor</p>
                            </span>
                            <span className="flex flex-col gap-1">
                                <h3 className="text-3xl  text-brown-dark">1,250 m<sup>2</sup></h3>
                                <p className="text-brown-dark/50">Area</p>
                            </span>
                            <span className="flex flex-col gap-1">
                                <h3 className="text-3xl text-brown-dark">6,200 RSD</h3>
                                <p className="text-brown-dark/50">Price per m<sup>2</sup></p>
                            </span>
                        </div>
                        <button className="w-fit h-14 rounded-full bg-brown text-white px-8 flex items-center justify-center gap-6">
                            <span className="tracking-tight">Make inquiries</span>
                            <GoArrowRight size={16} />
                        </button>
                    </div>
                    <div className="flex-1 max-w-[560px] flex items-center justify-center">
                        <img src={apartment3dImage2} alt="Apartment 3d image" className="w-full max-w-[560px] block rounded-sm h-auto object-cover" />
                    </div>
                </div>
            </section>
            <section className="px-10">
                <div className="mx-auto pb-30 max-w-large min-h-screen">
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        <h3 className="text-4xl tracking-tighter">The base of the apartment</h3>
                        <p className="text-brown-dark/50">
                            <span>Show apartment</span><br />
                            <span>Floors I to V - Apartment no. 7, 16, 25, 34, 43</span>
                        </p>
                    </div>
                    <div className="mt-20 flex border border-brown-dark">
                        <div className="my-6 flex-1 relative">
                            <img src={apartmentFloorPlan} className="object-contain w-full h-full absolute top-0 left-0 rounded-sm" alt="Apartment floor plan" />
                        </div>
                        <div className="flex-2 border-l border-brown-dark">
                            <div className="px-6 grid grid-cols-[80px_1fr_120px] text-xl tracking-tight items-center border-b border-brown-dark h-16">
                                <h3>BR</h3>
                                <h3>Prostorija</h3>
                                <h3>Kvadratura</h3>
                            </div>
                            <ul className="">
                                {
                                    [
                                        { title: "Ulaz", value: "6.54" },
                                        { title: "Ostava", value: "1.97" },
                                        { title: "KupatiloDnevni boravak, trpezarija i kuhinja", value: "4.53" },
                                        { title: "Spavaća soba", value: "23.22" },
                                        { title: "Terasa", value: "11.08" },
                                        { title: "Kupatilo", value: "4.96" },
                                    ].map(({ title, value }, index) => (
                                        <li key={title} className="px-6 h-14 items-center grid grid-cols-[80px_1fr_120px] border-b border-brown-dark">
                                            <span className="text-brown-dark/50">{index < 9 ? 0 : ''}{index + 1}.</span>
                                            <span>{title}</span>
                                            <span>{value} m<sup>2</sup></span>
                                        </li>
                                    ))
                                }
                                <li className="h-14 px-6 items-center grid grid-cols-[80px_1fr_120px]">
                                    <span className="text-brown-dark/50"></span>
                                    <span className="text-lg">Ukupno</span>
                                    <span>52.3 m<sup>2</sup></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex border border-brown-dark border-t-0">
                        <div className="flex-1 border-r border-brown-dark">
                            <div className="px-6 text-center grid grid-cols-[2fr_3fr] text-xl tracking-tight items-center h-16">
                                <h3>Sprat</h3>
                                <h3>Br. Stana</h3>
                            </div>
                            <ul>
                                {
                                    [
                                        { title: "P", value: "-" },
                                        { title: "1", value: "7" },
                                        { title: "2", value: "16" },
                                        { title: "3", value: "25" },
                                        { title: "4", value: "34" },
                                        { title: "5", value: "43" },
                                    ].map(({ title, value }, index) => (
                                        <li key={index} className="px-6 text-center h-14 items-center grid grid-cols-[2fr_3fr] border-t border-brown-dark">
                                            <span>{title}</span>
                                            <span>{value}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="flex-2 relative">
                            <img src={floorPlanImage} alt="Floor plan" className="absolute top-0 left-0 w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-brown-light px-10">
                <div className="mx-auto max-w-large pt-20 pb-10">
                    <h3 className="text-4xl tracking-tighter">Apartment images</h3>
                    <div className="flex gap-5 mt-12 min-h-[520px]">
                        <div className="rounded-sm overflow-hidden relative flex-1">
                            <img src={buildingInteriorImage1} alt="Apartment interior image" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-sm overflow-hidden relative flex-1">
                            <img src={buildingInteriorImage1} alt="Apartment interior image" className="w-full h-full object-cover" />
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
                <div className="mx-auto max-w-large flex flex-col gap-4 items-center justify-center ">
        
                    <div className="mt-20 mb-20 flex flex-col w-full max-w-[1024px] gap-4">
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