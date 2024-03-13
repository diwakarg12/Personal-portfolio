import Image from 'next/image'
import styles from '@/app/about/About.module.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";

const AboutFollow = () => {
  return (
    <div className='flex w-full items-center justify-center mb-12'>
      <div className='flex w-1/2 items-center justify-end pr-12'>
        <Image src="/profile2.png" className={`${styles.image} object-cover`} width={200} height={200} alt='Profile' />
      </div>
      <div className='flex flex-col items-center justify-start w-1/2'>
        <div className="border-2 border-red-400 rounded-2xl p-4 pl-14 pr-14 w-1/2">
          <h2 className='text-4xl mb-4'>Follow Me</h2>
          <p className="p-2 text-slate-400 font-semibold mb-4">i'm Diwakar Giri, a Web Developer who works with many Client's to build web Applications.</p>
          <hr />
          <div className='flex text-xl mb-4 mt-4'>
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