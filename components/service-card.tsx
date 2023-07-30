import React from 'react'
import '../styles/index.css'

const ServiceCard = () => {
  return (
    <div className={`service__card w-56 bg-slate-900 m-2`}>
        <div className={`service__image w-full h-72 rounded-xl`} />
        <div className={`bg-green-500 w-full text-white rounded-xl -translate-y-6 py-6 px-3 flex flex-col justify-center`}>
            <p className={`text-center font-semibold`}>Lorem ipsum dolor sit</p>
            <a href='#' className={`text-center font-bold text-xl underline`}>od 200 zl</a>
        </div>
    </div>
  )
}

export default ServiceCard