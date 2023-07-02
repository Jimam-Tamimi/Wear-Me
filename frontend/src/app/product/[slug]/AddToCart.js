'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { addToCart, buyNow, isProductInsideCart, removeFromCart, updateCartProduct } from '../helpers'

export default function AddToCart({ product }) {

    const router =  useRouter()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const [cartProduct, setCartProduct] = useState({
        id: product.id,
        slug: product.slug,

    }) 
    useEffect(() => {
        let cartProductIndex = cart.findIndex(p => p.id == cartProduct?.id)
        if (cartProductIndex !== -1) {

            updateCartProduct(cart[cartProductIndex], product, setCartProduct)
        } else { setCartProduct({}) }
        return () => {

        }
    }, [cart])

  

    return (
        <div >
            <div className=" select-none flex flex-wrap max-w-full my-6">
                {
                    product.colors.map((color, i) => (
                        <div key={i} onClick={e => updateCartProduct({ color }, product, setCartProduct)} style={{ backgroundColor: color?.color_code }} className={`rounded-full w-7 h-7 mr-4     cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out 
                                         ${cartProduct?.color?.id == color.id ? 'scale-125' : ''} active:scale-90`}></div>
                    )
                    )
                }
            </div>
            <div className=" flex flex-wrap max-w-full my-6 ">
                {
                    product.sizes.map((size, i) => (
                        
                        <span key={size?.id} onClick={e => updateCartProduct({ size }, product, setCartProduct)} className={`mb-4 select-none bg-gray-200 text-black text-lg font-semibold px-6 py-3 rounded-md mr-3 cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out hover:bg-gray-300  active:scale-90 ${cartProduct?.size?.id === size?.id ? 'scale-110 bg-gray-400' : ''} `}>{size?.size}</span>
                    ))
                } 
            </div>
            <div className='flex flex-col mt-2 space-y-6'>
                <button onClick={e => buyNow(cartProduct, dispatch, router)} className='text-base lg:text-base bg-red-500 text-white font-semibold py-3  px-4 rounded  ease-in-out duration-300 transition-all hover:bg-red-600 active:scale-95'>Buy Now</button>


                {
                    isProductInsideCart(cart, cartProduct) ?
                        <button  onClick={e => removeFromCart(cartProduct, dispatch)}  className='text-base lg:text-base bg-indigo-600 text-white font-semibold py-3  px-4 rounded  ease-in-out duration-300 transition-all hover:bg-indigo-700  active:scale-95'>Remove From Cart</button> :
                        <button onClick={e => addToCart(cartProduct, dispatch)} className='text-base lg:text-base bg-indigo-600 text-white font-semibold py-3    px-4 rounded  ease-in-out duration-300 transition-all hover:bg-indigo-700  active:scale-95'>Add To Cart</button>
                }
            </div>
        </div>
    )
}
