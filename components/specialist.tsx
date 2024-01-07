import React from 'react'
import '../styles/index.css'
import { Specialist } from '../interfaces'

const Specialist = ({specialist}: {specialist: Specialist}) => {


  
  return (
    <div className={`specialist rounded-xl w-44 md:w-48 flex flex-col justify-center items-center `}>
        <div className={`specialist__photo w-40 h-40 rounded-full translate-y-10`} style={{
          backgroundImage: `url(/photos/${specialist.photoPath})`
        }} />
        <div className={`specialist__container flex flex-col text-white text-center bg-slate-700 w-full rounded-xl pt-10 pb-3`}>
          <span className={`font-bold px-1 flex flex-col w-full`} title={specialist.fullName}>
            <span className={`font-thin opacity-80 whitespace-pre-wrap`}>
              {specialist.title || ' '}
            </span> 
            <span className={`whitespace-nowrap overflow-hidden text-ellipsis`}>
              {specialist.fullName}
            </span>
          </span>
          <span className={`italic text-xs opacity-80 whitespace-nowrap overflow-hidden text-ellipsis px-1`}>{specialist.specialisation}</span>
          <a href={`/specjalisci/${specialist.slug}`} className={`text-teal-600 underline transition-opacity hover:opacity-90`}>Więcej</a>
        </div>
    </div>
  )
}

export default Specialist
