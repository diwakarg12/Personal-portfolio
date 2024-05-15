import ContactDetails from "../Components/ContactDetails";
import ContactForm from "../Components/ContactForm";
import Image from 'next/image';

const page = () => {
    return (
        <div className="bg-black p-2">
            <h1 className="text-center text-4xl font-medium mt-4 mb-4">My Contact Details</h1>
            <div className="flex flex-wrap items-center justify-center">
                <div className="md:w-1/2 md:p-4 sm:p-0 flex flex-col sm:w-full">
                    <ContactForm />
                </div>
                <div className="md:w-1/2 md:p-4 sm:p-0 sm:w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.9743203073526!2d73.90499527960579!3d18.57519643748124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f98a488927%3A0xaa49ea403a8f36d!2sAPIxLabs!5e0!3m2!1sen!2sin!4v1707811555008!5m2!1sen!2sin" width="600" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe>

                </div>
            </div>
            <div className="w-full flex items-center justify-center py-4 px-4">
                <ContactDetails />
            </div>
        </div>
    )
}

export default page