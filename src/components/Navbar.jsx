import {useState} from 'react';
import {close, menu} from '../assets';
import { navLinks } from '../constants';
import { useTranslation } from 'react-i18next';
import styles from '../styles';


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const [t, i18n] = useTranslation("global");

  const lan = i18n.language === "es" ? "en" : "es" 

  return (
   <nav className='f-full flex py-6 justify-between items-center navbar'>
    <ul className='list-none sm:flex hidden items-center'>
        {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[14px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-5'} text-grey`}>
                <a href={`#${nav.id}`}>
                    {t(`${nav.title}`)}
                </a>
            </li>
        ))}
    </ul>

    <div className={`sm:flex hidden`}>
      <button onClick={() => i18n.changeLanguage(lan)} className='text-bold text-[18px]'>{lan.toUpperCase()}</button>
    </div>

    

    <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} 
          alt="menu" 
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-beige-gradient
            absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursos-pointer text-[16px] 
            ${index === navLinks.lenght -1 ? 'mr-0' : 'mb-4'} text-grey`}>
              <a href={`#${nav.id}`}>
              {t(`${nav.title}`)}
              </a>
            </li>
          ))}
          </ul>
          </div>

      </div>
    
   </nav>
  )
}

export default Navbar