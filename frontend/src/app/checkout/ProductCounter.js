'use client'
import React, { useState } from 'react'
import {HiPlus, HiMinus} from 'react-icons/hi'
export default function ProductCounter() {
    const [num, setNum] = useState(1)
    function lessNum() {
        if(num <= 1){
            return
        }
        setNum(n => n-1)
    }
    function addNum() {
        if(num >= 100){
            return
        }
        setNum(n => n+1)
    }
  return (
    <div className='flex justify-between items-center '>
        <HiMinus onClick={lessNum} className="cursor-pointer transition-all ease-in-out duration-500 text-gray-950 active:scale-75 hover:text-indigo-500" />
        <span className='text-base font-bold w-8 text-center select-none'>{num}</span>
        <HiPlus onClick={addNum} className="cursor-pointer transition-all ease-in-out duration-500 text-gray-950 active:scale-75 hover:text-indigo-500" />
    </div>
  )
}
