import Link from 'next/link'
import Image from 'next/image'
import { service } from './serviceOffered'

const page = () => {
    return (
        <div className='bg-black p-6 flex flex-col items-center justify-center'>
            <h1 className='text-center text-4xl font-semibold'>My Services</h1>
            {
                service.map((item) => (
                    <div div className={`w-full p-10 flex items-center justify-center ${item.reverseOrder ? 'flex-row-reverse' : 'flex-row'} ${item.reverseOrder ? '' : 'bg-slate-700'}`} key={item.id}>
                        <div className='w-1/2 p-2 pl-20 pr-20'>
                            <h2 className='text-2xl font-semibold mb-3 '>{item.title}</h2>
                            <p className='text-lg'>{item.discription}</p>
                            <Link href="/"><button className='p-2 bg-orange-500 rounded-md mt-4 '>View Project</button></Link>
                        </div>
                        <div className='w-1/2 p-2 pl-20 pr-10'>
                            <Image src={item.pic} alt="UI-UX" width={450} height={400} />
                        </div>
                    </div>
                ))
            }

        </div >
    )
}

export default page
