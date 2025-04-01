
import { FaBuilding } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { PiGlobeHemisphereEast } from 'react-icons/pi';

import realEstateImage from "./assets/real-estate.jpg";


const NAV_LINKS = [
  "Home page",
  "Apartments",
  "Location"
]

function App() {

  return (
    <div className='font-montserrat text-gray-900'>
      <header className='bg-white sticky top-0 px-10'>
        <div className="mx-auto max-w-large flex items-center justify-between h-20">
          <a href="#!" className='flex items-center gap-2'>
            <FaBuilding size={40} />
            <span className='flex flex-col justify-center'>
              <span className="text-2xl font-light uppercase tracking-wider">Weifert</span>
              <div className="font-light text-xs uppercase tracking-wider">Real estate</div>
            </span>
          </a>
          <div className="flex items-center gap-6">
            <nav>
              <ul className='flex items-center gap-4'>
                {
                  NAV_LINKS.map((item, index) => (
                    <li key={item}>
                      <a href="#" className='flex items-center justify-center gap-2 px-4'>
                        <span className='text-sm uppercase tracking-wide'>{item}</span>
                        {index === 1 ? <MdOutlineKeyboardArrowDown size={16} /> : null}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center text-white bg-brown rounded-sm px-4 h-10">
                <span className='text-sm uppercase'>Contact</span>
              </button>
              <button className="w-10 aspect-square rounded-sm flex items-center justify-center text-gray-800 hover:bg-gray-100">
                <PiGlobeHemisphereEast size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="px-10 mb-10">
        <div className="mt-20 mx-auto max-w-large flex flex-col">
          <h1 className='text-[3rem] leading-[3.4rem] tracking-tight'>FEEL THE LIFE<br />IN THE HEART OF PANČEV</h1>
          <div className="mt-6 flex items-end justify-between gap-20">
            <p className='text-2xl max-w-[16ch]'>With a leading real estate agency</p>
            <button className='h-10 flex items-center justify-center gap-6 border border-brown text-brown px-4 rounded-full hover:bg-brown hover:text-white'>
              <span>Contact us</span>
              <GoArrowRight size={16} />
            </button>
          </div>
          <div className="mt-10 overflow-hidden rounded-sm">
            <img src={realEstateImage} alt="real estate image" className="hover:scale-110 transition-transform duration-300 w-full h-auto block object-cover max-h-[70vh]" />
          </div>
        </div>
      </section>
      <section></section>
    </div>
  )
}

export default App
