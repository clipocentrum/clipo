"use client"

import Footer from '../../components/footer'
import Header from '../../components/header'
import '../../styles/index.css'
import { useEffect, useRef, useState } from 'react'
import { HiOutlineArrowSmallUp } from "react-icons/hi2"

export default function RootLayout({ children }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setVisible(entry.isIntersecting);
    })
    observer.observe(ref.current)
  }, [])

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  
  return (
      <html lang="pl">
        <body className='bg-slate-900'>
          <div ref={ref} />
          <Header isVisible={isVisible} />
          {children}
          <button onClick={scrollTop} className={`${isVisible && 'scale-0'} fixed bg-green-600 w-12 aspect-square lg:w-20 lg:h-20 right-0 bottom-0 text-4xl flex justify-center items-center m-2 text-white rounded-full opacity-60 hover:opacity-95 transition-all duration-150 outline outline-white border border-transparent z-50`}>
            <HiOutlineArrowSmallUp />
          </button>
          <Footer />
        </body>
      </html>
    )
  }