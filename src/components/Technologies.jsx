import React from 'react'
import styles, {layout} from '../styles'
import { python, javascript, tux, legacy, ellipse, line_1 } from '../assets'
import { useTranslation } from 'react-i18next'

const Technologies = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <section id='technologies' className={`${styles.flexCenter} flex-col px-10 py-10`}>
        <div className='mb-10'>
          <h2 className={`${styles.heading2} ${styles.flexCenter} mb-5`}>
            {t("technologies.title")}
          </h2>
          <p className={`${styles.paragraph} ${styles.flexCenter}`}>
            {t("technologies.subtitle")}
          </p>
        </div>
        
        <div className='flex sm:flex-row flex-col justify-between'>
          <div className='flex flex-col items-center py-5'>
            <img src={python} alt="python" className='max-w-[80px] h-[auto] mb-5'/>
            <p className={`${styles.paragraph} ${styles.flexCenter} mb-5 font-semibold text-[16px]`}>{t("technologies.tech-1")}</p>
            <p className={`${styles.paragraph} ${styles.flexCenter} text-[14px] font-light text-center max-w-[160px]`}>{t("technologies.tech-1-sub")}</p>
          </div>
          <div className='md:flex hidden flex-row items-start mt-3 py-12 px-5'>
            <div className='flex flex-row items-center'>
            <img src={ellipse} alt="" className='mr-1'/>
            <img src={line_1} alt="" className='max-w-[50px] h-[2px]'/>
            <img src={ellipse} alt="" className='ml-1'/>
            </div>
          </div>
          <div className='flex flex-col items-center py-5'>
            <img src={javascript} alt="javascript" className='max-w-[80px] h-[auto] mb-5' />
            <p className={`${styles.paragraph} ${styles.flexCenter} mb-5 font-semibold text-[16px]`}>{t("technologies.tech-2")}</p>
            <p className={`${styles.paragraph} ${styles.flexCenter} text-[14px] font-light text-center max-w-[160px]`}>{t("technologies.tech-2-sub")}</p>
          </div>
          <div className='md:flex hidden flex-row items-start mt-3 py-12 px-5'>
          <div className='flex flex-row items-center'>
            <img src={ellipse} alt="" className='mr-1'/>
            <img src={line_1} alt="" className='max-w-[50px] h-[2px]'/>
            <img src={ellipse} alt="" className='ml-1'/>
            </div>
          </div>
          <div className='flex flex-col items-center py-5'>
            <img src={tux} alt="tux"  className='max-w-[80px] h-[auto]] mb-5'/>
            <p className={`${styles.paragraph} ${styles.flexCenter} mb-5 font-semibold text-[16px]`}>{t("technologies.tech-3")}</p>
            <p className={`${styles.paragraph} ${styles.flexCenter} text-[14px] font-light text-center max-w-[160px]`}>{t("technologies.tech-3-sub")}</p>
          </div>
          <div className='md:flex hidden flex-row items-start mt-3 py-12 px-5'>
          <div className='flex flex-row items-center'>
            <img src={ellipse} alt="" className='mr-1'/>
            <img src={line_1} alt="" className='max-w-[50px] h-[2px]'/>
            <img src={ellipse} alt="" className='ml-1'/>
            </div>
          </div>
          <div className='flex flex-col items-center py-5'>
            <img src={legacy} alt="legacy"  className='max-w-[80px] h-[auto] mb-5'/>
            <p className={`${styles.paragraph} ${styles.flexCenter} mb-5 font-semibold text-[16px]`}>{t("technologies.tech-4")}</p>
            <p className={`${styles.paragraph} ${styles.flexCenter} text-[14px] font-light text-center max-w-[160px]`}>{t("technologies.tech-4-sub")}</p>
          </div>
        </div>
    
    </section>
  )
}

export default Technologies