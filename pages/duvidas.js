import Head from 'next/head'
import Link from 'next/link'
import HeaderLink from '../components/Header/HeaderLink'

import Aos from "aos"
import "aos/dist/aos.css"

import { FiArrowLeft } from 'react-icons/fi'

export default function Duvidas() {
    return (
        <div>
            <Head>
                <title>Dúvidas Recorrentes | ReInvest Consórcios</title>
                <meta name="description" content="Realize seus planos e conquiste seus objetivos com a Re-Invest!" />
                <link rel="icon" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/favicon.png" />
            </Head>

            <HeaderLink black small />

            <div id="grid-questions" className="p-40 flex flex-col bg-[#F9F9F9]">

                <div className="p-2">
                <Link href="/" passHref>
                    <FiArrowLeft className="arrow-left cursor-pointer hover:opacity-80 transition-all" />
                </Link>
                </div>
                <div className="pt-2 flex flex-col justify-center items-center">

                    <h1 className="text-4xl text-[#15122D] 
                    font-medium">Confira mais dúvidas recorrentes</h1>
                    <p className="text-md text-[#7A7792] text-center">Veja as principais dúvidas sobre o sistema de Consórcio</p>
                </div>
            </div>

            <div className="p-20 flex flex-col justify-center items-center">


                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Como funciona o consórcio de imóveis Ademilar?</p>
                    <p className="max-w-5xl mb-6">Não é financiamento nem empréstimo. Você escolhe um valor de crédito, investe em uma parcela
                        mensalmente e, através de sorteio ou lance, é contemplado com o crédito escolhido.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Ao receber o crédito, é possível usá-lo para comprar, reformar ou construir imóveis
                        residenciais ou comerciais? O consórcio também funciona como um investimento?</p>
                    <p className="max-w-5xl mb-6">Após a contemplação é possível comprar imóveis novos ou usados, residenciais ou comerciais, em qualquer lugar do Brasil,
                        desde que estejam livres de qualquer ônus e passíveis de alienação.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">O consórcio já possui imóveis predefinidos?</p>
                    <p className="max-w-5xl mb-6">Não, a escolha do imóvel fica a critério do cliente. Podem ser imóveis novos ou usados, residenciais ou comerciais.
                        A única regra é que o imóvel esteja localizado no Brasil.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Os valores dos créditos e das parcelas são fixos ou existe alguma correção?</p>
                    <p className="max-w-5xl mb-6">O crédito, e proporcionalmente a parcela, é atualizado anualmente pelo INCC (Índice Nacional de Custo da Construção), para que o consorciado mantenha o poder de compra.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Como é feito o sorteio?</p>
                    <p className="max-w-5xl mb-6">É realizado mensalmente, em datas previamente estipuladas no calendário anual da Ademilar. Para definir os contemplados, os grupos de consórcio utilizam os resultados da extração da Loteria Federal,
                        que equivalem aos números das cotas.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">O que é lance?</p>
                    <p className="max-w-5xl mb-6">É uma forma de tentar antecipar o recebimento do crédito através da oferta de determinado número de parcelas. Você pode fazer uma oferta na assembleia mensal e, caso o seu lance seja o vencedor, o valor será usado
                        para diminuir o prazo de pagamento ou a parcela.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Quanto custa a taxa de administração? Existe alguma outra taxa?</p>
                    <p className="max-w-5xl mb-6">A taxa de administração da Ademilar gira em torno de 0,1% ao mês, uma das mais baixas do mercado. Além dela, após a contemplação, será cobrado o seguro de vida, que é uma garantia para a família do consorciado, pois,
                        na falta do titular da cota, o seguro quita o saldo devedor.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Como posso usar o FGTS?</p>
                    <p className="max-w-5xl mb-6">O FGTS pode ser usado para a oferta de lances, como complemento da carta de crédito na hora da aquisição do imóvel e para amortização ou quitação do plano de consórcio, sempre de acordo com as normas do Conselho
                     Curador da Caixa Econômica Federal.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Em quanto tempo serei contemplado?</p>
                    <p className="max-w-5xl mb-6">Você concorre desde a 1ª assembleia. Porém, não há como prever quando a cota será contemplada. Para participar dos sorteios e poder ofertar lances, suas parcelas devem ser pagas até a data do vencimento.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Como efetuar o pagamento das parcelas?</p>
                    <p className="max-w-5xl mb-6">Através do boleto enviado mensalmente. Você pode solicitar o débito automático junto aos bancos*. *Consulte os bancos disponíveis para débito automático.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Se eu desistir do consórcio, recebo o que paguei de volta?</p>
                    <p className="max-w-5xl mb-6">Caso o grupo tenha sido criado a partir de fevereiro de 2009, a devolução ocorre conforme a Lei 11.795, através de sorteios mensais pela extração da Loteria Federal.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">O que é parcela reduzida / parcela 70%?</p>
                    <p className="max-w-5xl mb-6">É a parcela com 70% do fundo comum. A composição da parcela de consórcio é fundo comum + taxa administrativa. O fundo comum é o valor pago por você pelo crédito contratado – este valor é utilizado para contemplar os demais consorciados do grupo. Já a taxa administrativa é a remuneração da Ademilar. Após a contemplação, suas parcelas são recalculada
                     o valor integral + estes 30% do fundo comum que não foram pagos.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">O que é parcela integral / parcela 100%?</p>
                    <p className="max-w-5xl mb-6">É a parcela com 100% do fundo comum. A composição da parcela de consórcio é fundo comum + taxa administrativa. O fundo comum é o valor pago por você pelo crédito contratado – este valor é utilizado para contemplar os demais consorciados do grupo. Já a taxa
                     administrativa é a remuneração da Ademilar.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">O que é parcela de furo?</p>
                    <p className="max-w-5xl mb-6">Quando adere ao consórcio em um grupo que está em andamento, com X assembleias realizadas. As parcelas, referente à assembleias já realizadas, são chamadas de furo e serão rateadas nas parcelas a vencer quando a sua cota for contemplada,
                     ou poderão ser pagas com recurso próprio.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">Quais são as modalidades de lance?</p>
                    <p className="max-w-5xl mb-6">Há 3 modalidades de lances: Lance fixo, livre e limitado conforme aditivo do grupo. Para mais informações sobre os lances, leia as respostas das dúvidas abaixo.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] max-w-5xl text-xl font-medium mb-2 mt-6">O que é lance fixo?</p>
                    <p className="max-w-5xl mb-6">É o lance com número de parcelas pré-definidas no aditivo do seu grupo. Em caso de empate, o critério de desempate é a cota mais próxima do prêmio da extração da Loteria Federal do mês vigente.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] min-w-5xl text-xl font-medium mb-2 mt-6">O que é lance livre?</p>
                    <p className="max-w-5xl mb-6">É o lance que terá a possibilidade de contemplação quem ofertar o maior número de parcelas. Ou seja, nessa forma o consorciado pode definir o valor que vai oferecer como lance.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] min-w-5xl text-xl font-medium mb-2 mt-6">O que é lance limitado?</p>
                    <p className="max-w-5xl mb-6">Concorrerão as cotas que ofertarem lance diferente da modalidade de lance fixo. O limite máximo de parcelas a ofertar e o pagamento do lance será de acordo com o aditivo de cada grupo. Neste caso, o desembolso
                     (recurso próprio para pagamento do lance) será menor do que no lance livre.</p>
                </div>

                <div className="border-b border-[#DCDCDC]">
                    <p className="text-[#15122D] min-w-5xl text-xl font-medium mb-2 mt-6">Posso participar de todas as modalidades de lance em único mês?</p>
                    <p className="max-w-5xl mb-6">Não é possível. O consorciado poderá participar somente em uma das modalidades de lance. Pois, cada nova oferta de lance substitui a oferta anterior.</p>
                </div>

                <h1 className="text-2xl text-[#15122D] 
                font-medium mt-20 text-center">Caso haja mais dúvidas consulte nosso time de especialistas!</h1>
                <Link href="/#contact" passHref>   
                <button className="btn mt-8">ENTRE EM CONTATO</button>
                </Link>

            </div>

        </div>
    )
}