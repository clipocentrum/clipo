"use client";

import React, { useState } from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { HiBars2, HiXMark } from "react-icons/hi2"
import '../styles/index.css'

const Header = (props: {isVisible: boolean}) => {
  const [isOpened, setOpened] = useState(false);

  return (
    <header className={`fixed top-0 left-0 header flex flex-auto justify-between w-screen  z-50 ${!props.isVisible && 'bg-green-600 drop-shadow-sm'} transition-all duration-150`}>
        <div className={`header_links flex py-1 px-2`}>
          <a href="#" className={`header_link ${!props.isVisible && 'text-2xl hover:opacity-90 hover:text-white border-transparent hover:border-transparent'}`}>
            <BsFacebook />
          </a>
          <a href="#" className={`header_link ${!props.isVisible && 'text-2xl hover:opacity-90 hover:text-white border-transparent hover:border-transparent'}`}>
            <BsInstagram />
          </a>
          <a href="#" className={`header_link ${!props.isVisible && 'text-2xl hover:opacity-90 hover:text-white border-transparent hover:border-transparent'}`}>
            <BsTwitter />
          </a>
        </div>

        <button onClick={() => setOpened(prev => !prev)} className={`header_burger-btn font-light text-white text-4xl text-center flex justify-center align-center px-4 py-2 z-50`}>{isOpened ? <HiXMark /> : <HiBars2 />}</button>

        <div className={`fixed flex m-0 delay-75 ${!isOpened && 'translate-x-full'} z-40 w-screen`}>
          <div className={`w-1/2 md:w-2/3 ${!isOpened && 'scale-0'} transition-all duration-75 ${isOpened && 'bg-gray-600 scale-1'} opacity-50 blur-md`} onClick={() => setOpened(false)} />
          <ul className={`nav ${isOpened ? 'translate-x-0' : 'translate-x-full'} text-white transition-all h-screen w-1/2 md:w-1/3 px-5 py-10 bg-slate-700 rounded-l-2xl shadow-lg`}>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="#" className={`nav_link`}>link1</a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="#" className={`nav_link`}>link1</a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="#" className={`nav_link`}>link1</a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="#" className={`nav_link`}>link1</a>
            </li>
            <li className={`nav_el`}>
              <a onClick={() => setOpened(false)} href="#" className={`nav_link`}>link1</a>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header