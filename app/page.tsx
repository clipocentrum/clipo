"use client";

import '../styles/index.css'
import ServiceCard from '../components/service-card';
import { HiOutlineChevronRight, HiPhone, HiEnvelope, HiMapPin, HiOutlineArrowSmallUp } from 'react-icons/hi2'
import { useState } from 'react';
import Specialist from '../components/specialist';
import Question from '../components/question';
import { specialists } from '../public/specialists';

function Home() {
    const [isRevealed, setRevealed] = useState(false);

    const questions = [
        {
            question: 'Czy w Centrum Medycznym CLiPO pomoc otrzymają jedynie otyli Pacjenci?',
            answer: 'W naszym Centrum pomoc otrzymają wszyscy Pacjenci posiadający problemy endokrynologiczne oraz metaboliczne. Nie jest istotne czy są otyli.'
        },
        {
            question: 'Czy endokrynolodzy w CLiPO zajmują się problemami niskorosłości u dzieci?',
            answer: 'Tak. Nasi specjaliści w zakresie endokrynologii dziecięcej pomagają dzieciom z niskim wzrostem oraz każdym innym problemem z zakresu endokrynologii.'
        },
        {
            question: 'Jak można się umówić na wizytę do specjalisty?',
            answer: 'Aby dokonać rezerwacji terminu u wybranego specjalisty należy zadzwonić pod numer telefonu 502 239 088. Niezbędne będzie podanie imienia i nazwiska oraz numeru telefonu do kontaktu.'
        },
        {
            question: 'Jak wygląda pierwsza wizyta u dietetyka w CLiPO?',
            answer: 'Pierwsza konsultacja u dietetyka opiera się przede wszystkim na wywiadzie dotyczącym Państwa stanu zdrowia oraz nawyków żywieniowych. Na specjalistycznej wadze dokonywana jest analiza składu ciała, która jest następnie omawiana przez nasze specjalistki. W ramach wizyty otrzymują Państwo siedmiodniowy jadłospis. Są to podstawowe elementy wizyty u dietetyka. Pamiętać należy, że każdy z nas jest inny i ma inne problemy oraz oczekiwania, dlatego w CLiPO skupiamy się na mocno indywidualnym podejściu do Pacjentów.'
        },
        {
            question: ' Jak przygotować się do wizyty u dietetyka.',
            answer: 'W trakcie wizyty przeprowadzamy specjalistyczne badanie składu ciała. Aby badanie było jak najbardziej rzetelne, warto wykonać je na czczo lub, jeżeli wizyta wyznaczona jest w godzinach popołudniowych czy wieczornych, około 2 godzin po ostatnim posiłku. Przed wizytą warto spisać 3-dniowy dzienniczek dietetyczny oraz sporządzić listę produktów lubianych i nielubianych.'
        },
        {
            question: 'Czy przed wizytą u dietetyka należy zrobić jakieś badania?',
            answer: 'Nie, nie jest to konieczne. Jeżeli borykacie się Państwo z jakimiś problemami zdrowotnymi to wskazane jest zabranie wszelkiej dokumentacji medycznej w tym zakresie.'
        },
        {
            question: 'Czy w CLiPO można płacić kartą?',
            answer: 'W CLiPO można płacić kartą oraz gotówka. Jeżeli korzystacie Państwo z teleporad, e-recept lub diety online formą płatności może być również tradycyjny przelew.'
        },
    ]
    const services = [
        {
            service: 'Konsultacje specjalistyczne',
            price: 'od 180 zł',
            isDL: true
        },
        {
            service: 'Konsultacje dietetyczne',
            price: 'od 150 zł',
            isDL: false
        },
    ]
    const fullServices = [
        {
            service: 'prof. dr hab. n. med. Renata Stawerska: konsultacja',
            specialisation: 'Endokrynologia dla dzieci i młodzieży',
            price: '280 zł'
        },
        {
            service: 'dr n. med. Anna Łupińska: konsultacja',
            specialisation: 'Endokrynologia dla dzieci i młodzieży',
            price: '230 zł'
        },
        {
            service: 'dr n. med. Katarzyna Dąbrowska: konsultacja',
            specialisation: 'Endokrynologia dla dorosłych',
            price: '220 zł'
        },
        {
            service: 'dr n. med. Katarzyna Dąbrowska: konsultacja + USG',
            specialisation: 'Endokrynologia dla dorosłych',
            price: '300 zł'
        },
        {
            service: 'dr n. med. Małgorzata Szałapska: konsultacja',
            specialisation: 'Diabetologia, Pediatria',
            price: '250 zł'
        },
        {
            service: 'lek. med. Agnieszka Kucińska: konsultacja',
            specialisation: 'Interna, Diabetologia',
            price: '200 zł'
        },
        {
            service: 'dr n. med. Jadwiga Kaczmarek: konsultacja',
            specialisation: 'Alergologia',
            price: '200 zł'
        },
        {
            service: 'dietetyk kliniczny Katarzyna Łokieć: wizyta + dieta',
            specialisation: 'Dietetyka',
            price: '200 zł'
        },
        {
            service: 'mgr Magdalena Grobelna: wizyta + dieta',
            specialisation: 'Dietetyka',
            price: '150 zł'
        },
        {
            service: 'lek. med. Krystian Słodkowski: wizyta',
            specialisation: 'Urologia dla dorosłych',
            price: '180 zł'
        },
        {
            service: 'mgr. Agnieszka Kwiatkowska-Milbrandt: wizyta',
            specialisation: 'Terapia',
            price: '150 zł'
        },
        {
            service: 'Ewa Kołodziejczyk: konsujtacja',
            specialisation: 'Fizjoterapia Urogienekologiczna',
            price: '160 zł'
        },
        {
            service: 'mgr. Wojciech Stawerski: konsultacja, trening personalny',
            specialisation: 'Fizjoterapia',
            price: '90 zł'
        },
        {
            service: 'Biopsia',
            price: '300 zł'
        },
        {
            service: 'USG tarczyc',
            price: '170 zł'
        },
        {
            service: 'Analiza składu ciała z omówieniem',
            price: 'od 50 zł'
        },
        {
            service: 'Recepta',
            price: '80 zł'
        },
    ]

    return (
        <>
            <section className={`landing__page aspect-video bg-contain flex justify-center z-10`}>
                <div className={`flex flex-col justify-center text-center cursor-default`}>
                    <h1 className={`text-5xl md:text-8xl font-bold text-green-500 drop-shadow-sm`}>CLiPO</h1>
                    <div className={`flex justify-between text-white`}>
                        <a className={`bg-slate-900 px-5 md:py-2 md:px-10 font-bold text-base md:text-2xl rounded-full hover:opacity-95 transition-all duration-150`} href="/#o-nas">O Nas</a>
                        <a className={`md:py-2 ml-2 md:ml-0 font-bold text-base md:text-2xl underline decoration-solid hover:opacity-95 transition-all duration-150 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,1)]`} href="/#kontakt">Kontakt</a>
                    </div>
                </div>
            </section>
            <section id='o-nas' className={`about__us bg-green-500 w-full px-5 py-2 text-white`}>
                <h1 className={`font-bold text-4xl`}>
                    O Nas
                </h1>
                <span className={`wrapper flex flex-col lg:flex-row`}>
                    <p className={`text-xl py-2 flex-2`}>
                        Centrum Medyczne CLiPO, to miejsce w którym pomoc otrzymają wszyscy Pacjenci borykający się z problemami endokrynologicznymi, metabolicznymi bądź otyłością. Współpracujemy z najlepszymi specjalistami, którzy kompleksowo zajmują się zdrowiem zarówno dzieci, jak i dorosłych. Naszym celem jest poprawa stanu wiedzy społeczeństwa na temat prawidłowego żywienia i roli aktywności fizycznej. Wierzymy, że promując zdrowy styl życia przyczynimy się do zahamowania epidemii otyłości, szczególnie wśród dzieci i młodzieży. Aby zapewnić Państwu najwyższej jakości opiekę, nieustannie poszerzamy i aktualizujemy swoją wiedzę zgodnie z najnowszymi wytycznymi. Nasz główny diabetolog – dr Małgorzata Szałapska jest lekarzem certyfikowanym przez Polskie Towarzystwo Leczenia Otyłości, co gwarantuje Państwu dostęp do nowoczesnych metod terapeutycznych.
                    </p>
                    <img src="/photos/mszalapska-certificate.webp" alt="certyfikat kompleksowego leczenia choroby otylosciowej" className={`about-certificate flex-1`} />
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
                            services.map(({service, price}) => (
                                <ServiceCard service={service} price={price} key={service} />
                            ))
                        }
                    </div>
                    <button onClick={() => setRevealed(prev => !prev)} className={`text-white font-bold flex gap-2 justify-center items-center w-full text-2xl z-10 relative hover:text-green-500 transition-all duration-300 py-2`} > 
                        <span className={`${isRevealed && 'rotate-90'} transition-all duration-300 text-green-500`}>
                            <HiOutlineChevronRight />
                        </span>
                        Zobacz pelny cennik
                    </button>
                </div>
                <div className={`grid grid-cols-1 transition-all duration-300 origin-top scale-y-0 h-0 ${isRevealed && 'revealed'}`}>
                    {
                        fullServices.map(({service, specialisation = "", price}) => (
                            <div className={`table__cell `} key={service}>
                                <span className={`cell__title`}>{service}</span>
                                <span className={`cell__specialisation`}>{specialisation}</span>
                                <span className={`cell__price`}>{price}</span>
                            </div>
                        ))
                    }
                    <div className={`table__cell grid-cols-1 font-bold text-xl`}>
                        <button onClick={() => setRevealed(prev => !prev)}className={`transition-all duration-150 underline hover:text-green-500`}>Zamknij</button>
                    </div>
                </div>
            </section>
            <section id='faq' className={`faq border-b-1`}>
                <h1 className={`h1`}>Najczesciej zadawane pytania</h1>
                {
                    questions.map(({question, answer}) => (
                        <Question question={question} answer={answer} key={question} />
                    ))
                }
            </section>
            <section id='kontakt' className={`contact relative grid grid-cols-1 lg:grid-cols-2 w-full place-items-center py-2 px-10 lg:px-20 border-opacity-0`}>
                <div className={`radial`} />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.700528883247!2d19.389570951461806!3d51.84816476195709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bb5ceaf7ee581%3A0x261e0f2373fb7736!2sCentrum%20Leczenia%20i%20Profilaktyki%20Oty%C5%82o%C5%9Bci%20%7C%20CLiPO!5e0!3m2!1spl!2ssk!4v1690658611597!5m2!1spl!2ssk" className={`w-full aspect-square rounded-xl lg:translate-x-10 z-40`} style={{border: "0px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className={`contact__container bg-slate-700 w-full p-2 rounded-xl -translate-y-10 grid grid-rows-4 lg:-translate-y-0 lg:-translate-x-10 lg:shadow-sm z-40`}>
                    <h1 className={`text-green-500 text-4xl font-bold text-center self-center`}>Kontakt</h1>
                    <div className={`contact__el flex flex-col `}>
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
                    <div className={`contact__el flex flex-col `}>
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
                    <div className={`contact__adress text-white text-xl self-end py-3 px-2 flex items-center gap-1 font-bold`}>
                        <span className={`text-2xl font-bold text-red-700`}>
                            <HiMapPin />
                        </span>
                        Al. Struga 39, 95-100 Zgierz
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home
