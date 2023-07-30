import React from 'react'
import '../styles/index.css'

const Specialist = () => {
  return (
    <div className={`specialist rounded-xl w-48 flex flex-col justify-center items-center `}>
        <div className={`specialist__photo w-40 h-40 rounded-full translate-y-10`} />
        <div className={`specialist__container flex flex-col text-white text-center bg-slate-700 w-full rounded-xl pt-10 pb-3`}>
            <span className={`font-bold`}>Joanna Kowalska</span>
            <span className={`italic opacity-80`}>Diabetolog</span>
            <a href='#' className={`text-green-500 underline transition-opacity hover:opacity-90`}>Wiecej</a>
        </div>
    </div>
  )
}

export default Specialist