import { projectData } from '../projectsData';
import Image from 'next/image';
import Link from 'next/link';

const Page = ({ params }) => {

    const urltitle = params.urltitle;
    const data = projectData.find((item) => item.urltitle == urltitle);
    console.log(data);

    return (
        <div className='flex flex-col items-center justify-center sm:w-screen'>
            <div className='mt-12 flex items-center justify-center overflow-x-hidden'>
                <Image src={data?.img} width={400} height={400} className='w-1/3 sm:hidden lg:block h-80 mt-32 rounded-lg' alt="" />
                <Image src={data?.img} width={400} height={400} className='lg:w-2/3 sm:w-11/12 mx-2 h-[28rem] object-cover rounded-lg' alt="" />
                <Image src={data?.img} width={400} height={400} className='w-1/3 sm:hidden lg:block h-80 mt-32 rounded-lg' alt="" />
            </div>
            <div className='ml-36 mr-36 pt-8 sm:ml-8 sm:mr-8'>
                <h1 className='text-4xl font-extrabold text-center mb-12'>{data?.title}</h1>
                <h2 className='text-3xl font-semibold mb-4'>Overview</h2>
                <p className='text-gray-500 font-medium'>{data?.description}</p>
                <p className='underline text-blue-500 text-xl font-medium'><Link href={data?.link ? data?.link : ""} target='_blank'>Please Visit this link to access the website</Link></p>
                <h2 className='text-2xl text-gray-500 font-semibold mb-8 mt-8'>Key Features</h2>
                {
                    data?.features?.map((feature, index) => (
                        <div key={index}>
                            <h3 className='text-xl font-semibold'>{feature?.title}</h3>
                            <p className='font-medium text-gray-500'>{feature?.desc}</p>
                            <hr className='my-4 w-11/12 border border-gray-700 mt-6 mb-6' />
                        </div>
                    ))
                }
                <h2 className='text-3xl font-semibold mt-8 mb-2'>Tools Used</h2>
                <h3 className='text-xl font-medium mb-12 text-gray-500'>{data?.toolsUsed}</h3>
            </div>
        </div>
    );
};

export default Page;


