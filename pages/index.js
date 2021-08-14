/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Aos from "aos"
import "aos/dist/aos.css"

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import AdemiconLogo from '../assets/ademicon-logo.png'
import AdemilarLogo from '../assets/ademilar-logo.png'
import AdemimotorsLogo from '../assets/ademimotors-logo.png'
import CompraCon from '../assets/compracon.png'

import GroupIcon from '../assets/group-icon.svg'
import ParcelasIcon from '../assets/parcelas-icon.svg'
import MoneyIcon from '../assets/money-icon.svg'
import HouseIcon from '../assets/houseIcon.svg'

import AdemilarPhoto from '../assets/ademilarphoto.png'

import ReformaImg from '../assets/reforma.png'
import AposentadoriaImg from '../assets/aposentadoria.png'
import ImoveisImg from '../assets/imoveis.png'
import TerrenoImg from '../assets/terreno.png'
import InvestimentoImg from '../assets/investimento.png'

import WhatsIcon from '../assets/whatsapp-logo.svg'
import PhoneIcon from '../assets/call-us.svg'
import MailIcon from '../assets/email-talk.svg'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
]

export default () => {
  const [blackHeader, setBlackHeader] = useState(false);
  const [smallHeader, setSmallHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 150) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 150) {
        setSmallHeader(true);
      } else {
        setSmallHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);


