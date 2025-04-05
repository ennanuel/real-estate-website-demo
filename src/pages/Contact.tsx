import { PiMailboxLight, PiMapPinLight, PiTelegramLogoLight } from "react-icons/pi";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";



export default function Contact() {


    return (
        <div>
            <section className="px-10 bg-brown-light text-brown-dark">
                <div className="mx-auto max-w-large pt-12 pb-30 flex flex-col min-h-screen">
                    <h1 className="text-[3rem] leading-[3rem] tracking-tighter">Contact</h1>
                    <div className="mt-20 flex-1 flex justify-between gap-20">
                        <div className="flex-1 max-w-[560px] flex flex-col justify-between gap-6">
                            <p className="max-w-[56ch]">Za sve informacije u vezi projekta, kupovine stanova, parking mesta, kao i mogućnosti kreditiranja, kontaktirajte naš prodajni tim. Rado ćemo Vam odgovoriti u najkraćem mogućem roku.</p>
                            <div className="flex flex-col">
                                <div className="flex gap-4 border-t border-brown-dark/20 py-4">
                                    <div className="flex-1 h-8 flex items-center">
                                        <h3 className="">Address</h3>
                                    </div>
                                    <div className="flex-3">
                                        <a href="#" className="flex items-center gap-4">
                                            <span className="flex items-center justify-center w-8 aspect-square rounded-full bg-white/90">
                                                <PiMapPinLight />
                                            </span>
                                            <span>Oslobođenja 2, 26000 Pančevo</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-4 border-t border-brown-dark/20 py-4">
                                    <div className="flex-1 h-8 flex items-center">
                                        <h3 className="">Sale</h3>
                                    </div>
                                    <div className="flex-3 flex flex-col gap-4">
                                        <a href="#" className="flex items-center gap-4">
                                            <span className="flex items-center justify-center w-8 aspect-square rounded-full bg-white/90">
                                                <PiTelegramLogoLight />
                                            </span>
                                            <span>+381 61 30 33 923</span>
                                        </a>
                                        <a href="#" className="flex items-center gap-4">
                                            <span className="flex items-center justify-center w-8 aspect-square rounded-full bg-white/90">
                                                <PiMailboxLight />
                                            </span>
                                            <span>weifertcenter@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 max-w-[640px]">
                            <form action="" className="flex flex-col gap-6">
                                <input type="text" id="name" name="name" placeholder="Name and Surname *" className="h-14 focus:outline-none rounded-full bg-white/90 px-6" />
                                <input type="text" id="email" name="email" placeholder="Email Address *" className="h-14 focus:outline-none rounded-full bg-white/90 px-6" />
                                <textarea id="message" name="message" placeholder="Message" className="h-36 py-4 focus:outline-none rounded-[28px] bg-white/90 p-6" />
                                <button className="mt-6 h-14 rounded-full px-6 flex items-center justify-center bg-brown-dark hover:bg-brown text-white">
                                    <span>Send us an inquiry</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen pb-30 flex flex-col gap-10">
                    <h2 className="text-3xl tracking-tighter">Our location</h2>
                    <MapContainer center={[51.505, -0.09]} className="flex-1 h-full min-h-[480px] rounded-sm border border-white/30" zoom={13} scrollWheelZoom={false}>
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
            </section>
        </div>
    )
}