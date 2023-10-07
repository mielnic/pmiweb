import React from 'react';
import styles, {layout} from '../styles';
import { arrow, mateapp } from '../assets';
import { apps } from '../constants';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {

  const [t, i18n] = useTranslation("global");

  return (

    <section id='portfolio'>
        <div className={layout.section}>
        </div>
          <div className={`${layout.section} ${styles.paddingX}`}>
          <div className={`flex flex-col justify-start md:w-[50%]`}>
            <div className='label mb-4'>
              <p className='font-poppins font-semibold text-white text-[12px]'>
                APP DESIGN</p>
            </div>
            <div>
              <h2 className={`flex justify-start font-poppins font-semibold text-[32px]`}>{t("portfolio.feature-1")}</h2>
              <p className={`${styles.paragraph} mb-6 flex justify-start`}>
              {t("portfolio.feature-1-sub")}
              </p>
              <ul className='mt-4 ml-3 list-disc'>
                {apps.map((app, index) => (
                  <li key={app.title} className={`font-poppins font-normal text-[16px] leading-[24px] hover:text-grey cursor-pointer ${index !== apps.length -1 ? 'mb-1' : 'mb-6'}`}>
                    <a className='flex flex-row' href={app.link}>{app.title} <img src={arrow} alt="arrow"/></a>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
          <div className='flex justify-center object-contain ml-4'>
            <img src={mateapp} alt="django" className='w-[100%]'/>
          </div>
        </div>
    </section>
  )
}

export default Portfolio