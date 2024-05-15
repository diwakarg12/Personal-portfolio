import Image from 'next/image'
import styles from '@/app/about/About.module.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";

const AboutFollow = () => {
  return (
    <div className='flex w-full lg:text-start md:text-center items-center justify-center mb-12'>
      <div className='flex lg:w-1/3lg:block sm:hidden items-center justify-center'>
        <Image src="/profile2.png" className={`${styles.image} object-cover`} width={200} height={180} alt='Profile' />
      </div>
      <div className='flex flex-col items-center lg:w-2/3 md:w-full'>
        <div className="border-2 border-red-400 rounded-2xl p-4 lg:pl-14 lg:pr-14 lg:w-1/2 md:pl-0 md:pr-0 md:w-3/4">
          <h2 className='text-4xl mb-4'>Follow Me</h2>
          <p className="p-2 text-slate-400 font-semibold mb-4">i`m Diwakar Giri, a Web Developer who works with many Client`s to build web Applications.</p>
          <hr />
          <div className='flex sm:items-center sm:justify-center lg:justify-start lg:items-start text-xl mb-4 mt-4'>
            <TiSocialLinkedinCircular className={styles.icon} />
            <IoLogoInstagram className={styles.icon} />
            <TiSocialFacebookCircular className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFollow