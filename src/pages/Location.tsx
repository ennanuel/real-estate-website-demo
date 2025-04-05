
import { PiBankLight, PiBookLight, PiBookOpenTextLight, PiBookOpenUserLight, PiBriefcaseLight, PiBusLight, PiCreditCardLight, PiHospitalLight, PiMailboxLight, PiMapPinAreaLight, PiPersonLight, PiSuitcaseLight, PiTelegramLogoLight, PiTreeLight, PiWhatsappLogoLight } from "react-icons/pi";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const VALUES = [
    {
        title: "Autobuska stanica",
        value: "50m - 1min",
        Icon: PiBusLight
    },
    {
        title: "Park Narodna Bašta",
        value: "450m - 6min",
        Icon: PiTreeLight
    },
    {
        title: "Pošta",
        value: "250m - 3min",
        Icon: PiMailboxLight

    },
    {
        title: "Bolnica",
        value: "300m - 4min",
        Icon: PiHospitalLight
    },
    {
        title: "Tempo",
        value: "10m - 1min",
        Icon: PiBriefcaseLight
    },
    {
        title: "Maxi",
        value: "350m - 4min",
        Icon: PiSuitcaseLight
    },
    {
        title: "Unikredit banka",
        value: "160m - 2min",
        Icon: PiCreditCardLight
    },
    {
        title: "Banca Intesa",
        value: "350m - 5min",
        Icon: PiBankLight
    },
    {
        title: "OŠ Đura Jakšić",
        value: "600m - 8min",
        Icon: PiBookLight
    },
    {
        title: "OŠ Stevica Jovanović",
        value: "650m - 8min",
        Icon: PiBookOpenTextLight
    },
    {
        title: "OŠ Jovan J. Zmaj",
        value: "700m - 9min",
        Icon: PiBookOpenUserLight
    },
    {
        title: "Vrtić Ljiljan",
        value: "160m - 2min",
        Icon: PiPersonLight
    },
]

export default function () {


    return (
        <div className="text-brown-dark">
            <section className="px-10">
                <div className="mx-auto max-w-large min-h-screen pt-12">
                    <div className="flex justify-between items-end">
                        <h1 className="text-[3rem] leading-[3rem] tracking-tighter">Location</h1>
                        <button className="w-10 aspect-square rounded-full border border-brown-dark flex items-center justify-center">
                            <PiMapPinAreaLight size={20} />
                        </button>
                    </div>
                    <hr className="mt-6 mb-10 border-none outline-none w-full h-[1px] bg-brown-dark" />
                    <p className="text-3xl tracking-tighter">In the immediate vicinity</p>
                    <div className="mt-14 mb-30 flex gap-10">
                        <ul className="flex-1 grid grid-cols-3 gap-x-6 gap-y-10">
                            {
                                VALUES.map(({ title, value, Icon }) => (
                                    <li key={title} className="flex items-center gap-4">
                                        <span className="w-14 aspect-square rounded-full bg-brown-dark text-white flex items-center justify-center">
                                            <Icon size={28} />
                                        </span>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-brown-dark/50 text-sm">{title}</p>
                                            <h3 className="text-xl">{value}</h3>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <p className="max-w-[48ch] text-brown-dark/50">Stambeno-poslovni objekat “Weifert City Center” nalazi se u samom centru grada Pančeva. Pančevo ima preko 90.000 stanovnika i raspolaže sa bogatim sadržajem i kvalitetnom svakodnevnicom. Pančevo je udaljeno samo 18km od Beograda, sto takođe omogućava lak i brz pristup našoj prestonici.</p>
                    </div>
                    <div className="min-h-screen pb-30 flex flex-col gap-10">
                        <h2 className="text-3xl tracking-tighter">Find us in the map</h2>
                        <MapContainer center={[51.505, -0.09]} className="flex-1 h-full min-h-[480px] rounded-sm border border-brown/30" zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </section>
            <section className="bg-brown-light">
                <div className="mx-auto py-20 max-w-large flex flex-col gap-4 items-center justify-center">
                    <h2 className='text-[3rem] leading-[3.6rem] font-light tracking-tight text-center max-w-[24ch]'>"<span className="font-normal">Let the experts</span> help you make <span className="font-normal">the right investment</span>"</h2>
                    <p className='text-lg text-center text-brown-dark/60'>Get in contact with us</p>
        
                    <div className="flex flex-col w-full max-w-[1024px] gap-4">
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