"use client";

import React, { useState } from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { HiBars2, HiXMark, HiOutlineHome, HiOutlineIdentification, HiOutlineUserGroup, HiOutlineSwatch, HiOutlineQuestionMarkCircle, HiOutlinePaperAirplane } from "react-icons/hi2"
import '../styles/index.css'

const Header = (props: {isVisible: boolean}) => {
  const [isOpened, setOpened] = useState(false);

  return (
    <header className={`fixed top-0 left-0 header flex flex-auto justify-between w-screen  z-50 ${!props.isVisible && 'bg-green-600 drop-shadow-sm'} transition-all duration-150`}>
        <div className={`header_links flex py-1 px-2`}>
          <a className={`header_link hover:text-transparent cursor-pointer ${!props.isVisible && 'text-2xl hover:opacity-90 hover:text-transparent border-green-500 hover:border-green-500 '} logo text-transparent`} onClick={() => window.scrollTo(0, 0)} href='/#' >
            <BsInstagram />
          </a>
          <a target='_blank' href="https://www.facebook.com/CLiPOpl" className={`header_link ${!props.isVisible && 'text-5xl hover:opacity-90 p-0 hover:text-white border-transparent hover:border-transparent'}`}>
            <BsFacebook />
          </a>
        </div>

        <button onClick={() => setOpened(prev => !prev)} className={`header_burger-btn font-light text-white text-4xl text-center flex justify-center align-center px-4 py-2 z-50 my-auto`}>{isOpened ? <HiXMark /> : <HiBars2 />}</button>

        <div className={`fixed flex m-0 delay-75 ${!isOpened && 'translate-x-full'} z-40 w-screen`}>
          <div className={`w-1/2 md:w-2/3 ${!isOpened && 'scale-0'} transition-all duration-75 ${isOpened && 'bg-gray-600 scale-1'} opacity-50 blur-md`} onClick={() => setOpened(false)} />
          <ul className={`nav ${isOpened ? 'translate-x-0' : 'translate-x-full'} text-white transition-all h-screen w-1/2 md:w-1/3 px-5 py-10 bg-slate-700 rounded-l-2xl shadow-lg`}>
            <li className={`nav_el`}>
              <a onClick={() => {
                  setOpened(false)
                }} href="/#" className={`nav_link cursor-pointer`} >
                <span className={`nav_icon`}>
                  <HiOutlineHome />
                </span>
                Strona glowna
              </a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="/#o-nas" className={`nav_link`}>
                <span className={`nav_icon`}>
                  <HiOutlineIdentification />
                </span>
                O nas
              </a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="/#uslugi" className={`nav_link`}>
                <span className={`nav_icon`}>
                  <HiOutlineSwatch />
                </span>
                Uslugi
              </a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="/#nasi-specjalisci" className={`nav_link`}>
                <span className={`nav_icon`}>
                  <HiOutlineUserGroup />
                </span>
                Nasi specjalisci
              </a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="/#faq" className={`nav_link`}>
                <span className={`nav_icon`}>
                  <HiOutlineQuestionMarkCircle />
                </span>
                Najczesciej zadawane pytania
              </a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="/#kontakt" className={`nav_link`}>
                <span className={`nav_icon`}>
                  <HiOutlinePaperAirplane />
                </span>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header