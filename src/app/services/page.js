import Link from 'next/link'
import Image from 'next/image'
import { service } from './serviceOffered'

const page = () => {
    return (
        <div className='bg-black md:p-6 sm:p-0 flex flex-col flex-wrap items-center justify-center'>
            <h1 className='text-4xl font-semibold md:text-start'>My Services</h1>
            {
                service.map((item) => (
                    <div className={`w-full p-10 flex flex-col md:flex-row items-center justify-center ${item.reverseOrder ? 'md:flex-row-reverse' : 'md:flex-row'} ${item.reverseOrder ? '' : 'bg-slate-700'} md:mb-4 md:mt-0 lg:mb-0 lg:mt-0 md:text-center sm:text-center lg:text-start`} key={item.id}>
                        <div className='lg:w-1/2 p-2 lg:pl-20 sm:pl-0 lg:pr-20 sm:pr-0 sm:w-full'>
                            <h2 className='text-2xl font-semibold mb-3 '>{item.title}</h2>
                            <p className='text-lg'>{item.discription}</p>
                            <Link href="/portfolio"><button className='p-2 bg-orange-500 rounded-md mt-4 md:text-center '>View Project</button></Link>
                        </div>
                        <div className='lg:w-1/2 p-2 lg:pl-20 lg:pr-10 md:w-full md:pl-0 md:pr-0'>
                            <Image src={item.pic} alt="UI-UX" width={450} height={400} className='md:w-full' />
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default page
