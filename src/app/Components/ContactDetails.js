import React from 'react'
import Link from 'next/link'

const ContactDetails = ({ title, content, icon }) => {
    return (
        <table class="md:w-3/5 sm:w-full bg-white shadow-md">
            <h1 className=" text-black md:text-3xl sm:text-2xl m-auto">Contacts</h1>
            <tbody class="text-blue-gray-900">
                <tr class="border-b border-t border-blue-gray-200">
                    <td class="py-3 px-4 font-semibold">Address</td>
                    <td class="py-3 px-4 font-medium">Chhapra, Bihar</td>
                </tr>
                <tr class="border-b border-t border-blue-gray-200">
                    <td class="py-3 px-4 font-semibold">Email</td>
                    <td class="py-3 px-4 font-medium"><Link target="_blank" href="mailto:diwakargiri23@gmail.com">diwakargiri23@gmail.com</Link></td>
                </tr>
                <tr class="border-b border-blue-gray-200">
                    <td class="py-3 px-4 font-semibold">LinkedIn</td>
                    <td class="py-3 px-4 font-medium"><Link target="_blank" href="https://www.linkedin.com/in/diwakarg12/">diwakarg12</Link></td>
                </tr>
                <tr class="border-b border-blue-gray-200">
                    <td class="py-3 px-4 font-semibold">Github</td>
                    <td class="py-3 px-4 font-medium"><Link target="_blank" href="https://github.com/diwakarg12">diwakarg12</Link></td>
                </tr>
                <tr class="border-b border-blue-gray-200">
                    <td class="py-3 px-4 font-semibold">WhatsApp</td>
                    <td class="py-3 px-4 font-medium">7488081301</td>
                </tr>
                <tr class="border-b border-blue-gray-200">
                    <td class="py-3 px-4 font-semibold">InstaGram</td>
                    <td class="py-3 px-4 font-medium"><Link target="_blank" href="#">diwakarg12</Link></td>
                </tr>
            </tbody>
        </table>
    )
}

export default ContactDetails