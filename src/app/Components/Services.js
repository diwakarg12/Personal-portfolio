// import Link from 'next/link'
// import Image from 'next/image'
// const Services = ({ data }) => {
//     const flexDirectionClass = data.reverseOrder ? 'flex-row-reverse' : 'flex-row';
//     const bgColor = data.reverseOrder ? '' : 'bg-slate-700';
//     return (
//         <div className={`w-full p-10 flex items-center justify-center ${flexDirectionClass} ${bgColor}`}>
//             <div className='w-1/2 p-2 pl-20 pr-20'>
//                 <h2 className='text-2xl font-semibold mb-3 '>{data.title}</h2>
//                 <p className='text-lg'>{data.discription}</p>
//                 <Link href="/"><button className='p-2 bg-orange-500 rounded-md mt-4 '>View Project</button></Link>
//             </div>
//             <div className='w-1/2 p-2 pl-20 pr-10'>
//                 <Image src={data.pic} alt="UI-UX" width={350} height={400} />
//             </div>
//         </div>
//     )
// }

// export default Services