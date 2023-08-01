import React from 'react'
import '../styles/index.css'

type Props = {
  service: string,
  price: string
}

const ServiceCard = ({service, price}: Props) => {
  return (
    <div className={`service__card w-56 m-2 z-10`}>
        <div className={`service__image w-full h-72 rounded-xl`} />
        <div className={`bg-green-500 w-full text-white rounded-xl -translate-y-6 px-1 grid grid-rows-2 py-1`}>
            <p className={`text-center font-semibold self-center place-self-center min-h-[3rem]`}>{service}</p>
            <a href='#kontakt' className={`text-center font-bold text-xl underline place-self-center`}>{price}</a>
        </div>
    </div>
  )
}

export default ServiceCard