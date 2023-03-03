import Image from 'next/image';

import Header from 'components/Header';
import LeftBar from 'components/LeftBar';
import Head from 'components/Ui/DataDisplay/Head';

import contactMap from '../../public/images/contact-map.webp';
import downloadBg from '../../public/images/download-bg.webp';
import headerBg2 from '../../public/images/header-bg2.webp';
import mobileMockupHand from '../../public/images/header-mobile-mockup-hand.webp';
import logo from '../../public/images/logo.webp';
import armazempb from '../../public/images/logo/armazempb.webp';
import bb from '../../public/images/logo/bb.webp';
import caixa from '../../public/images/logo/caixa.webp';
import cartoriogaribaldi from '../../public/images/logo/cartoriogaribaldi.webp';
import casatudo from '../../public/images/logo/casatudo.webp';
import dimpool from '../../public/images/logo/dimpool.webp';
import honda from '../../public/images/logo/honda.webp';
import Kanakaiana from '../../public/images/logo/Kanakaiana.webp';
import magalu from '../../public/images/logo/magalu.webp';
import novacosmeticos from '../../public/images/logo/novacosmeticos.webp';
import paguemenos from '../../public/images/logo/paguemenos.webp';
import suggar from '../../public/images/logo/suggar.webp';
import mapMarker from '../../public/images/map-marker.webp';
import motorcycle from '../../public/images/motorcycle.webp';
import qrCode from '../../public/images/qr-code.webp';
import qrcodeFrame from '../../public/images/qrcode-frame.webp';
import screen1 from '../../public/images/screenshots/screen1.webp';
import screen2 from '../../public/images/screenshots/screen2.webp';
import screen3 from '../../public/images/screenshots/screen3.webp';
import screen4 from '../../public/images/screenshots/screen4.webp';
import screen5 from '../../public/images/screenshots/screen5.webp';
import screen6 from '../../public/images/screenshots/screen6.webp';
import screen7 from '../../public/images/screenshots/screen7.webp';
import truck from '../../public/images/truck.webp';

