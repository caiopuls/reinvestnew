import Image from 'next/image'
import Link from 'next/link'

import Aos from "aos"
import "aos/dist/aos.css"

import InstagramIcon from '../../assets/instagram-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import LogoBlack from '../../assets/logoreinvest-ademicon-black.png'

export default function Footer() {
    return (
        <div id="footer">
            <div id="footer-grid" className="border-t border-[#C4C4C4] p-8 pl-52 pr-52">
                <div id="footer-up" className="flex flex-row">
                    <div className="pr-48">
                        <p className="font-medium text-xl">Endereço - Unidade Nilo Peçanha</p>
                        <p>Av. Dr. Nilo Peçanha, 2245 - Loja 04, <br />
                            Boa Vista - Porto Alegre, RS<br />
                            CEP: 91330-002. Estacionamento no Local</p>

                        <p className="font-medium text-xl pt-7">Endereço - Unidade Canoas</p>
                        <p>Rua Liberdade (Vila Rosa), 33<br />
                            Marechal Rondon - Canoas, RS<br />
                            CEP: 92020240. Estacionamento no Local</p>
                    </div>

                    <div className="pr-40">
                    <p className="font-medium text-xl">Atendimento</p>
                        <p className="pt-2">UNIDADE NILO PEÇANHA<br />
                        (51) 3737-3033</p>

                        <p className="pt-6">UNIDADE CANOAS<br />
                        (51) 3137-5353</p>
                    </div>

                    <div>
                    <p className="font-medium text-xl pb-2">Siga-nos</p>
                        <div className="flex flex-row">
                        <div className="pr-3">
                            <Link href="https://www.instagram.com/ademicon_portoalegre/" passHref>
                            <Image
                            className="hover:cursor-pointer transition-all hover:opacity-90"
                            src={InstagramIcon}
                            alt="Instagram"
                            />
                            </Link>
                        </div>

                        <div>
                            <Link href="https://www.facebook.com/ademiconunidadeportoalegre/" passHref>
                            <Image
                            className="hover:cursor-pointer transition-all hover:opacity-90"
                            src={FacebookIcon}
                            alt="Facebook"
                            />
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>

                <div id="mobile-footer" className="flex flex-row justify-between">
                    <div>
                    <h1 className="font-medium">Endereço - Unidade Nilo</h1>
                    <p>Nilo Peçanha, 2245 - Loja 04</p>
                    </div>

                    <div id="title-pa">
                    <h1 className="font-medium">Endereço - Unidade Canoas</h1>
                    <p>Rua Liberdade, 33</p>   
                    </div>
                </div>

                <hr className="border-[#D1D1D1] mt-3 mb-3" />

                <div className="flex flex-row items-center justify-between">
                    <div id="logo-footer">
                    <Link href="/" passHref>
                        <Image
                            className="hover:cursor-pointer mr-4"
                            height={55}
                            width={370}
                            src={LogoBlack}
                            alt="Reinvest Consórcios"
                        />
                    </Link>
                    </div>

                    <p className="ml-5">© 2021 Re-Invest Intermediação de Consórcio Eireli. CNPJ: 34.958.779/0001-74.<br /> Todos os direitos reservados | Site desenvolvido com ♡ por <a className="hover:cursor-pointer hover:underline" href="https://instagram.com/caiogarciap">@caiogarciap</a>.</p>
                </div>
            </div>
        </div>
    )
}