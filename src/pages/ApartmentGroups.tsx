

import { Link } from "react-router-dom";
import APARTMENTS from "../assets/APARTMENTS.json";
import { buildingImage1, buildingImage2, buildingImage3, buildingImage4 } from "../assets/images";

const APARTMENT_FEATURES = ["For family", "For resale", "Elevator", "Luxury"];
const IMAGES = [buildingImage1, buildingImage2, buildingImage3, buildingImage4];
const apartments = APARTMENTS
    .slice(0, 4)
    .map((apartment, index) => ({ ...apartment, image: IMAGES[index], features: APARTMENT_FEATURES }));

export default function ApartmentGroups() {

    return (
        <div className="text-brown-dark">
            <section className="px-10">
                <div className="mx-auto max-w-large min-h-screen pt-12 pb-30">
                    <h1 className="text-[3rem] leading-[3rem] tracking-tighter">Apartments</h1>
                    <ul className="mt-16 grid grid-cols-3 gap-6">
                        {
                            apartments.map(({ id, name, city, address, features, image }) => (                                
                                <li key={id}>
                                    <Link to="/apartment-groups/123/apartments" className="flex flex-col gap-4 h-full">
                                        <div className={`aspect-square flex-1 w-full rounded-sm relative overflow-hidden`}>
                                            <img src={image} className="absolute top-0 left-0 w-full h-full object-cover" />
                                            <div className="p-4 relative flex items-center gap-2 flex-wrap">
                                                { 
                                                    features.map((item, index) => (
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
                                            <p className='text-gray-800 text-base'>From {['1,388', '23,383', '33,331', '5,389'][Math.floor(Math.random() * 4)]} RSD</p>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}