import Image from 'next/image'

const AboutHero = () => {
    return (
        <div className='flex items-center justify-center'>
            <Image src="/portfolio1.jpeg" className='m-4' width={300} height={100} />
            <Image src="/portfolio1.jpeg" className='m-4' width={300} height={100} />
            <Image src="/portfolio1.jpeg" className='m-4' width={300} height={100} />
        </div>
    )
}

export default AboutHero