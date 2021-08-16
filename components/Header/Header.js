/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ScrollIntoView from 'react-scroll-into-view';

import LogoDefault from '../../assets/logoreinvest-ademicon.png';
import LogoBlack from '../../assets/logoreinvest-ademicon-black.png';

import PhoneIcon from '@material-ui/icons/Phone';


import Aos from "aos"
import "aos/dist/aos.css"
import { Button } from '@material-ui/core';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

export default ({ black, small }) => {

    

    useEffect(() => {
        Aos.init({ duration: 1600 });
    }, []);

    return (
        <header id="app">
            <div data-aos="fade-down" id="header" className={black ? 'black' : ''}>


                <div className="items-center">
                    <div id="contact-div" className={small ? 'small' : ''}>
                        <p className="text-white pr-10 items-center"><PhoneIcon className="text-[#7F7F7F] pb-1" /><span className="font-semibold text-white pl-3">UNIDADE NILO PEÇANHA-POA/RS:  </span>(51) 3737-3033</p>
                        <p className="text-white items-center"><PhoneIcon className="text-[#7F7F7F] pb-1" /><span className="font-semibold text-white pl-3">UNIDADE CANOAS-RS: </span>(51) 3137-5353</p>
                    </div>

                    <div id="top" className={small ? 'small' : ''}>
                        <div id="logo-white" className={black ? 'black' : ''}>
                            <Link href="/" passHref>
                                <Image
                                    height={55}
                                    width={370}
                                    src={LogoDefault}
                                    alt="Reinvest Consórcios"
                                />
                            </Link>
                        </div>
                        <div id="logo-black" className={black ? 'black' : ''}>
                            <Link href="/" passHref>
                                <Image
                                    height={55}
                                    width={370}
                                    src={LogoBlack}
                                    alt="Reinvest Consórcios"
                                />
                            </Link>
                        </div>



                        <ul id="menu" className="flex flex-row items-center pr-16 text-white">
                            <ScrollIntoView selector="#section-1">
                                <Button id="li" className={black ? 'black' : ''}>
                                    FAÇA UMA SIMULAÇÃO
                                </Button>
                            </ScrollIntoView>
                            <ScrollIntoView selector="#about">
                                <Button id="li" className={black ? 'black' : ''}>
                                    QUEM SOMOS
                                </Button>
                            </ScrollIntoView>
                            <ScrollIntoView selector="#steps">
                                <Button id="li" className={black ? 'black' : ''}>
                                    ETAPAS DO CONSÓRCIO
                                </Button>
                            </ScrollIntoView>
                            <ScrollIntoView selector="#questions">
                                <Button id="li" className={black ? 'black' : ''}>
                                    DÚVIDAS
                                </Button>
                            </ScrollIntoView>
                        </ul>

                        <div id="MobileMenu">
                        <Button>
                            <HamburgerMenu />
                        </Button>
                        </div>
                       



                    </div>
                </div>

            </div>
        </header>
    )
}