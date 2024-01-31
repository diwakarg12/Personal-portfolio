import { blogData } from './blogData';
import { MdOutlineArrowOutward } from "react-icons/md";

import Image from 'next/image'
import Link from 'next/link'
const page = () => {
    return (
        <div className="bg-black w-screen flex flex-wrap items-center justify-center p-2">
            {/* <h1 className="text-5xl font-bold">My All Blogs</h1> */}


            {
                blogData.map((item) => (
                    <div className="w-96 h-full m-6" key={item.id}>
                        <Image src={item.img} alt="blog" width={400} height={400} className="rounded-lg" />
                        <small className="ml-1 font-medium">{item.date}</small>
                        <div className=" w-full mt-6 flex items-center justify-start">
                            <p className="w-2/3 text-lg font-medium">{item.title}</p>
                            <div className="w-1/3 flex items-center justify-center pl-20" >
                                <Link href="/"><MdOutlineArrowOutward className="bg-white text-black rounded-lg " /></Link>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default page