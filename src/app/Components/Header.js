import Link from 'next/link';
import headerStyle from '../Styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='text-slate-700 bg-white flex items-center justify-center w-screen'>
            <div className='w-1/4 flex items-center justify-center' >
                <Link href="/"><Image src="/logo2.png" alt="Logo" width={120} height={64} /></Link>
            </div>
            <div className='w-3/5'>
                <ul className='flex items-center justify-center'>
                    <li className={headerStyle.navItem}><Link href="/">Home</Link></li>
                    <li className={headerStyle.navItem}><Link href="/about">About</Link></li>
                    <li className={headerStyle.navItem}><Link href="/services">Services</Link></li>
                    <li className={headerStyle.navItem}><Link href="/portfolio">Portfolio</Link></li>
                    <li className={headerStyle.navItem}><Link href="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className='w-1/4 flex items-center justify-center'>
                <Link href="/contact"><p className='bg-slate-700 text-white font-semibold p-2 rounded-lg hover:bg-green-500 transition delay-100 ease-in '>Let's Talk</p></Link>
            </div>
        </div>
    )
}

export default Header