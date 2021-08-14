/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import Image from 'next/image';
import React, { useEffect } from 'react';
import Link from 'next/link';
import ScrollIntoView from 'react-scroll-into-view';

import LogoDefault from '../../assets/logoreinvest-ademicon.png';
import LogoBlack from '../../assets/logoreinvest-ademicon-black.png';

import PhoneIcon from '@material-ui/icons/Phone';
import { FiMenu } from 'react-icons/fi';


import Aos from "aos"
import "aos/dist/aos.css"
import { Button, Drawer, List, ListItem } from '@material-ui/core';

export default ({ black, small }) => {
  const [state, setState] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    setState(open)
  }

  const list = () => {
    <div onClick={toggleDrawer(false)}>
      <List>
        <ListItem button>Funcionouu!</ListItem>
        <ListItem button>Funcionouu!</ListItem>
        <ListItem button>Funcionouu!</ListItem>
      </List>
    </div>
  }

    useEffect(() => {
        Aos.init({ duration: 1600 });
    }, []);

    return (
        <header>
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
                        
                        <div id="MobileMenu" className={black ? 'black' : ''}>
                        <Button onClick={toggleDrawer(true)} className="mr-16">
                          <FiMenu id="fimenu" className="h-10 w-10 text-white flex items-center justify-center" />
                        </Button>
                        <Drawer
                          anchor={'right'}
                          open={state}
                          onClose={toggleDrawer(false)}
                        >
                          {list()}
                        </Drawer>
                        </div>

  
                        

                    </div>
                </div>

            </div>
        </header>
    )
}