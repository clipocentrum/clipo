"use client"

import React, { useState } from 'react'
import { BiRightArrow } from 'react-icons/bi'

const Question = () => {
    const [isRevealed, setRevealed] = useState(false);

    return (
        <div className={`mx-4 my-2 p-2 bg-slate-700 rounded-xl text-white md:mx-40 lg:mx-56`}>
            <button className={`flex w-full gap-1 items-center text-white font-bold text-xl px-2 py-1 bg-green-500 rounded-xl`} onClick={() => setRevealed(prev => !prev)}>
                <span className={`transition-all duration-150 ${isRevealed && 'rotate-90'}`}>
                    <BiRightArrow />
                </span>
                Lorem ipsum dolor sit?
            </button>
            <p className={`p-1 pb-0 transition-all duration-150 origin-top scale-y-0 h-0 ${isRevealed && 'revealed'}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque sint, voluptas harum magni rerum nemo repellendus molestiae accusamus doloribus? Nobis itaque quae facilis exercitationem neque doloremque atque.
            </p>
        </div>
    )
}

export default Question