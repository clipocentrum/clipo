"use client"

import React, { useState } from 'react'
import { HiOutlineChevronRight } from 'react-icons/hi2'

type Props = {
    question: string,
    answer: string,
    key: any
}

const Question = ({question, answer, key}: Props) => {
    const [isRevealed, setRevealed] = useState(false);

    return (
        <div key={key} className={`mx-4 my-2 p-2 bg-slate-700 rounded-xl text-white md:mx-40 lg:mx-56 h-auto origin-top transition-all duration-300 relative`}>
            <button className={`flex w-full gap-1 items-center text-white font-bold text-sm md:text-md lg:text-xl px-2 py-1 bg-green-500 rounded-xl`} onClick={() => setRevealed(prev => !prev)}>
                <span className={`transition-all duration-300 ${isRevealed && 'rotate-90'}`}>
                    <HiOutlineChevronRight />
                </span>
                {question}
            </button>
            <p className={`p-1 pb-0 transition-all duration-300 origin-top scale-y-0 h-0 ${isRevealed && 'revealed'}`}>
                {answer}
            </p>
        </div>
    )
}

export default Question