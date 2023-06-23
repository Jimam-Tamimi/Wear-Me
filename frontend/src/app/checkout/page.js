import React from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
export default function Checkout() {
  return (
    <>
      <div className="flex flex-col justify-center max-w-2xl p-5 m-auto my-5 lg:flex-row lg:max-w-7xl lg:px-8 lg:justify-between">
        <div className="flex flex-col space-y-6 lg:w-4/12">
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
              <RxCross2 className="mt-1 text-1xl cursor-pointer" />
              <div>qty</div>
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
              <RxCross2 className="mt-1 text-1xl cursor-pointer" />
              <div>qty</div>
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
              <RxCross2 className="mt-1 text-1xl cursor-pointer" />
              <div>qty</div>
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
              <RxCross2 className="mt-1 text-1xl cursor-pointer" />
              <div>qty</div>
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
              <RxCross2 className="mt-1 text-1xl cursor-pointer" />
              <div>qty</div>
            </div>
          </div>
        </div>
        <div className="h-12 border-2 md:w-2/3 2 r-section lg:w-7/12 ">
          <form action="" className="order-details"></form>
          <div className="place-order"></div>
        </div>
      </div>
    </>
  );
}
