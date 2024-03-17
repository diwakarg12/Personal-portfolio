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
            <div className="w-full flex flex-wrap items-center justify-center">
                <ContactDetails title={"Main Address"} content={"10 Biz Park, New Airport Rd, Viman Nagar, Pune, Maharashtra 411014"} icon={<BiSolidMapPin className='text-6xl text-orange-400' />} />
                <ContactDetails title={"Phone Number"} content={8235303183} icon={<FaPhoneAlt className='text-5xl text-orange-400' />} />
                <ContactDetails title={"Email Address"} content={"diwakargiri23@gmail.com"} icon={<MdOutlineAttachEmail className='text-5xl text-orange-400' />} />
                <ContactDetails title={"WhatsApp No."} content={7488081301} icon={<FaWhatsapp className='text-5xl text-orange-400' />} />
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <div className="md:w-1/2 md:p-4 sm:p-0 flex flex-col sm:w-full">
                    <ContactForm />
                </div>
                <div className="md:w-1/2 md:p-4 sm:p-0 sm:w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.9743203073526!2d73.90499527960579!3d18.57519643748124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f98a488927%3A0xaa49ea403a8f36d!2sAPIxLabs!5e0!3m2!1sen!2sin!4v1707811555008!5m2!1sen!2sin" width="600" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe>

                </div>
            </div>
        </div>
    )
}

export default page