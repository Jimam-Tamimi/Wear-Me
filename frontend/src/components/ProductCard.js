'use client'

import { addToCart, buyNow, isProductInsideCart, removeFromCart, updateCartProduct } from '@/app/product/helpers'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductCard({ product }) {
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

 
    // console.log(cartProduct)
    // console.log(cart)
    return (
        <>
            {/* <button onClick={e => console.log({cartProduct,cart})}>click</button> */}
            <div key={product.id} className="group w-full sm:w-[48%] lg:w-1/4 md:w-1/2 p-4 ">
                <Link href={`/product/${product.slug}/`} className="block relative  rounded overflow-hidden">
                    <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={product.images[0].image}
                    />
                </Link>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {product.category.name}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                        {product.name}
                    </h2>
                    <div className=" select-none flex flex-wrap max-w-full mb-3">
                        {
                            product.colors.map((color, i) =>  (
                                        <div key={i} onClick={e => updateCartProduct({ color }, product, setCartProduct)} style={{ backgroundColor: color?.color_code }}  className={`rounded-full w-4 h-4 mr-2  scale-110   cursor-pointer hover:scale-125 duration-300 transition-all ease-in-out 
                                         ${cartProduct?.color?.id == color.id ?  'scale-150': ''} active:scale-90`}></div>
                                )
                            )
                        }
                    </div>
                    <div className=" flex flex-wrap max-w-full mb-2">
                        {
                            product.sizes.map((size, i) => (
                                <span key={size?.id} onClick={e => updateCartProduct({ size }, product, setCartProduct)} className={`select-none bg-gray-200 text-black text-sm font-semibold px-2 py-[2.5px] rounded-md mr-3 cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out hover:bg-gray-300  active:scale-90 ${cartProduct?.size?.id === size?.id ? 'scale-125 bg-gray-400' : ''} `}>{size?.size}</span>
                            ))
                        }
                    </div>
                    <p className="mt-1 ">৳ {product.price}</p>
                    <div className='flex  mt-2'>
                        <button onClick={e => buyNow(cartProduct, dispatch, router)} className='text-sm bg-red-500 text-white mr-4 font-bold py-2  px-4 rounded hover:scale-105 ease-in-out duration-300 transition-all hover:bg-red-600 active:scale-75'>Buy Now</button>

 
                        {
                            isProductInsideCart(cart, cartProduct) ?
                            <button onClick={e => removeFromCart(cartProduct, dispatch)} className='text-sm bg-indigo-600 text-white font-bold py-2  px-4 rounded hover:scale-105 ease-in-out duration-300 transition-all hover:bg-indigo-700  active:scale-75'>Remove From Cart</button>   :
                            <button onClick={e => addToCart(cartProduct, dispatch)} className='text-sm bg-indigo-600 text-white font-bold py-2  px-4 rounded hover:scale-105 ease-in-out duration-300 transition-all hover:bg-indigo-700  active:scale-75'>Add To Cart</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}