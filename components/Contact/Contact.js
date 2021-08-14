import Image from 'next/image'
import React, { useEffect } from 'react'
import WhatsImg from '../../assets/whatsapp-logo.svg'

import Aos from "aos"
import "aos/dist/aos.css"

export default function Contact() {

    useEffect(() => {
        Aos.init({ duration: 1600 });
      }, []);

    return (
        <a href="https://api.whatsapp.com/send/?phone=5551996113181&text=Eu+gostaria+de+uma+consulta+com+a+Reinvest">
        <div data-aos="fade-left" className="whats">
            <div className="flex flex-row bg-[#0D161E] p-2 pl-5 pr-5 justify-center items-center shadow-lg 
            rounded-full border border-[#47617A] hover:cursor-pointer">
                <Image
                src={WhatsImg}
                alt="Whatsapp"
                height={32}
                width={32}
                />
                <p id="name-whats" className="pl-2 text-white">Contato</p>
            </div>
        </div>
        </a>
    )
}