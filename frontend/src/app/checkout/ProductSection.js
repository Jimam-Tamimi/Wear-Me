'use client'
import React, { useEffect, useState } from "react";
import ProductCounter from "./ProductCounter";
import ProductLoader from "./ProductLoader";

export default function ProductSection() {
    const [state, setState] = useState(false)
    useEffect(() => {
        
      setTimeout(() => {
        setState(true)
      }, 2000);
    }, [])
    
  return (
    <>
      <div className="flex flex-col space-y-6 lg:w-4/12">
        <h2 className="mb-5 md:mb-4 text-2xl font-semibold">Products</h2>
        {
            
            state? 
            <>

            <div className="flex justify-start w-full product">
              <div className="h-24 mr-3 w-36 ">
                <img
                  className="object-cover h-full w-full rounded-md "
                  src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between pb-1">
                <h3 className="mb-3 font-bold text-1xl">Basic Tee 6-Pack</h3>
                <div className="space-y-1">
                  <p className="text-xs ">
                    <span className="font-semibold ">Color:</span> Red
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold ">Size:</span> S
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold ">Price:</span> 29$
                  </p>
                </div>
              </div>
              <div className="ml-auto flex flex-col justify-between">
                <button
                  type="button"
                  class="font-semibold   text-sm lg:text-sx text-indigo-600 hover:text-indigo-500 ">
                  Remove
                </button>
                <ProductCounter />
                {/* <div className="text-end"></div> */}
              </div>
            </div>
            <div className="flex justify-start w-full product">
              <div className="h-24 mr-3 w-36 ">
                <img
                  className="object-cover h-full w-full rounded-md "
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between pb-1">
                <h3 className="mb-3 font-bold text-1xl">Basic Tee 6-Pack</h3>
                <div className="space-y-1">
                  <p className="text-xs ">
                    <span className="font-semibold ">Color:</span> Red
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold ">Size:</span> S
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold ">Price:</span> 29$
                  </p>
                </div>
              </div>
              <div className="ml-auto flex flex-col justify-between">
                <button
                  type="button"
                  class="font-semibold   text-sm lg:text-sx text-indigo-600 hover:text-indigo-500 ">
                  Remove
                </button>
      
                <ProductCounter />
              </div>
            </div>
            <div className="flex justify-start w-full product">
              <div className="h-24 mr-3 w-36 ">
                <img
                  className="object-cover h-full w-full rounded-md "
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between pb-1">
                <h3 className="mb-3 font-bold text-1xl">Basic Tee 6-Pack</h3>
                <div className="space-y-1">
                  <p className="text-xs ">
                    <span className="font-semibold ">Color:</span> Red
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold ">Size:</span> S
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold ">Price:</span> 29$
                  </p>
                </div>
              </div>
              <div className="ml-auto flex flex-col justify-between">
                <button
                  type="button"
                  class="font-semibold   text-sm lg:text-sx text-indigo-600 hover:text-indigo-500 ">
                  Remove
                </button>
      
                <ProductCounter />
              </div>
            </div>
            <div className="flex justify-start w-full product">
              <div className="h-24 mr-3 w-36 ">
                <img
                  className="object-cover h-full w-full rounded-md "
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between pb-1">
                <h3 className="mb-3 font-bold text-1xl">Basic Tee 6-Pack</h3>
                <div className="space-y-1">
                  <p className="text-xs ">
                    <span className="font-semibold ">Color:</span> Red
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold ">Size:</span> S
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold ">Price:</span> 29$
                  </p>
                </div>
              </div>
              <div className="ml-auto flex flex-col justify-between">
                <button
                  type="button"
                  class="font-semibold   text-sm lg:text-sx text-indigo-600 hover:text-indigo-500 ">
                  Remove
                </button>
      
                <ProductCounter />
              </div>
            </div>
            <div className="flex justify-start w-full product">
              <div className="h-24 mr-3 w-36 ">
                <img
                  className="object-cover h-full w-full rounded-md "
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between pb-1">
                <h3 className="mb-3 font-bold text-1xl">Basic Tee 6-Pack</h3>
                <div className="space-y-1">
                  <p className="text-xs ">
                    <span className="font-semibold ">Color:</span> Red
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold ">Size:</span> S
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold ">Price:</span> 29$
                  </p>
                </div>
              </div>
              <div className="ml-auto flex flex-col justify-between">
                <button
                  type="button"
                  class="font-semibold   text-sm lg:text-sx text-indigo-600 hover:text-indigo-500 ">
                  Remove
                </button>
      
                <ProductCounter />
              </div>
            </div>
          </> :
          <>
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
            <ProductLoader />
          </>
        }

      </div>
    </>
  );
}
 