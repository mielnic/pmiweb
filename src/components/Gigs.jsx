import React from 'react';
import styles from '../styles';
import {useState} from 'react';
import { fiverr, arrow, upwork } from '../assets';
import { gigs } from '../constants';
import { useTranslation } from 'react-i18next';

const Gigs = () => {

  const [toggle, setToggle] = useState(false);

  const [t, i18n] = useTranslation("global");

  const lan = i18n.language === "es" ? "en" : "es" 
  
  return (
    <section id='gigs' className={`${styles.flexCenter} my-4`}>
        <div className={`flex justify-center items-center flex-wrap w-full`}>
            <div className={`flex ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] mr-10`}>
            <img src={upwork} alt="upwork" className='h-[41px]' />
            </div>
          {gigs.map((gig, index) => (
            <div key={gig.title} className={`flex ${styles.flexCenter} font-poppins font-normal text-[27px] hover:text-grey cursor-pointer sm:min-w-[192px] min-w-[120px]`}>
              <a className='flex flex-row' href={gig.link}>{t(`${gig.title}`)}<img src={arrow} alt="arrow"/></a>
            </div>
          ))}
          </div>
    </section>
  )
}

export default Gigs