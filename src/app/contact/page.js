import ContactDetails from "../Components/ContactDetails"
import { BiSolidMapPin } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "../Components/ContactForm";

const page = () => {
    return (
        <div className="bg-black p-2">
            <h1 className="text-center text-4xl font-medium mt-4 mb-4">My Contact Details</h1>
            <div className=" w-full flex items-center justify-center">
                <ContactDetails title={"Main Address"} content={"mubarakpur, marhaura, saran-841418"} icon={<BiSolidMapPin className='text-6xl text-orange-400' />} />
                <ContactDetails title={"Phone Number"} content={8235303183} icon={<FaPhoneAlt className='text-5xl text-orange-400' />} />
                <ContactDetails title={"Email Address"} content={"diwakargiri23@gmail.com"} icon={<MdOutlineAttachEmail className='text-5xl text-orange-400' />} />
                <ContactDetails title={"WhatsApp No."} content={7488081301} icon={<FaWhatsapp className='text-5xl text-orange-400' />} />
            </div>
            <div className="flex items-center justify-center">
                <div className="w-1/2 p-4 flex flex-col">
                    <ContactForm />
                </div>
                <div className="w-1/2 p-4"></div>
            </div>
        </div>
    )
}

export default page