export default function Home() {
  return (
    <>
      <Head />
      <main>
        {/* Header */}
        {Header()}
        {/* LeftBar */}
        {LeftBar()}
        {/* CONTENT */}
        <div className="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 ">
          <nav
            className="flex px-5 py-3 text-gray-700  rounded-lg bg-gray-50 dark:bg-[#1E293B] "
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Templates
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-wrap my-5 -mx-2">
            <div className="w-full lg:w-1/3 p-2">
              <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="object-scale-down transition duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                  <div className="text-xs whitespace-nowrap">Total User</div>
                  <div className="">100</div>
                </div>
                <div className=" flex items-center flex-none text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className='"w-full md:w-1/2 lg:w-1/3 p-2 '>
              <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="object-scale-down transition duration-500 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                  <div className="text-xs whitespace-nowrap">Total Product</div>
                  <div className="">500</div>
                </div>
                <div className=" flex items-center flex-none text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="object-scale-down transition duration-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                  <div className="text-xs whitespace-nowrap">Total Visitor</div>
                  <div className="">500</div>
                </div>
                <div className=" flex items-center flex-none text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
            role="alert"
          >
            <span className="font-medium">Info alert!</span> Change a few things
            up and try submitting again.
          </div>
          <div
            className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">Danger alert!</span> Change a few
            things up and try submitting again.
          </div>
          <div
            className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span className="font-medium">Success alert!</span> Change a few
            things up and try submitting again.
          </div>
        </div>
        {/* Banner ==============================*/}
        <section
          id="banner"
          className="banner-section banner-two full-screen transparent"
          data-type="background"
          data-parallax="yes"
          data-src="/images/header-bg2.jpg"
        >
          <div className="overlay">
            <div className="container">
              <div className="col-sm-6 banner-middle-content">
                <div className="banner-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2
                        className="text-3xl font-bold underline"
                        data-wow-delay="0.7s"
                      >
                        O NOVO JEITO DE PEDIR E RECEBER COM RAPIDEZ
                      </h2>
                      <div
                        className="banner-description wow fadeIn"
                        data-wow-delay="1.0s"
                      >
                        O TôKumSede é um aplicativo super simples e prático de
                        se utilizar.
                        <br />
                        Com ele você pode pedir água, gelo, bebidas e muito
                        mais, sem precisar sair do sofá. Além de conhecer nossos
                        produtos, suas principais características e comparar
                        preços com apenas alguns cliques.
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="download-links text-center">
                        <a
                          href="https://itunes.apple.com/us/app/t%C3%B4kumsede/id1159122953?l=pt&ls=1&mt=8"
                          className="link-item wow fadeInUp"
                          data-wow-delay="0.8s"
                        >
                          <i className="fa fa-apple" />
                          <span className="heading">Disponível na</span>
                          <span className="name">App Store</span>
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=br.com.tokumsede.app"
                          className="link-item wow fadeInUp"
                          data-wow-delay="1.1s"
                        >
                          <i className="fa fa-play" />
                          <span className="heading">Disponível na</span>
                          <span className="name">Play Store</span>
                        </a>
                      </div>
                      {/* /.downlod-links */}
                    </div>
                  </div>
                </div>
                {/* /.banner-content */}
              </div>
              {/* /.col-sm-6 */}
              <div
                className="col-sm-4 hidden-xs wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.2s"
              >
                <div className="application-mockup">
                  <Image
                    className="banner-image-2"
                    src={mobileMockupHand}
                    alt="Application Mockup"
                    width={540}
                    height={734}
                    placeholder="blur"
                  />
                </div>
                {/* /.application-mockup */}
              </div>
              {/* /.col-sm-3 */}
              <div
                className="col-sm-2 hidden-xs wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.2s"
              >
                <Image
                  className="qr-code qr-code-head wow fadeInUp"
                  data-wow-delay="1.1s"
                  src={qrcodeFrame}
                  alt="QR Code do aplicativo ToKumSede"
                  width={211}
                  height={211}
                  placeholder="blur"
                />
              </div>
            </div>
            {/* /.container */}
          </div>
          {/* /.overlay */}
        </section>
        {/* /#banner */}
        {/* Aplicativo
  ==============================*/}
        <section id="aplicativo" className="screenshot-section section-padding">
          <div className="container">
            <h1
              className="section-title text-center text-uppercase wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Conheça nosso <span>Aplicativo</span>
            </h1>
            <div className="stripe iconic wow fadeInUp" data-wow-delay="0.2s">
              <i className="icon-iphone" />
            </div>
            <div
              className="section-description text-center wow fadeInUp"
              data-wow-delay="0.5s"
            >
              Mais comodidade para sua vida. Basta alguns cliques e logo
              entregamos no seu endereço. <a href="#baixe-agora">Baixe agora</a>
            </div>
            {/* /.section-description */}
            <div id="wrapper">
              <div id="myCarousel" data-carousel-3d>
                <Image
                  src={screen2}
                  alt="Apps screen2"
                  width={316}
                  height={564}
                  placeholder="blur"
                />
                <Image
                  src={screen3}
                  alt="Apps screen3"
                  width={316}
                  height={564}
                  placeholder="blur"
                />
                <Image
                  src={screen4}
                  alt="Apps screen4"
                  width={316}
                  height={564}
                  placeholder="blur"
                />
                <Image
                  src={screen5}
                  alt="Apps screen5"
                  width={316}
                  height={564}
                  placeholder="blur"
                />
                <Image
                  src={screen6}
                  alt="Apps screen6"
                  width={316}
                  height={564}
                  placeholder="blur"
                />
                <Image
                  src={screen7}
                  alt="Apps screen7"
                  width={316}
                  height={564}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          {/* /.container */}
        </section>
        {/* /#aplicativo */}
        {/* Por que pedir?
==============================*/}
        <section
          id="porque-pedir"
          className="download-section section-padding top-padding-50"
          data-background="gray"
        >
          <div className="container">
            <h1
              className="section-title text-center text-uppercase wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Por Que Pedir pelo Aplicativo?
            </h1>
            <div className="stripe iconic wow fadeInUp" data-wow-delay="0.2s">
              <i className="icon-user-chat" />
            </div>
            {/*<div class="section-description text-center wow fadeInUp" data-wow-delay="0.5s">
Com ele você pode pedir água, gelo, bebidas e muito mais, sem precisar sair do sofá.
    </div>*/}
            {/* /.section-description */}
            <div className="col-md-6">
              <div className="feature-items style-2 top-padding-20 extra-padding">
                <div className="item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon">
                    <i className="fa fa-rocket" />
                  </div>
                  <div className="content">
                    <h3 className="title">Rápido</h3>
                    <div className="description">
                      Com apenas alguns cliques seu pedido já estará feito. Quem
                      pede pelo aplicativo é atendido antes pelo distribuidor e
                      recebe primeiro.
                    </div>
                  </div>
                </div>
                {/* /.item */}
                <div className="item wow fadeInUp" data-wow-delay="1.0s">
                  <div className="icon">
                    <i className="fa fa-thumbs-o-up" />
                  </div>
                  <div className="content">
                    <h3 className="title">Prático</h3>
                    <div className="description">
                      Grande mix de ótimos produtos, organizados por categoria,
                      com preços e descrições para facilitar sua escolha, sem
                      gastos de tempo e dinheiro ao telefone.
                    </div>
                  </div>
                </div>
                {/* /.item */}
                <div className="item wow fadeInUp" data-wow-delay="0.9s">
                  <div className="icon">
                    <i className="fa fa-lock" />
                  </div>
                  <div className="content">
                    <h3 className="title">Seguro</h3>
                    <div className="description">
                      Somente distribuidores credenciados e com entregadores
                      capacitados lhe atenderão. Nossa avaliação de qualidade
                      permanente e treinamentos contínuos garantem um
                      atendimento eficaz e com a qualidade que você merece.
                    </div>
                  </div>
                </div>
                {/* /.item */}
              </div>
              {/* /.feature-items */}
            </div>
            {/* /.col-md-6 */}
            <div className="col-md-6">
              <div className="feature-items style-2 top-padding-20 extra-padding">
                <div className="item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon">
                    <i className="fa fa-key" />
                  </div>
                  <div className="content">
                    <h3 className="title">Confiável</h3>
                    <div className="description">
                      Monitoramos o serviço prestado no atendimento e entrega
                      dos produtos. Você pode e deve avaliar cada atendimento
                      para nos ajudar no monitoramento de melhorias.
                    </div>
                  </div>
                </div>
                {/* /.item */}
                <div className="item wow fadeInUp" data-wow-delay="0.9s">
                  <div className="icon">
                    <i className="fa fa-usd" />
                  </div>
                  <div className="content">
                    <h3 className="title">Grátis</h3>
                    <div className="description">
                      O aplicativo TôKumSede não cobra nada para você pedir seus
                      produtos. Ao contrário, você ganha tempo e economiza
                      dinheiro ao usá-lo.
                    </div>
                  </div>
                </div>
                {/* /.item */}
                <div className="item wow fadeInUp" data-wow-delay="1.0s">
                  <div className="icon">
                    <i className="fa fa-diamond" />
                  </div>
                  <div className="content">
                    <h3 className="title">Fidelidade premiada</h3>
                    <div className="description">
                      Concorra a prêmios, acumule pontos no cartão fidelidade,
                      sorteios, promoções e muito mais.
                    </div>
                  </div>
                </div>
                {/* /.item */}
                {/*<div class="item wow fadeInUp" data-wow-delay="1.0s">
    <div class="icon">
      <i class="fa fa-diamond"></i>
    </div>

    <div class="content">
      <h3 class="title">User Friendly</h3>
      <div class="description">
        Monotonectally conceptualize high standards.
      </div>
    </div>
  </div>*/}
                {/* /.item */}
              </div>
              {/* /.feature-items */}
            </div>
            {/* /.col-md-6 */}
            {/*<div class="col-sm-6">
<div class="media">
  <div class="media-left">
    <Image class="media-object" src="/images/numeros/one.png" alt="Número um" />
  </div>
  <div class="media-body">
    <h4 class="media-heading">Rápido</h4>
    <p class="text-justify">Com apenas alguns cliques seu pedido já estará feito. Quem pede pelo aplicativo é atendido antes pelo distribuidor e recebe primeiro.</p>
  </div>
</div>

<div class="media">
  <div class="media-left">
    <Image class="media-object" src="/images/numeros/three.png" alt="Número três" />
  </div>
  <div class="media-body">
    <h4 class="media-heading">Seguro</h4>
    <p class="text-justify">Somente distribuidores credenciados e com entregadores capacitados lhe atenderão. Nossa avaliação de qualidade permanente e treinamentos contínuos garantem um atendimento eficaz e com a qualidade que você merece.</p>
  </div>
</div>

<div class="media">
  <div class="media-left">
    <Image class="media-object" src="/images/numeros/five.png" alt="Número cinco" />
  </div>
  <div class="media-body">
    <h4 class="media-heading">Grátis</h4>
    <p class="text-justify">O aplicativo TôKumSede não cobra nada para você pedir seus produtos. Ao contrário, você ganha tempo e economiza dinheiro ao usá-lo.</p>
  </div>
</div>
    </div>
    <div class="col-sm-6">
<div class="media">
  <div class="media-left">
    <Image class="media-object" src="/images/numeros/two.png" alt="Número dois" />
  </div>
  <div class="media-body">
    <h4 class="media-heading">Prático</h4>
    <p class="text-justify">Grande mix de ótimos produtos, organizados por categoria, com preços e descrições para facilitar sua escolha, sem gastos de tempo e dinheiro ao telefone.</p>
  </div>
</div>

<div class="media">
  <div class="media-left">
    <Image class="media-object" src="/images/numeros/four.png" alt="Número quatro" />
  </div>
  <div class="media-body">
    <h4 class="media-heading">Confiável</h4>
    <p class="text-justify">Monitoramos o serviço prestado no atendimento e entrega dos produtos. Você pode e deve avaliar cada atendimento para nos ajudar no monitoramento de melhorias.</p>
  </div>
</div>
    </div>*/}
          </div>
          {/* /.container */}
        </section>
        {/* /#baixe-agora */}
        {/* Download
  ==============================*/}
        <section
          id="quem-somos"
          className="download-section transparent"
          data-type="background"
          data-parallax="yes"
          data-speed={50}
          data-src="/images/download-bg.jpg"
        >
          <div className="overlay section-padding">
            <div className="container">
              <h1
                className="section-title text-center text-uppercase wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Quem Somos?
              </h1>
              <div className="stripe iconic wow fadeInUp" data-wow-delay="0.2s">
                <i className="icon-briefcase" />
              </div>
              <div
                className="section-description text-center wow fadeInUp"
                data-wow-delay="0.5s"
              >
                Rede inovadora de Distribuição de Bebidas.
              </div>
              {/* /.section-description */}
              <div className="top-padding-80" />
              <div className="col-sm-6">
                <p className="text-justify">
                  O TôKumSede é uma rede inovadora de distribuição de bebidas
                  com entrega porta a porta. Através de nossa central telefônica
                  ou por meio de um simples e prático aplicativo, você poderá
                  escolher e pedir garrafões de água mineral, sucos, cervejas, e
                  vários outros produtos disponíveis em nosso mix. Na sua casa
                  ou na sua empresa, seu pedido será entregue em instantes ou em
                  data e horário agendados por você.
                </p>
              </div>
              <div className="col-sm-6">
                <p className="text-justify">
                  Buscando proporcionar rapidez, praticidade e acima de tudo
                  atender às necessidades dos mais distintos clientes, o
                  TôKumSede desenvolveu um aplicativo para tablets e smartphones
                  que permite aos nossos clientes visualizar os produtos, suas
                  principais características e decidir o que pedir. Além disso,
                  o cliente poderá cadastrar vários endereços ( casa, trabalho,
                  etc... ) e com apenas um clique escolher onde quer receber seu
                  pedido.
                </p>
              </div>
            </div>
            {/* /.container */}
          </div>
          {/* /.overlay */}
        </section>
        {/* /#quem-somos */}
        {/* Clientes Parceiros
  ==============================*/}
        <section
          id="parceiros_clientes"
          className="screenshot-section section-padding"
        >
          <div className="container">
            <h1
              className="section-title text-center text-uppercase wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Nossos <span>Parceiros e Clientes</span>
            </h1>
            <div className="stripe iconic wow fadeInUp" data-wow-delay="0.2s">
              <i className="fa fa-star" />
            </div>
            <div
              className="section-description text-center wow fadeInUp"
              data-wow-delay="0.5s"
            >
              Texto frase texto frase. Texto frase texto frase, texto frase
              texto frase. <a href="#link">Parceiros e Clientes</a>
            </div>
            {/* /.section-description */}
            <div id="wrapper" style={{ height: 150 }}>
              <div id="carousel-parceiros" data-carousel-3d data-carousel-3d2>
                <Image
                  src={paguemenos}
                  alt="paguemenos"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={magalu}
                  alt="magalu"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={bb}
                  alt="bb"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={caixa}
                  alt="caixa"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={cartoriogaribaldi}
                  alt="cartoriogaribaldi"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={casatudo}
                  alt="casatudo"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={dimpool}
                  alt="dimpool"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={honda}
                  alt="honda"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={Kanakaiana}
                  alt="Kanakaiana"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={novacosmeticos}
                  alt="novacosmeticos"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={suggar}
                  alt="suggar"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
                <Image
                  src={armazempb}
                  alt="armazempb"
                  width={270}
                  height={150}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          {/* /.container */}
        </section>
        {/* /#Clientes Parceiros */}
        {/* Seja um franqueado
  ==============================*/}
        <section
          id="seja-franqueado"
          className="achievement-section section-padding top-padding-50"
          data-background="gray"
        >
          <div className="container">
            <h1
              className="section-title text-center text-uppercase wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Seja um <span>Franqueado</span>
            </h1>
            <div className="stripe iconic wow fadeInUp" data-wow-delay="0.2s">
              <i className="icon-crown" />
            </div>
            <div
              className="section-description text-center wow fadeInUp"
              data-wow-delay="0.5s"
            >
              Venha fazer parte da rede inovadora de Distribuição de Bebidas.{' '}
              <a href="#fale-conosco">Entre em contato</a>
            </div>
            {/* /.section-description */}
            <div className="achievement-items">
              <div className="row">
                <div
                  className="col-md-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="achieve-item">
                    <div className="icon">
                      <i className="icon-monocle" />
                    </div>
                    <div className="inside">
                      <div className="content">Perfil</div>
                      <div className="name">
                        Modelos de negócio de acordo com o seu perfil.
                      </div>
                    </div>
                  </div>
                  {/* /.achieve-item */}
                </div>
                {/* /.col-md-3 */}
                <div
                  className="col-md-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  <div className="achieve-item">
                    <div className="icon">
                      <i className="icon-chef-hat" />
                    </div>
                    <div className="inside">
                      <div className="content">Qualidade</div>
                      <div className="name">
                        Avaliação de qualidade permanente.
                      </div>
                    </div>
                  </div>
                  {/* /.achieve-item */}
                </div>
                {/* /.col-md-3 */}
                <div
                  className="col-md-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="1.4s"
                >
                  <div className="achieve-item">
                    <div className="icon">
                      <i className="fa fa-users" />
                    </div>
                    <div className="inside">
                      <div className="content">Prática</div>
                      <div className="name">Treinamentos contínuos.</div>
                    </div>
                  </div>
                  {/* /.achieve-item */}
                </div>
                {/* /.col-md-3 */}
                <div
                  className="col-md-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="1.7s"
                >
                  <div className="achieve-item">
                    <div className="icon">
                      <i className="icon-designer-cup" />
                    </div>
                    <div className="inside">
                      <div className="content">Moderno</div>
                      <div className="name">
                        Um aplicativo pronto para você.
                      </div>
                    </div>
                  </div>
                  {/* /.achieve-item */}
                </div>
                {/* /.col-md-3 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.achievement-items */}
          </div>
          {/* /.container */}
        </section>
        {/* /#seja-franqueado */}
        {/* Baixe agora
==============================*/}
        <section
          id="baixe-agora"
          className="download-section section-padding top-padding-50"
        >
          <div className="container">
            <h1
              className="section-title text-center text-uppercase wow fadeInUp"
              data-wow-delay="0.2s"
            >
              Baixe Agora
            </h1>
            <div className="stripe iconic wow fadeInUp" data-wow-delay="0.2s">
              <i className="fa fa-diamond" />
            </div>
            <div
              className="section-description text-center wow fadeInUp"
              data-wow-delay="0.5s"
            >
              Com ele você pode pedir água, gelo, bebidas e muito mais, sem
              precisar sair do sofá.
            </div>
            {/* /.section-description */}
            <div className="download-links top-padding-50 text-center">
              <div className="col-md-offset-3 col-md-2 col-xs-12">
                <a
                  href="https://itunes.apple.com/us/app/t%C3%B4kumsede/id1159122953?l=pt&ls=1&mt=8"
                  className="link-item wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <i className="fa fa-apple" />
                  <span className="heading">Disponível na</span>
                  <span className="name">App Store</span>
                </a>
              </div>
              <div className="col-md-2 col-xs-12">
                <Image
                  className="qr-code wow fadeInUp"
                  data-wow-delay="1.1s"
                  src={qrCode}
                  alt="QR Code do aplicativo ToKumSede"
                  width={788}
                  height={788}
                  placeholder="blur"
                />
              </div>
              <div className="col-md-2 col-xs-12">
                <a
                  href="https://play.google.com/store/apps/details?id=br.com.tokumsede.app"
                  className="link-item wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  <i className="fa fa-play" />
                  <span className="heading">Disponível na</span>
                  <span className="name">Play Store</span>
                </a>
              </div>
            </div>
            {/* /.downlod-links */}
          </div>
          {/* /.container */}
        </section>
        {/* /#baixe-agora */}
        {/* Contact
  ==============================*/}
        <section
          id="fale-conosco"
          className="contact-section transparent"
          data-type="background"
          data-parallax="yes"
          data-src="/images/contact-map.jpg"
        >
          <div className="overlay section-padding">
            <div className="container">
              <h1
                className="section-title text-center text-uppercase wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Fale <span>Conosco</span>
              </h1>
              <div
                className="section-description text-center wow fadeInUp"
                data-wow-delay="0.5s"
              >
                Entre em contato e descubra ainda mais coisas interessantes.
              </div>
              {/* /.section-description */}
              <div className="top-padding-80" />
              <div
                className="col-md-4 contact-info-map wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="row">
                  <div
                    className="contact-details"
                    id="contact-info"
                    style={{ height: 588 }}
                  >
                    <h3 className="contact-title text-uppercase">TôKumSede</h3>
                    <br />
                    <ul className="contact-items">
                      <li className="fa-home">
                        Rua Bernadino de Freitas 145, 1º andar - Centro,
                        Jericó/PB, 58830-000
                      </li>
                      <li className="fa-whatsapp">(83) 9.9882-1242</li>
                      <li className="fa-phone">(83) 9.9882-1342</li>
                      <li className="fa-envelope">contato@tokumsede.com.br</li>
                      <li className="fa-globe">www.tokumsede.com.br</li>
                    </ul>
                    {/* /.contact-item */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div id="conect">
                      <h3 className="contact-title text-uppercase">
                        Conecte-se
                      </h3>
                      <ul className="social-profiles">
                        <li className="facebook">
                          <a
                            href="https://www.facebook.com/tokumsede/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-facebook" />
                            <span>Facebook</span>
                          </a>
                        </li>
                        <li className="instagram">
                          <a
                            href="https://www.instagram.com/tokumsede/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-instagram" />
                            <span>Instagram</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /.contact-details */}
                </div>
                {/* /.row */}
              </div>
              {/* /.col-md-3 */}
              <div className="col-md-8 wow fadeInUp" data-wow-delay="1.1s">
                <div className="contact-container">
                  <h3 className="contact-title text-uppercase">
                    Mensagem Rápida
                  </h3>
                  <div className="contact-form">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Insira seu nome"
                    />
                    <div className="col-md-4" style={{ paddingLeft: 0 }}>
                      <select
                        className="form-control"
                        name="estado"
                        id="estado"
                        placeholder="Insira seu estado"
                      >
                        <option>Selecione seu Estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                      </select>
                    </div>
                    <div
                      className="col-md-4"
                      style={{ paddingRight: 0, paddingLeft: 0 }}
                    >
                      <input
                        type="text"
                        name="cidade"
                        id="cidade"
                        placeholder="Insira sua cidade"
                      />
                    </div>
                    <div className="col-md-4" style={{ paddingRight: 0 }}>
                      <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        placeholder="Insira seu telefone"
                        maxLength={15}
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Insira seu e-mail"
                    />
                    <select
                      className="form-control"
                      name="assunto"
                      id="assunto"
                      placeholder="Insira seu assunto"
                    >
                      <option>Selecione o assunto</option>
                      <option value="duvidas">Dúvidas</option>
                      <option value="reclamacoes">Reclamações</option>
                      <option value="sugestoes">Sugestões</option>
                      <option value="trabalhar">
                        Quero trabalhar com vocês
                      </option>
                      <option value="franqueado">
                        Quero ser um franqueado
                      </option>
                      <option value="outros">Outros</option>
                    </select>
                    <div
                      id="distribuidor"
                      className="form-group"
                      style={{ display: 'none' }}
                    >
                      <div className="col-md-6">
                        <label style={{ marginTop: 10 }}>
                          <i>Já possuo uma distribuição de bebidas:</i>
                        </label>
                      </div>
                      <div
                        className="col-md-6"
                        style={{
                          paddingLeft: 0,
                          paddingRight: 0,
                          display: 'inline'
                        }}
                      >
                        <select className="form-control" id="distribuicao">
                          <option value="Nao">Não</option>
                          <option value="Sim">Sim</option>
                        </select>
                      </div>
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Sua mensagem"
                      defaultValue={''}
                    />
                    <button id="enviar">Enviar</button>
                  </div>
                  {/* /.contact-form */}
                </div>
                {/* /.contact-form */}
              </div>
              {/* /.col-md-9 */}
            </div>
            {/* /.container */}
          </div>
          {/* /.overlay */}
        </section>
        {/* /#contact */}
        {/* Footer
  ==============================*/}
        <section id="footer" className="footer-section">
          <div className="container">
            <p className="copyright-info text-center">
              Copyright © <p id="ano">2016</p> TôKumSede Todos os direitos
              reservados.
            </p>
            {/* /.copyright-info */}
          </div>
          {/* /.container */}
        </section>
        {/* /#footer */}
        {/* Project Scripts
  =====================================*/}
      </main>
    </>
  );
}
