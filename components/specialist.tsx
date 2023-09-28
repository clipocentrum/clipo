import React from 'react'
import '../styles/index.css'

type Props = {
  name: string,
  specialisation: string,
  key: string,
  slug: string
}

const Specialist = ({name, specialisation, key, slug}: Props) => {
  return (
    <div className={`specialist rounded-xl w-44 md:w-48 flex flex-col justify-center items-center `}>
        <div className={`specialist__photo w-40 h-40 rounded-full translate-y-10`} />
        <div className={`specialist__container flex flex-col text-white text-center bg-slate-700 w-full rounded-xl pt-10 pb-3`}>
            <span className={`font-bold`}>{ name }</span>
            <span className={`italic opacity-80`}>{ specialisation }</span>
            <a href={`specjalisci/${slug}`} className={`text-green-500 underline transition-opacity hover:opacity-90`}>Wiecej</a>
        </div>
    </div>
  )
}

export default Specialist
