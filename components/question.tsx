"use client"

import React, { useState } from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi2'

interface Props {
    question: string,
    answer: string,
    key: any
}

const Question = ({question, answer, key}: Props) => {
    const [isRevealed, setRevealed] = useState(false);

    return (
        <div key={key} className={`mx-2 my-2 p-2 bg-slate-700 rounded-xl text-white md:mx-10 lg:mx-28 xl:mx-56 origin-top max-h-max transition-all duration-300 relative`}>
            <button className={`flex w-full gap-1 items-center text-left text-white font-bold text-sm md:text-lg lg:text-xl px-2 py-1 bg-teal-600 rounded-xl min-h-[3rem]`} onClick={() => setRevealed(prev => !prev)}>
                <span className={`transition-all duration-300 ${isRevealed && 'rotate-90'}`}>
                    <HiOutlineChevronRight />
                </span>
                {question}
            </button>
            <p className={`p-1 pb-0 transition-all duration-300 origin-top scale-y-0 text-justify h-0 ${isRevealed && 'revealed'}`}>
                {answer}
            </p>
        </div>
    )
}

export default Question