// webIndex start here
  return (

    <div>
      <Head>
        <title>Reinvest Consórcios - Venha conhecer!</title>
        <meta name="description" content="Realize seus planos e conquiste seus objetivos com a Re-Invest!" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <Header black={blackHeader} small={smallHeader} />
      <Contact />

      <section id="section-1">
        <div id="backgroundone" className="w-full flex items-center">

          <div data-aos="fade-right" className="bg-white p-6 flex flex-col items-center justify-center
        max-w-md rounded-lg shadow-3xl  border-2 border-[#E7E7E7]">

            <div className="text-center">
              <p className="text-lg text-[#7A7792]">REALIZE SEUS SONHOS.</p>
              <p className="text-2xl font-semibold text-[#15122D]">SIMULE SEU CONSÓRCIO!</p>
            </div>

            <hr className=" border border-[#f5f5f5] w-full mt-6 mb-6" />


            <div className="text-start pt-2 pb-12 flex jusitfy-center content-center items-center">
              <p className="max-w-xs">Realize seus planos e conquiste
                seus objetivos com a Re-Invest! <br />
                <br />
                Clique abaixo para fazer uma
                simulação de consórcio.</p>
            </div>
            <div className="text-center">
              <Link href="https://licenciado.ademicon.com.br/adriano-escalona" target="_blank" passHref>
                <button className="btn">SIMULE AGORA</button>
              </Link>
            </div>
          </div>
          
          
          
        </div>
      </section>

      <section id="brands">
        <div id="brands-s" className="w-full flex flex-row items-center
        p-4 justify-center">
          <p id="licenciado" className="pr-8 text-black text-base">LICENCIADO:</p>
          <Link href="https://www.ademicon.com.br/" passHref>
            <Image
              className="pl-5 pr-5 hover:cursor-pointer hover:opacity-80 transition-all"
              src={AdemiconLogo}
              alt="Ademicon"
            />
          </Link>

          <hr className="border border-gray-300 h-20 ml-10 mr-10 items-center" />

          <div className="pr-10 hover:cursor-pointer hover:opacity-80 transition-all">
            <Link href="https://ademilar.com.br/" passHref>
              <Image
                src={AdemilarLogo}
                alt="Ademilar"
              />
            </Link>
          </div>

          <div className="hover:cursor-pointer hover:opacity-80 transition-all">
            <Link href="https://www.ademimotors.com.br/" passHref>
              <Image
                src={AdemimotorsLogo}
                alt="Ademimotors"
              />
            </Link>
          </div>

        </div>
      </section>

      <section id="about">
        <div className="flex-col justify-center items-center text-center">
          <h1 className="pt-36 text-[#15122D] text-4xl font-Lato font-medium">QUEM SOMOS?</h1>
          <hr id="styled" className="m-auto mb-12 mt-5" />

          <div id="grid-about" className="grid gap-4 grid-cols-2 justify-center max-w-5xl m-auto pb-48 p-4">

            <div id="cards" data-aos="zoom-out" data-aos-duration="1000" className="box text-3xl font-medium text-[#1E4C8B]">
              A maior administradora independente de consórcios do Brasil.
              <p className="text-lg font-normal text-black">Banco Central do Brasil - Bacen (mar/21)</p>
            </div>

            <div id="cards" data-aos="zoom-out" data-aos-duration="1500" className="box text-4xl font-medium flex flex-col justify-center text-[#4072B8]">
              +110 lojas físicas
              <p className="text-lg font-normal text-black">por todo o Brasil</p>
            </div>

            <div id="cards" data-aos="zoom-out" data-aos-duration="2000" className="box text-4xl font-medium flex flex-col justify-center text-[#4072B8]">
              1ª Loja Ademicon
              <p className="text-lg font-normal text-black">em Porto Alegre</p>
            </div>

            <div id="cards" data-aos="zoom-out" data-aos-duration="2500" className="box text-3xl font-medium text-[#1E4C8B]">
              Pioneiros e especialistas em consórcio de imóveis.
            </div>

          </div>
        </div>
        <hr className="border-1 border-[#E1E1E1]" />
      </section>

      <section id="steps">
        <div className="justify-center items-center text-center">
        <h1 className="pt-36 text-[#15122D] text-4xl font-Lato font-medium">ETAPAS DO CONSÓRCIO</h1>
          <hr id="styled" className="m-auto mb-12 mt-5" />
          
          
          <div id="cards-b-steps" className="flex flex-row justify-center pl-10 pr-10 gap-5 pb-48">
            <div>
              <div id="card-step" data-aos="fade-up" data-aos-duration="1000" className="bg-white box p-8 h-96 border-t-8 border-[#75C0FA]">
                <div className="flex flex-col justify-center">
                  <Image
                    src={GroupIcon}
                    height={117}
                    width={117}
                    alt="Grupo"
                  />

                  <p className="text-[#15122D] font-medium text-center text-xl mt-4">
                    Escolha do <br /> grupo/crédito/prazo
                  </p>

                  <p className="text-[#ACACAC] text-md max-w-xs mt-6">Escolha
                    o melhor grupo para o seu perfil de investidor, focando no
                    objetivo que você dará ao seu crédito.</p>
                </div>
              </div>
            </div>

            <div>
              <div id="card-step-2" data-aos="fade-up" data-aos-duration="1500" className="bg-white box p-8 h-96 border-t-8 border-[#65D7DE]">
                <div className="flex flex-col justify-center">
                  <Image
                    src={ParcelasIcon}
                    height={117}
                    width={117}
                    alt="Grupo"
                  />

                  <p className="text-[#15122D] font-medium text-center text-xl mt-4">
                    Escolha da <br /> parcela mensal
                  </p>

                  <p className="text-[#ACACAC] text-md max-w-xs mt-6">Escolha a melhor parcela mensal
                    para o seu orçamento/objetivo.</p>
                </div>
              </div>
            </div>

            <div>
              <div id="card-step-3" data-aos="fade-up" data-aos-duration="2000" className="bg-white box p-8 h-96 border-t-8 border-[#EFD164]">
                <div className="flex flex-col justify-center">
                  <Image
                    src={MoneyIcon}
                    height={117}
                    width={117}
                    alt="Grupo"
                  />

                  <p className="text-[#15122D] font-medium text-center text-xl mt-4">
                    Contemplação <br /> 
                  </p>

                  <p className="text-[#ACACAC] text-md max-w-xs mt-6">Você possui diversas maneiras de contemplar o seu crédito, seja por sorteio ou escolhendo uma
                    alternativa de lance na sua assembleia mensal.</p>
                </div>
              </div>
            </div>

            <div>
              <div id="card-step-4" data-aos="fade-up" data-aos-duration="2500" className="bg-white box p-8 h-96 border-t-8 border-[#DC9DD1]">
                <div className="flex flex-col justify-center">
                  <Image
                    src={HouseIcon}
                    height={117}
                    width={117}
                    alt="Grupo"
                  />

                  <p className="text-[#15122D] font-medium text-center text-xl mt-4">
                    Utilização <br />do crédito
                  </p>

                  <p className="text-[#ACACAC] text-md max-w-xs mt-6">Você pode comprar, construir, investir ou reformar imóveis, além de outras
                    oportunidades de utilização do crédito.</p>
                </div>
              </div>
            </div>

         
          </div>
          
        </div>
      </section>

      <section id="ad">
        <div id="banner-1" className="flex flex-col p-32 justify-center">
          <Image
            data-aos="fade-right"
            src={CompraCon}
            height={121}
            width={454}
            alt="Compra compartilhada"
          />
          <p className="max-w-lg text-white pt-12">O compartilhamento é algo muito presente no cotidiano dos brasileiros, e esse conceito está presente no DNA do consórcio: Pessoas se juntam em grupo, compartilham objetivos e conquistam projetos sem juros nem entrada. É assim que a Ademicon vê
            o consórcio, como uma compra compartilhada.<br />
            <br />
            Vem compartilhar com a gente!</p>
        </div>
      </section>

      <section id="contemplacao" className="bg-[#FCFCFC]">
        <div className="flex flex-col justify-center items-center">

          <div className="flex pt-20 items-center justify-center pb-20">
            <div id="text-con" className="float-left flex flex-col 
          justify-center pl-6 pr-20">
              <h2 className="font-medium text-4xl text-[#15122D]">Créditos contemplados</h2>
              <hr className="max-w-xs border-1 border-gray-200 mt-4 mb-4" />
              <p className="max-w-sm mb-6">Nós possuímos diversas opções de cartas de créditos
                contempladas para você comprar seu imóvel ou veículo.<br />
                <br />
                Venha conhecer!
                Entre em contato conosco.</p>

              <ScrollIntoView selector="#contact">
                <div className="float-left">
                <button data-aos="zoom-out" data-aos-duration="1000" className="btn">FALE CONOSCO</button>
                </div>
              </ScrollIntoView>

            </div>

            <div id="poa" data-aos="fade-left" >
              <Image
                className=" rounded-md"
                src={AdemilarPhoto}
                alt="Ademicon unidade"
                height={487}
                width={778}
              />
              <p className="flex-col text-gray-600">Unidade Nilo Peçanha, 2245 - Porto Alegre</p>
            </div>
          </div>
        </div>
        <hr className="border-1 border-[#E1E1E1]" />
      </section>

      <section id="credit">
      <h1 className="pt-36 text-[#15122D] flex justify-center items-center text-4xl font-Lato font-medium">COMO USAR SEU CRÉDITO</h1>
      <h2 id="secundario" className="text-lg text-[#7A7792] flex justify-center items-center
          pl-2 pr-2">Veja abaixo formas de como utilizar seu crédito com consórcio.</h2> 
      <hr id="styled" className="m-auto mb-12 mt-4" />
        

        

        <div id="row-credit" className="flex flex-row justify-center items-center gap-5 pb-36 pl-8 pr-8">
        <Carousel id="break" breakPoints={breakPoints}>
          <div>
          
            <div data-aos="fade-up" data-aos-duration="1000" id="card-credit" className="bg-white box-credit">
              <div className="flex flex-col justify-center items-center">

                <Image
                  src={ReformaImg}
                  alt="Reforma"
                  height={236}
                  width={326}
                />
                <div className="box-title shadow-lg">
                  <p className="text-white font-medium text-center text-xl p-2">
                    Reforma/Construção
                  </p>
                </div>

                <div className="flex flex-col items-center p-2">
                  <p className="text-[#15122D] font-medium text-center text-2xl mt-4 p-2">
                    R$ 100 mil
                  </p>
                  <hr className="border border-[#F3F3F3] w-full flex items-center justify-center" />
                  <p className="text-[#ACACAC] text-md max-w-xs p-2">com parcelas a partir de</p>

                  <p className="text-[#15122D] font-medium text-center text-2xl pb-8">
                    R$ 438,79
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div data-aos="fade-up" data-aos-duration="1500" id="card-credit" className="bg-white box-credit">
              <div className="flex flex-col justify-center items-center">

                <Image
                  src={AposentadoriaImg}
                  alt="Aposentadoria"
                  height={236}
                  width={326}
                />
                <div className="box-title-2 shadow-lg">
                  <p className="text-white font-medium text-center text-xl p-2">
                    Aposentadoria
                  </p>
                </div>

                <div className="flex flex-col items-center p-2">
                  <p className="text-[#15122D] font-medium text-center text-2xl mt-4 p-2">
                    R$ 200 mil
                  </p>
                  <hr className="border border-[#F3F3F3] w-full flex items-center justify-center" />
                  <p className="text-[#ACACAC] text-md max-w-xs p-2">com parcelas a partir de</p>

                  <p className="text-[#15122D] font-medium text-center text-2xl pb-8">
                    R$ 1.016,36
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div data-aos="fade-up" data-aos-duration="2000" id="card-credit" className="bg-white box-credit">
              <div className="flex flex-col justify-center items-center">

                <Image
                  src={ImoveisImg}
                  alt="Imoveis"
                  height={236}
                  width={326}
                />
                <div className="box-title-3 shadow-lg">
                  <p className="text-white font-medium text-center text-xl p-2">
                    Imóveis
                  </p>
                </div>

                <div className="flex flex-col items-center p-2">
                  <p className="text-[#15122D] font-medium text-center text-2xl mt-4 p-2">
                    R$ 300 mil
                  </p>
                  <hr className="border border-[#F3F3F3] w-full flex items-center justify-center" />
                  <p className="text-[#ACACAC] text-md max-w-xs p-2">com parcelas a partir de</p>

                  <p className="text-[#15122D] font-medium text-center text-2xl pb-8">
                    R$ 1.316,36
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div data-aos="fade-up" data-aos-duration="2500" id="card-credit" className="bg-white box-credit">
              <div className="flex flex-col justify-center items-center">

                <Image
                  src={TerrenoImg}
                  alt="Terreno"
                  height={236}
                  width={326}
                />
                <div className="box-title-4 shadow-lg">
                  <p className="text-white font-medium text-center text-xl p-2">
                    Terreno
                  </p>
                </div>

                <div className="flex flex-col items-center p-2">
                  <p className="text-[#15122D] font-medium text-center text-2xl mt-4 p-2">
                    R$ 500 mil
                  </p>
                  <hr className="border border-[#F3F3F3] w-full flex items-center justify-center" />
                  <p className="text-[#ACACAC] text-md max-w-xs p-2">com parcelas a partir de</p>

                  <p className="text-[#15122D] font-medium text-center text-2xl pb-8">
                    R$ 2.193,93
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div data-aos="fade-up" data-aos-duration="3000" id="card-credit" className="bg-white box-credit">
              <div className="flex flex-col justify-center items-center">

                <Image
                  src={InvestimentoImg}
                  alt="Investimento"
                  height={236}
                  width={326}
                />
                <div className="box-title-5 shadow-lg">
                  <p className="text-white font-medium text-center text-xl p-2">
                    Investimento
                  </p>
                </div>

                <div className="flex flex-col items-center p-2">
                  <p className="text-[#15122D] font-medium text-center text-2xl mt-4 p-2">
                    R$ 700 mil
                  </p>
                  <hr className="border border-[#F3F3F3] w-full flex items-center justify-center" />
                  <p className="text-[#ACACAC] text-md max-w-xs p-2">com parcelas a partir de</p>

                  <p className="text-[#15122D] font-medium text-center text-2xl pb-8">
                    R$ 2.741,67
                  </p>
                </div>
              </div>
            </div>
          </div>
         
           </Carousel>

           
        </div>
        <hr className="border-1 border-[#E1E1E1]" />
      </section>

      <section id="questions">
        <div className="flex flex-col justify-center items-center p-8">
        <h1 className="pt-36 text-[#15122D] text-4xl font-Lato font-medium">DÚVIDAS</h1>
          <hr id="styled" className="m-auto w-full mb-12 mt-5" />

          <div data-aos="fade-right" data-aos-duration="1000" className="border-b border-[#DCDCDC]">
            <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Como funciona o consórcio de imóveis Ademilar?</p>
            <p className="max-w-5xl mb-6">Não é financiamento nem empréstimo. Você escolhe um valor de crédito, investe em uma parcela
              mensalmente e, através de sorteio ou lance, é contemplado com o crédito escolhido.</p>
          </div>

          <div data-aos="fade-right" data-aos-duration="1500" className="border-b border-[#DCDCDC]">
            <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Ao receber o crédito, é possível usá-lo para comprar, reformar ou construir imóveis
              residenciais ou comerciais? O consórcio também funciona como um investimento?</p>
            <p className="max-w-5xl mb-6">Após a contemplação é possível comprar imóveis novos ou usados, residenciais ou comerciais, em qualquer lugar do Brasil,
              desde que estejam livres de qualquer ônus e passíveis de alienação.</p>
          </div>

          <div data-aos="fade-right" data-aos-duration="2000" className="border-b border-[#DCDCDC]">
            <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">O consórcio já possui imóveis predefinidos?</p>
            <p className="max-w-5xl mb-6">Não, a escolha do imóvel fica a critério do cliente. Podem ser imóveis novos ou usados, residenciais ou comerciais.
              A única regra é que o imóvel esteja localizado no Brasil.</p>
          </div>

          <div data-aos="fade-right" data-aos-duration="2500" className="border-b border-[#DCDCDC] mb-14">
            <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Os valores dos créditos e das parcelas são fixos ou existe alguma correção?</p>
            <p className="max-w-5xl mb-6">O crédito, e proporcionalmente a parcela, é atualizado anualmente pelo INCC (Índice Nacional de Custo da Construção), para que o consorciado mantenha o poder de compra.</p>
          </div>

          <Link href="/duvidas" passHref>
            <button className="btn mb-24">VEJA MAIS DÚVIDAS</button>
          </Link>

        </div>
        <hr className="border-1 border-[#E1E1E1]" />
      </section>

      <section id="contact">
        <div className="flex flex-col justify-center items-center">
        <h1 className="pt-36 text-[#15122D] text-4xl font-Lato font-medium flex flex-col justify-center items-center text-center">QUER UMA CONSULTA PERSONALIZADA?</h1>
          <p id="title-contact" className="pt-4 text-[#7A7792]">Escolha o canal de comunicação de sua preferência e fale com nossa equipe de especialistas.</p>
          <hr id="styled" className="m-auto w-full mb-12 mt-5" />

          <div id="row-contact" className="flex flex-row justify-center gap-8">
            <div>
              <div id="card-contact" data-aos="fade-up" data-aos-duration="1000" className="bg-white box p-8 border-t-8 mb-48">
                <div className="flex flex-col justify-center">
                  <Image
                    src={WhatsIcon}
                    height={58}
                    width={58}
                    alt="Whatsapp"
                  />

                  <p className="text-[#15122D] font-medium text-center text-xl mt-4">
                    Fale por Whatsapp
                  </p>

                  <button className="btn mt-8 bg-[#1DE081] hover:bg-[#17AD64]">
                    <a href="https://api.whatsapp.com/send/?phone=5551996113181&text=Olá!+Eu+gostaria+de+uma+consulta+com+a+Reinvest">FALE CONOSCO</a>
                  </button>

                </div>
              </div>
            </div>

            <div>
              <div id="card-contact" data-aos="fade-up" data-aos-duration="1000" className="bg-white box p-8 border-t-8 mb-24">
                <div className="flex flex-col justify-center">
                  <Image
                    src={PhoneIcon}
                    height={58}
                    width={58}
                    alt="Telefone"
                  />

                  <p className="text-[#15122D] font-medium text-center text-xl mt-4">
                    Ligue para nós
                  </p>

                  <p className="text-[#15122D] font-normal text-center text-lg mt-4">
                    <span className="font-medium">NILO PEÇANHA-POA/RS:</span> (51) 3737-3033
                  </p>
                  <p className="text-[#15122D] font-normal text-center text-lg pb-2">
                    <span className="font-medium">CANOAS-RS:</span> (51) 3137-5353
                  </p>

                </div>
              </div>
            </div>

            <div>
              <div id="card-contact" data-aos="fade-up" data-aos-duration="1000" className="bg-white box p-8 border-t-8 mb-24">
                <div className="flex flex-col justify-center">
                  <Image
                    src={MailIcon}
                    height={58}
                    width={58}
                    alt="Email"
                  />

                  <p className="text-[#15122D] font-medium text-center text-xl mt-4">
                    Mande um E-mail
                  </p>

                  <button className="btn mt-8 bg-[#2682D7] hover:bg-[#23629C]">
                    <a href="mailto:adriano.escalona@licenciadoademilar.com.br">FALE CONOSCO</a>
                  </button>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  )
}