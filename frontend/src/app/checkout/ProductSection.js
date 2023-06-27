'use client'
import React, { useEffect, useState } from "react";
import ProductCounter from "./ProductCounter";
import ProductLoader from "./ProductLoader";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { removeCartProduct } from "@/redux/slices/cart/cartSlice";

export default function ProductSection({ cartProducts }) {
  let cart = useSelector(state => state.cart)
  let dispatch = useDispatch()
  const [state, setState] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setState(true)
    }, 2000);
  }, [cart ])

  return (
    <>
      <div className="flex flex-col space-y-6 lg:w-4/12">
        <h2 className="mb-5 md:mb-4 text-2xl font-semibold">Products</h2>
        {

          cartProducts.length == 0 && cart.length != 0 ?
            <>
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
              <ProductLoader />
            </>
            : cart.length == 0 ?
              <h1>Your Cart Is Empty</h1> :
              <>
                {
                  cartProducts.map(product => (

                    <div className="flex justify-start w-full product">
                      <div className="h-24 mr-3 w-36 ">
                        <img
                          className="object-cover h-full w-full rounded-md "
                          src={product.images[0].image}

                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-between pb-1">
                        <Link href={`/product/${product?.slug}/`} className="mb-2 font-bold text-1xl hover:underline">{product?.name}</Link>
                        <div className="space-y-1">
                          <p className="text-xs ">
                            <span className="font-semibold ">Color: </span>{product?.color?.color}
                          </p>
                          <p className="text-xs ">
                            <span className="font-semibold ">Size: </span>{product?.size?.size}
                          </p>
                          <p className="text-xs ">
                            <span className="font-semibold ">Price: </span>৳ {product.price * product.itemCount}
                          </p>
                        </div>
                      </div>
                      <div className="ml-auto flex flex-col justify-between">
                        <button
                        onClick={e=> dispatch(removeCartProduct(product))}
                          type="button"
                          class="font-semibold   text-sm lg:text-sx text-indigo-600 hover:text-indigo-500 ">
                          Remove
                        </button>
                        <ProductCounter product={product} />
                        {/* <div className="text-end"></div> */}
                      </div>
                    </div>

                  ))
                }

              </>
        }

      </div>
    </>
  );
}
