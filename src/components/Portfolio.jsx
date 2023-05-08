import React from 'react';
import styles, {layout} from '../styles';
import { landing, arrow,django } from '../assets';
import { landingPages, apps } from '../constants';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {

  const [t, i18n] = useTranslation("global");

  return (

    <section id='portfolio'>
        <div className={layout.section}>
          <div className={`flex w-[50%]`}>
          </div>
          <div className='flex flex-col'>
           <h2 className={`${styles.heading2} flex md:justify-start justify-center`}>{t("portfolio.title")}</h2>
              <p className={`${styles.paragraph} flex md:justify-start justify-center`}>
              {t("portfolio.subtitle")}
            </p>
          </div>
        </div>
        <div className={`${layout.section} ${styles.paddingX}`}>
          <div className={`flex flex-col justify-between md:w-[50%]`}>
            <div className='label mb-4'>
              <p className='font-poppins font-semibold text-white text-[12px]'>
                WEB DESIGN</p>
            </div>
            <div>
              <h2 className={`flex justify-start font-poppins font-semibold text-[32px]`}>{t("portfolio.feature-1")}</h2>
              <p className={`${styles.paragraph} mb-6 flex justify-start`}>
              {t("portfolio.feature-1-sub")}
              </p>
              <ul className='mt-4 ml-3 list-disc'>
                {landingPages.map((landing, index) => (
                  <li key={landing.title} className={`font-poppins font-normal text-[16px] leading-[24px] hover:text-grey cursor-pointer ${index !== landingPages.length -1 ? 'mb-1' : 'mb-6'}`}>
                    <p className='flex flex-row'>{landing.title} <img src={arrow} alt="arrow"/></p>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
          <div className='flex justify-center card py-6 object-contain'>
            <img src={landing} alt="landing" className='w-[80%]'/>
          </div>
        </div>
          <div className={`${layout.section} ${styles.paddingX}`}>
          <div className={`flex flex-col justify-between md:w-[50%]`}>
            <div className='label mb-4'>
              <p className='font-poppins font-semibold text-white text-[12px]'>
                APP DESIGN</p>
            </div>
            <div>
              <h2 className={`flex justify-start font-poppins font-semibold text-[32px]`}>{t("portfolio.feature-2")}</h2>
              <p className={`${styles.paragraph} mb-6 flex justify-start`}>
              {t("portfolio.feature-2-sub")}
              </p>
              <ul className='mt-4 ml-3 list-disc'>
                {apps.map((app, index) => (
                  <li key={app.title} className={`font-poppins font-normal text-[16px] leading-[24px] hover:text-grey cursor-pointer ${index !== apps.length -1 ? 'mb-1' : 'mb-6'}`}>
                    <p className='flex flex-row'>{app.title} <img src={arrow} alt="arrow"/></p>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>
          <div className='flex justify-center card py-6 object-contain'>
            <img src={django} alt="django" className='w-[80%]'/>
          </div>
        </div>
    </section>
  )
}

export default Portfolio