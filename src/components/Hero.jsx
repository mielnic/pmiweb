import React from 'react'
import { code_logo, divider, profile } from '../assets';
import styles, {layout} from '../styles';
import { useTranslation } from 'react-i18next';

const Hero = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <section id='hero' className={layout.sectionReverse}>
      <div className={layout.sectionImg}>
        <img src={code_logo} alt="coding" className='max-w-[470px] w-[80%] h-[auto] relative'/>
      </div>
      <div className={`${layout.sectionInfo} px-6 leading-[75px]`}>
        <p className={`flex flex-row items-center ${styles.paragraph} max-w-[470px] mb-5 text-[16px] text-grey font-bold`}> <img src={profile} alt="PM" className='w-[64px] mr-6 rounded-full' /> PAULO MIELNICHUK</p>
        <h1 className={styles.heading2}>{t("hero.consultant")}<br />{t("hero.programmer")}</h1>
        <img src={divider} alt="divider" className='mt-5'/>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{t("hero.subtitle")}</p>
      </div>
    </section>
  )
}

export default Hero