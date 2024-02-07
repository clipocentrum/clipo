"use client";

import '../styles/index.css'
import { useState } from 'react';
import Image from 'next/image';
import { Specialist, Question, ServiceCard } from '../components/index';
import { HiOutlineChevronRight, HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2'
import { specialists, questions, price_list, services } from '../public/data/index';

function Home() {
    const [isRevealed, setRevealed] = useState(false);
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className={`landing__page overflow-hidden h-screen flex justify-center z-2 bg-center md:bg-top bg-cover relative`}>
                <div className={`flex flex-col relative justify-center text-center cursor-default`}>
                    <div className={`lg:translate-x-56`}>
                        <h1 className={`text-5xl md:text-8xl font-bold text-teal-600 custom__h1__shadow`}>
                            CLiPO
                        </h1>
                        <span className={`text-sm md:text-md italic lg:text-lg text-black text-outline`}>
                            Centrum Leczenia i Profilaktyki Otyłości
                        </span>
                    </div>
                    <div className={`flex justify-center text-white lg:translate-x-56`}>
                        <a className={`bg-slate-900 px-5 md:py-2 md:px-10 font-bold text-base md:text-2xl rounded-full hover:opacity-95 transition-all duration-150`} href="/#o-nas">O Nas</a>
                        <a className={`md:py-2 ml-2 md:ml-5 font-bold text-base md:text-2xl underline decoration-solid hover:opacity-95 transition-all duration-150 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,1)]`} href="/#kontakt">Kontakt</a>
                    </div>
                </div>
                <span className={`text-[.75rem] sm:text-sm md:text-md lg:text-lg text-gray-900 italic absolute bottom-1 left-1`}>Założycielka Centrum Leczenia i Profilaktyki Otyłości - dr n. med. Małgorzata Szałapska</span>
            </section>
            <section id='o-nas' className={`about__us bg-teal-600 w-full px-5 py-2 text-white`}>
                <h1 className={`font-bold text-4xl`}>
                    O Nas
                </h1>
                <span className={`wrapper flex flex-col lg:flex-row`}>
                    <p className={`text-xl py-2 mx-2 text-justify`}>
                        Współpracujemy z najlepszymi specjalistami, którzy kompleksowo zajmują się zdrowiem zarówno dzieci jak i dorosłych. Naszym celem jest poprawa stanu zdrowia i wiedzy społeczeństwa na temat prawidłowego żywienia i roli aktywności fizycznej. Wierzymy, że promując zdrowy styl życia przyczynimy się do zahamowania epidemii otyłości, szczególnie wśród dzieci i młodzieży. W celu zapewnienia Państwu opieki najwyższej jakości oferujemy wielospecjalistyczną pomoc lekarską, nieustannie poszerzamy i aktualizujemy swoją wiedzę zgodnie z najnowszymi wytycznymi, co gwarantuje Państwu dostęp do nowoczesnych metod terapeutycznych. Zapraszamy wszystkie osoby chorujące na otyłość, cukrzycę, zaburzenia endokrynologiczne, choroby przewodu pokarmowego oraz choroby układu ruchu.
                    </p>
                    <img src="/pdf/certyfikat-kompleksowego-leczenia-choroby-otylosciowej.jpeg" alt="certyfikat kompleksowego leczenia choroby otylosciowej" className={`about-certificate flex-1 w-[75%] mx-auto lg:w-[25%] bg-cover lg:mx-0`} />
                </span>
                
            </section>
            <section id='nasi-specjalisci' className={`our__specialists p-1 md:p-3 border-b-2 border-opacity-40 relative`}>
                <h1 className={`h1`}>Nasi specjalisci</h1>
                <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 xl:grid-cols-6 place-items-center`}>
                    {
                        specialists.map((el) => (
                            <Specialist specialist={el} />
                        ))
                    }
                </div>
            </section>
            <section id='uslugi' className={`services relative pb-0`}>
                <div className={`relative`}>
                    <div className={`radial z-0`} />
                    <div className={`services__grid flex flex-wrap justify-center gap-10 px-2 place-items-center z-10`}>
                        {
                            services.map(({service}) => (
                                <div className={`service__card w-56 m-2 z-10`} key={service}>
                                    <ServiceCard service={service} />
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={() => setRevealed(prev => !prev)} className={`text-white font-bold flex gap-2 justify-center items-center w-full text-2xl z-10 relative hover:text-teal-600 transition-all duration-300 py-2`} > 
                        <span className={`${isRevealed && 'rotate-90'} transition-all duration-300 text-teal-600`}>
                            <HiOutlineChevronRight />
                        </span>
                        Zobacz pełny cennik
                    </button>
                </div>
                <div className={`grid grid-cols-1 transition-all duration-300 origin-top scale-y-0 h-0 ${isRevealed && 'revealed'}`}>
                    {
                        price_list.map(({service, specialisation = "", price}) => (
                            <div className={`table__cell `} key={service}>
                                <span className={`cell__title`}>{service}</span>
                                <span className={`cell__specialisation`}>{specialisation}</span>
                                <span className={`cell__price`}>{price}</span>
                            </div>
                        ))
                    }
                    <div className={`table__cell grid-cols-1 font-bold text-xl`}>
                        <button onClick={() => setRevealed(prev => !prev)}className={`transition-all duration-150 underline hover:text-teal-600`}>Zamknij</button>
                    </div>
                </div>
            </section>
            <section id='faq' className={`faq border-b-1`}>
                <h1 className={`h1`}>Najczęściej zadawane pytania</h1>
                {
                    questions.map(({question, answer}) => (
                        <Question question={question} answer={answer} key={question} />
                    ))
                }
            </section>
            <div className={`${isOpen ? 'flex' : 'hidden'} fixed top-[50%] left-[50%] w-dvw h-dvh z-50 -translate-x-[50%] -translate-y-[50%] bg-slate-600 bg-opacity-60 justify-center items-center`} onClick={() => setOpen(false)} >
                <Image src={`/photos/parking.jpg`} alt={'fullView__parking'} height={1000} width={1000} className={`rounded-3xl aspect-square p-5`} />
            </div>
            <section id='kontakt' className={`contact relative grid grid-cols-1 lg:grid-cols-2 w-full place-items-center py-2 px-10 lg:px-20 border-opacity-0`}>
                <div className={`radial`} />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.700528883247!2d19.389570951461806!3d51.84816476195709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bb5ceaf7ee581%3A0x261e0f2373fb7736!2sCentrum%20Leczenia%20i%20Profilaktyki%20Oty%C5%82o%C5%9Bci%20%7C%20CLiPO!5e0!3m2!1spl!2ssk!4v1690658611597!5m2!1spl!2ssk" className={`w-full aspect-square rounded-xl lg:translate-x-10 z-40`} style={{border: "0px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className={`contact__container bg-slate-700 w-full p-2 rounded-xl -translate-y-10 grid grid-rows-3 items-center lg:-translate-y-0 lg:-translate-x-8 lg:shadow-sm z-40`}>

                    <h1 className={`text-teal-600 text-4xl font-bold text-center self-center`}>Kontakt</h1>

                    <div className={`grid grid-cols-2`}>
                        <div className={`contact__el flex flex-col items-center`}>
                            <div className={`contact__title text-white underline text-2xl font-bold`}>
                                Biuro:
                            </div>
                            <a href='tel:+48502239088' className={`contact__link`}>
                                <span className={`contact__icon`}>
                                    <HiPhone />
                                </span>
                                +48 502 239 088
                            </a>
                            <a href='mailto:biuro@clipo.pl' className={`contact__link`}>
                                <span className={`contact__icon`}>
                                    <HiEnvelope />
                                </span>
                                biuro@clipo.pl
                            </a>
                        </div>

                        <div className={`contact__el flex flex-col items-center`}>
                            <div className={`contact__title text-white underline text-2xl font-bold`}>
                                Recepcja:
                            </div>
                            <a href='tel:+48502238797' className={`contact__link`}>
                                <span className={`contact__icon`}>
                                    <HiPhone />
                                </span>
                                +48 502 238 797
                            </a>
                            <a href='mailto:recepcja@clipo.pl' className={`contact__link`}>
                                <span className={`contact__icon`}>
                                    <HiEnvelope />
                                </span>
                                recepcja@clipo.pl
                            </a>
                        </div> 
                    </div>
                    
                    <div className={`py-3 px-2 h-full`}>
                        <div className={`flex justify-around w-full gap-1 items-center h-full`}>
                            <Image src={`/photos/parking.jpg`} alt={'parking'} height={200} width={200} className={`rounded-xl h-36 md:h-48 aspect-square`} onClick={() => setOpen(true)} />
                            
                            <div className={`text-justify text-white flex flex-col h-full justify-between items-center font-bold text-xs md:text-base`}>
                                Miejsce dostosowane do osób z niepełnosprawnością ruchową, darmowy parking.
                                <div className={`contact__adress text-white text-sm md:text-xl self-end flex items-center gap-1 font-bold opacity-80`}>
                                    <span className={`text-2xl font-bold text-red-700`}>
                                        <HiMapPin />
                                    </span>
                                    Al. Struga 39, 95-100 Zgierz
                                </div>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    
                </div>
            </section>
        </>
    );
}

export default Home
