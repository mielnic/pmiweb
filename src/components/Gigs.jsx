import React from 'react';
import styles from '../styles';
import { fiverr, arrow } from '../assets';
import { gigs } from '../constants';

const Gigs = () => {
  return (
    <section id='gigs' className={`${styles.flexCenter} my-4`}>
        <div className={`flex justify-around items-center flex-wrap w-full`}>
            <div className={`flex ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] mr-10`}>
            <img src={fiverr} alt="fiverr" className='h-[41px]' />
            </div>
          {gigs.map((gig, index) => (
            <div key={gig.title} className={`flex ${styles.flexCenter} font-poppins font-normal text-[27px] hover:text-grey cursor-pointer sm:min-w-[192px] min-w-[120px]`}>
              <a className='flex flex-row' href={gig.link}>{gig.title}<img src={arrow} alt="arrow"/></a>
            </div>
          ))}
          </div>
    </section>
  )
}

export default Gigs