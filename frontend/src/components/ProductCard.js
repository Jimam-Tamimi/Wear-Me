'use client'

import { addProduct } from '@/redux/slices/cart/cartSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductCard({product}) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    
    const [cartProduct, setCartProduct] = useState({})
    function updateCartProduct(context) {
        setCartProduct(prevState => ({
            ...prevState,
            id: product.id,
            ...context,
            itemCount:1,
            
        }))
    }

    function buyNow(){

    }

    function addToCart(){
        console.log("first")
        dispatch(addProduct(cartProduct))
    }
    return (
        <>
        <button onClick={e => console.log({cartProduct,cart})}>click</button>
            <div key={product.id} className="group w-full sm:w-[48%] lg:w-1/4 md:w-1/2 p-4 ">
                <a className="block relative  rounded overflow-hidden">
                    <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={product.images[0].image}
                    />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {product.category.name}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium mb-1">
                        {product.name}
                    </h2>
                    <div className=" select-none flex flex-wrap max-w-full mb-3">
                        {
                            product.colors.map((color, i) => (
                                <>
                                    <div onClick={e => updateCartProduct({color})} style={{ backgroundColor: color?.color_code }} key={color?.id} className={`rounded-full w-4 h-4 mr-2  scale-110 cursor-pointer hover:scale-125 duration-300 transition-all ease-in-out active:scale-90 ${cartProduct?.color===color? 'scale-125 bg-gray-300':''}`}></div>
                                </>
                            ))
                        }
                    </div>
                    <div className=" flex flex-wrap max-w-full mb-2">
                        {
                            product.sizes.map((size, i) => (
                                <span key={size?.id} onClick={e => updateCartProduct({size})} className={`select-none bg-gray-200 text-black text-sm font-semibold px-2 py-[2.5px] rounded-md mr-2 cursor-pointer hover:scale-110 duration-300 transition-all ease-in-out hover:bg-gray-300 active:scale-90 ${cartProduct?.size===size? 'scale-110 bg-gray-300':''} `}>{size?.size}</span>
                            ))
                        }
                    </div>
                    <p className="mt-1 ">৳ {product.price}</p>
                    <div className='flex  mt-2'>
                        <button onClick={buyNow} className='text-sm bg-red-500 text-white mr-4 font-bold py-2  px-4 rounded hover:scale-105 ease-in-out duration-300 transition-all hover:bg-red-600 active:scale-75'>Buy Now</button>
                        <button onClick={addToCart} className='text-sm bg-indigo-600 text-white font-bold py-2  px-4 rounded hover:scale-105 ease-in-out duration-300 transition-all hover:bg-indigo-700  active:scale-75'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}