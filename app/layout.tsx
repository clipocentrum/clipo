"use client"

import { HiOutlineArrowSmallUp } from 'react-icons/hi2'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Footer, Header } from '../components/index'
import '../styles/index.css'
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setVisible(entry.isIntersecting);
    })
    observer.observe(ref.current);
  }, [])

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
      <html lang="pl">
        <body className='bg-slate-900'>
          <SpeedInsights />
          <div ref={ref} />
          <Header isVisible={isVisible} />
          {children}
          <button onClick={scrollTop} className={`${isVisible && 'scale-0'} fixed bg-teal-700 w-12 aspect-square right-0 bottom-0 text-4xl flex justify-center items-center m-2 text-white rounded-full opacity-60 hover:opacity-95 transition-all duration-150 outline outline-1 outline-white border border-transparent z-50`}>
            <HiOutlineArrowSmallUp />
          </button>
          <Footer />
        </body>
      </html>
    )
  }