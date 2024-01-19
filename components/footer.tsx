"use client";

import React from 'react'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={`grid z-48 grid-cols-1 place-items-start gap-2 p-2 bg-teal-600 lg:grid-cols-2`}>
        <h2 className={`text-white font-bold text-xl`}>
            CLiPO | Centrum Leczenia i Profilaktyki Otyłosci
        </h2>
        <div className={`header_links flex w-full lg:justify-end`}>
            <a target='_blank' href="https://www.facebook.com/CLiPOpl" className={`header_link text-2xl hover:opacity-90 hover:text-white`}>
                <BsFacebook />
            </a>
        </div>
        <div className={`py-2`}>
            <span className={`company__data`}>
                <h3 className={`company__data__heading`}>Numer Konta Bank Pekao:</h3>
                84 1240 1545 1111 0010 6673 9725
            </span>
            <span className={`company__data`}>
                <h3 className={`company__data__heading`}>NIP:</h3>
                732 217 70 73
            </span>
            <span className={`company__data`}>
                <h3 className={`company__data__heading`}>REGON:</h3>
                36304688300015
            </span>
            <span className={`company__data`}>
                <h3 className={`company__data__heading`}>KRS:</h3>
                0000587733
            </span>
            <span className={`company__data`}>
                <h3 className={`company__data__heading`}>BDO:</h3>
                000069113
            </span>
        </div>
        <div className={`py-2 lg:pl-2 flex flex-col lg:border-l lg:border-opacity-80`}>
            <a target='_blank' href="/pdf/certyfikat-kompleksowego-leczenia-choroby-otylosciowej.pdf" className={`footer__link`}>
                Certyfikat kompleksowego leczenia choroby otyłościowej
            </a>
            <a target='_blank' href="/pdf/polityka-ochrony-danych-osobowych.pdf" className={`footer__link`}>
                Polityka ochrony danych osobowych
            </a>
            <a target='_blank' href="/pdf/klauzula-informacyjna-dla-klientow-innych-niz-uslug-medycznych-i-kontrahentow-clipo.pdf" className={`footer__link`}>
                Klauzula informacyjna dla klientów innych niż usług medycznych i kontrahentów CLIPO
            </a>
            <a target='_blank' href="/pdf/klauzula-informacyjna-dla-klientow-clipo-z-zakresu-uslug-medycznych.pdf" className={`footer__link`}>
                Klauzula informacyjna dla klientów CLIPO z zakresu usług medycznych
            </a>
            <a target='_blank' href="/pdf/subwencja-PFR.jpg" className={`footer__link`}>
                Subwencja z PFR
            </a>
        </div>
    </footer >
  )
}

export default Footer