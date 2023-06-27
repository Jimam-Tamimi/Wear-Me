'use client'

import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as crypto from "crypto-js";
import { useRouter } from 'next/navigation'
export default function page({ params }) {
    const router = useRouter()
    
    
  const [countDown, setCountDown] = useState(5)

  useEffect(() => {
    setInterval(() => {
        if(countDown!=0){
            setCountDown(prevState => prevState-=1)
        }
    }, 1000);
  }, [])
  
  useEffect(() => {
    if(countDown == 0){
        router.push('/')
    }
  }, [countDown])

  

  return (
    <div className='flex justify-center items-center my-5 min-h-[70vh] '>
      <div className='m-auto    shadow-[0px_0px_12px_1px_#e69f9f0f] bg-[#e69f9f0f] rounded-lg flex flex-col justify-center items-center max-w-2xl w-full h-60' >
        <h3 className='text-2xl font-bold text-red-500 mb-1'>Order Failed</h3>
        <p className='text-base font-semibold '>Redirecting in {countDown} seconds</p>

         
      </div>
    </div>
  )
}
