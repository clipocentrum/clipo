"use client";

import React, { useState } from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import '../styles/index.css'

const Header = (props: {isVisible: boolean}) => {
  const [isOpened, setOpened] = useState(false);

  return (
    <header className={`fixed top-0 left-0 header flex flex-auto justify-between w-screen px-2 py-1 z-50 ${!props.isVisible && 'bg-green-600 drop-shadow-sm'} transition-all duration-150`}>
        <div className={`header_links flex`}>
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

        <button onClick={() => setOpened(prev => !prev)} className={`header_burger-btn text-white text-4xl text-center flex justify-center align-center px-2 py-2 z-50`}>{isOpened ? <HiX /> : <HiMenuAlt4 />}</button>

        <ul className={`nav text-white fixed right-0 top-0 ${isOpened ? 'translate-x-0' : 'translate-x-full'} transition-all duration-150 z-40 h-screen w-1/2 md:w-1/3 px-5 py-10 bg-slate-700 rounded-l-2xl shadow-lg`}>
          <li className={`nav_el`}>
            <a href="#" className={`nav_link`}>link1</a>
          </li>
          <li className={`nav_el`}>
            <a href="#" className={`nav_link`}>link1</a>
          </li>
          <li className={`nav_el`}>
            <a href="#" className={`nav_link`}>link1</a>
          </li>
          <li className={`nav_el`}>
            <a href="#" className={`nav_link`}>link1</a>
          </li>
          <li className={`nav_el`}>
            <a href="#" className={`nav_link`}>link1</a>
          </li>
        </ul>
    </header>
  )
}

export default Header