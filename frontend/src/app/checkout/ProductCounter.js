'use client'
import { decreaseItemCount, increaseItemCount } from '@/redux/slices/cart/cartSlice'
import React, { useState } from 'react'
import {HiPlus, HiMinus} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
export default function ProductCounter({product}) {
    const cart = useSelector(state => state.cart)
    const cartProduct = cart[cart.findIndex(p => p.id == product.id)]
    if(!cartProduct){
        return
    }
    const dispatch = useDispatch()
    
    
    
    function lessNum() {
        if(cartProduct.itemCount <= 1){
            return
        }
        dispatch(decreaseItemCount(product))
    }
    function addNum() {
        if(cartProduct.itemCount >= product.stock){
            toast.info('Maximum Stock Reached')
            return
        }
        dispatch(increaseItemCount(product))
    }
  return (
    <div className='flex justify-between items-center '>
        <HiMinus onClick={lessNum} className="cursor-pointer transition-all ease-in-out duration-500 text-gray-950 active:scale-75 hover:text-indigo-500" />
        <span className='text-base font-bold w-8 text-center select-none'>{cartProduct.itemCount}</span>
        <HiPlus onClick={addNum} className="cursor-pointer transition-all ease-in-out duration-500 text-gray-950 active:scale-75 hover:text-indigo-500" />
    </div>
  )
}
