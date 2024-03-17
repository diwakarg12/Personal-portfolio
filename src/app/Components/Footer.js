import Link from 'next/link';
import footerStyle from '../Styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='bg-white text-slate-700 pt-10 pb-10 w-full text-black'>
            <div className=' flex items-center justify-center w-full'>
                <div className='w-1/2 flex items-center justify-start pl-32 ' >
                    <Link href="/"><Image src="/logo2.png" alt="Logo" width={120} height={64} /></Link>
                </div>
                <div className='w-1/2'>
                    <ul className='flex items-center justify-center'>
                        <li className={footerStyle.navItem}><Link href="/">Home</Link></li>
                        <li className={footerStyle.navItem}><Link href="/about">About</Link></li>
                        <li className={footerStyle.navItem}><Link href="/services">Services</Link></li>
                        <li className={footerStyle.navItem}><Link href="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='flex flex-col items-center justify-center text-lg mt-4'>
                <p>&copy; 2024 Diwakar Giri. </p>
                <p>Contact: <a title='send mail' className='hover:underline hover:text-blue-800' href="mailto:diwakargiri23@gmail.com">diwakargiri23@gmail.com</a></p>
            </div>
        </div>
    )
}

export default Footer