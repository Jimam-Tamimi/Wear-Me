'use client'
import { Rating } from '@smastrom/react-rating'
import React from 'react'
import '@smastrom/react-rating/style.css'

export default function RateChild({rating, className}) {
  return (
    <>
                                    <Rating
                                style={{ maxWidth: 110 }}
                                value={rating}
                                className={className}
                                readOnly
                            />  
    </>
  )
}
