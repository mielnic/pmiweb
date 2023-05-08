import React from 'react'
import { about_me } from '../assets';
import styles, {layout} from '../styles';
import { useTranslation } from 'react-i18next';

const About = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <section id='about' className={layout.section}>
      <div className={layout.sectionImg}>
        <img src={about_me} alt="about_me" className='max-w-[470px] w-[50%] h-[auto] relative'/>
      </div>
      <div className={`${layout.sectionInfo} px-6 leading-[75px]`}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[16px] text-grey font-bold`}>{t("about.title")}</p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{t("about.p-1")}<br/><br/>{t("about.p-2")}<br/> <br/>{t("about.p-3")}<br/><br/>{t("about.p-4")}<br/><br/> <a href="mailto: paulo@mielnichuk.com.ar" className='hover:text-grey'>paulo@mielnichuk.com.ar</a></p>
      </div>
    </section>
  )
}

export default About