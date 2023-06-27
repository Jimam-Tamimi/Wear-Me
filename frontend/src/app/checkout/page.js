'use client'
import React, { useEffect, useState } from "react";
import FormSection from './FormSection'
import ProductSection from "./ProductSection";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "@/helpers";
import { updateLoader } from "@/redux/slices/loading/loadingSlice";
export default function Checkout() {
  let cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const [cartProducts, setCartProducts] = useState([]) 

  async function getProducts(cart) {
    let tmpProducts = []
    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
      const res = await getProductDetails(product.slug)
      if (res.status === 200) {

        tmpProducts.push({ ...res.data, size: product.size, color: product.color, itemCount: product.itemCount })
      }
    }
    setCartProducts(prevState => [...tmpProducts])
  }

  useEffect(() => {
    dispatch(updateLoader(30))
    getProducts(cart)
    dispatch(updateLoader(100))
    return () => {
    }
  }, [cart.length])
  useEffect(() => {
    let tmpProducts = []
    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];

      const cartProductIndex = cartProducts.findIndex(p => p.id == product.id)
      if (cartProducts.findIndex(p => p.id === product.id) !== -1) {
        tmpProducts.push({ ...cartProducts[cartProductIndex], ...product })
      }
    }
    setCartProducts(tmpProducts)
    return () => {
    }
  }, [cart])
  return (
    <>
      <div className="flex flex-col justify-center max-w-2xl p-5 m-auto lg-my-5  lg:flex-row lg:max-w-7xl lg:px-8 lg:justify-between">
        <ProductSection cartProducts={cartProducts} />
        <div className=" mb-12   w-full  r-section lg:w-7/12 ">
          <FormSection  cartProducts={cartProducts} />
        </div>
      </div>
    </>
  );
}
