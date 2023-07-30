"use client";

import '../../styles/index.css'
import ServiceCard from '../../components/service-card';
import { BiRightArrow, BiPhone, BiMailSend, BiPin } from 'react-icons/bi';
import { useState } from 'react';
import Specialist from '../../components/specialist';
import Question from '../../components/question';

function Home() {
    const [isRevealed, setRevealed] = useState(false)

    return (
        <>
            <section className={`landing__page py-80 flex justify-center z-10`}>
                <div className={`flex flex-col text-center cursor-default`}>
                    <h1 className={`text-8xl font-bold text-green-500 drop-shadow-md`}>CLiPO</h1>
                    <div className={`flex justify-between text-white`}>
                        <a className={`bg-slate-900 py-2 px-4 font-bold text-2xl rounded-2xl hover:opacity-95 transition-all duration-150`} href="#">O Nas</a>
                        <a className={`py-2 drop-shadow-md font-bold text-2xl underline decoration-solid hover:opacity-95 transition-all duration-150`} href="#">Kontakt</a>
                    </div>
                </div>
            </section>
            <section id='o-nas' className={`about__us bg-green-500 w-full px-5 py-2 text-white`}>
                <h1 className={`font-bold text-4xl`}>
                    O Nas
                </h1>
                <p className={`text-xl py-2`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, molestiae quasi, quam iure consectetur labore repellendus placeat atque at ex voluptatibus animi reiciendis voluptatem reprehenderit veniam? Fugiat accusantium quas impedit.
                </p>
            </section>
            <section id='uslugi' className={`services`}>
                <div className={`services__grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-1 xl:grid-cols-5 place-items-center`}>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
                <button onClick={() => setRevealed(prev => !prev)} className={`text-white font-bold flex gap-2 justify-center items-center w-full text-2xl hover:text-green-500 transition-all duration-150 py-2`} > 
                    <span className={`${isRevealed && 'rotate-90'} transition-all duration-150 text-green-500`}>
                        <BiRightArrow />
                    </span>
                    Zobacz pelny cennik
                </button>
                <div className={`grid grid-cols-1 transition-all duration-150 origin-top scale-y-0 h-0 ${isRevealed && 'revealed'}`}>
                    <div className={`table__cell `}>
                        <span className={`cell__title`}>Lorem ipsum dolor</span>
                        <span className={`cell__price`}>2000 zl</span>
                    </div>
                    <div className={`table__cell `}>
                        <span className={`cell__title`}>Lorem ipsum dolor</span>
                        <span className={`cell__price`}>2000 zl</span>
                    </div>
                    <div className={`table__cell `}>
                        <span className={`cell__title`}>Lorem ipsum dolor</span>
                        <span className={`cell__price`}>2000 zl</span>
                    </div>
                    <div className={`table__cell `}>
                        <span className={`cell__title`}>Lorem ipsum dolor</span>
                        <span className={`cell__price`}>2000 zl</span>
                    </div>
                    <div className={`table__cell `}>
                        <span className={`cell__title`}>Lorem ipsum dolor</span>
                        <span className={`cell__price`}>2000 zl</span>
                    </div>
                    <div className={`table__cell `}>
                        <span className={`cell__title`}>Lorem ipsum dolor</span>
                        <span className={`cell__price`}>2000 zl</span>
                    </div>
                    <div className={`table__cell grid-cols-1 font-bold text-xl`}>
                        <button onClick={() => setRevealed(prev => !prev)}className={`transition-all duration-150 underline hover:text-green-500`}>Zamknij</button>
                    </div>
                </div>
            </section>
            <section id='nasi-specjaliscie' className={`our__specialists p-3 border-t-2`}>
                <h1 className={`h1`}>Nasi specjalisci</h1>
                <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 xl:grid-cols-6 place-items-center`}>
                    <Specialist />
                    <Specialist />
                    <Specialist />
                    <Specialist />
                    <Specialist />
                    <Specialist />
                    <Specialist />
                    <Specialist />
                    <Specialist />
                    <Specialist />
                </div>
            </section>
            <section id='faq' className={`faq border-b-1`}>
                <h1 className={`h1`}>Najczesciej zadawane pytania</h1>
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
            </section>
            <section id='kontakt' className={`contact grid grid-cols-1 lg:grid-cols-2 w-full place-items-center py-2 px-20 border-t-2 border-opacity-0`}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.700528883247!2d19.389570951461806!3d51.84816476195709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bb5ceaf7ee581%3A0x261e0f2373fb7736!2sCentrum%20Leczenia%20i%20Profilaktyki%20Oty%C5%82o%C5%9Bci%20%7C%20CLiPO!5e0!3m2!1spl!2ssk!4v1690658611597!5m2!1spl!2ssk" className={`w-full aspect-square rounded-xl lg:translate-x-10`} style={{border: "0px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className={`contact__container bg-slate-700 w-full p-2 rounded-xl -translate-y-10 grid grid-rows-4 lg:-translate-y-0 lg:-translate-x-10 lg:shadow-sm`}>
                    <h1 className={`text-green-500 text-4xl font-bold text-center self-center`}>Kontakt</h1>
                    <div className={`contact__el flex flex-col `}>
                        <div className={`contact__title text-white underline text-2xl font-bold`}>
                            Biuro:
                        </div>
                        <a href='tel:+48502239088' className={`contact__link`}>
                            <span className={`contact__icon`}>
                                <BiPhone />
                            </span>
                            +48 502 239 088
                        </a>
                        <a href='mailto:biuro@clipo.pl' className={`contact__link`}>
                            <span className={`contact__icon`}>
                                <BiMailSend />
                            </span>
                            biuro@clipo.pl
                        </a>
                    </div>
                    <div className={`contact__el flex flex-col `}>
                        <div className={`contact__title text-white underline text-2xl font-bold`}>
                            Recepcja:
                        </div>
                        <a href='tel:+48502238797' className={`contact__link`}>
                            <span className={`contact__icon`}>
                                <BiPhone />
                            </span>
                            +48 502 238 797
                        </a>
                        <a href='mailto:recepcja@clipo.pl' className={`contact__link`}>
                            <span className={`contact__icon`}>
                                <BiMailSend />
                            </span>
                            recepcja@clipo.pl
                        </a>
                    </div>
                    <div className={`contact__adress text-white text-xl self-end py-3 px-2 flex items-center gap-1 font-bold`}>
                        <span className={`text-2xl font-bold text-red-700`}>
                            <BiPin />
                        </span>
                        Al. Struga 39, 95-100 Zgierz
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home