'use client'

import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as crypto from "crypto-js";
import { useDispatch } from 'react-redux';
import { clearCart } from '@/redux/slices/cart/cartSlice';
import { updateLoader } from '@/redux/slices/loading/loadingSlice';
import { Rating } from '@smastrom/react-rating';
import Review from './Review';
export default function page({ params }) {
  const dispatch = useDispatch()
  



  const [orderDetails, setOrderDetails] = useState(null)


  async function getOrderDetails() {

    try {

      // crypto.AES.decrypt()
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}shop/api/orders/${params.id}/`)
      if (res.status == 200) {
        setOrderDetails(res.data)
      }
    } catch (err) {
      // console.log(err)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      dispatch(clearCart())

    }, 100);
    dispatch(updateLoader(30))

    getOrderDetails()
    dispatch(updateLoader(100))

    return () => {

    }
  }, [])

  return (
    <div className='flex justify-center items-center my-5 '>
      <div className='m-auto  mx-3 w-full px-5 max-w-2xl lg:max-w-4xl sm:px-6   lg:px-8 shadow-[0px_0px_12px_1px_#16a34a29] bg-[#9fe6b90f] rounded-lg flex flex-col justify-center items-center   lg:-w-[60%] lg:m-auto py-8 ' >
        <h3 className='text-2xl font-bold text-green-600 mb-1'>{orderDetails?.order_status}</h3>

        <div className='flex justify-between items-center space-x-5 mb-1'>
          <p className='text-base font-semibold '>Tracking Id: {orderDetails?.trackingId}</p>
          <p className='text-base font-semibold '>Payment: ৳{orderDetails?.totalPrice}</p>
        </div>
        <div className='w-full'>

          <h5 className='text-left w-full text-lg font-bold mb-2' >Products:</h5>
          {
            orderDetails?.products?.map((orderItem, i) => (
              <div id={i} className=' mb-4 flex flex-col lg:flex-row lg:justify-between'>
                <div className="flex justify-start w-full product ">
                  <div className="h-24 mr-3 w-36 ">
                    <img
                      className="object-cover h-full w-full rounded-md "
                      src={orderItem.imageSrc}

                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-start pb-1">
                    <Link href={`/product/${orderItem.product?.slug}/`} className="mb-2 font-bold text-1xl hover:underline">{orderItem.product?.name}</Link>
                    <div className=" flex items-center">
                      <div className='mr-9 mt-[2px]'>

                        <p className="text-xs ">
                          <span className="font-semibold ">Color: </span>{orderItem?.color?.color}
                        </p>
                        <p className="text-xs ">
                          <span className="font-semibold ">Size: </span>{orderItem?.size}
                        </p>
                      </div>
                      <div>

                        <p className="text-xs ">
                          <span className="font-semibold ">Price: </span>৳ {orderItem?.product?.price * orderItem?.itemCount}
                        </p>
                        <p className="text-xs ">
                          <span className="font-semibold ">Qty: </span>{orderItem?.itemCount}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto flex flex-col justify-between">

                    {/* <div className="text-end"></div> */}
                  </div>
                </div>
                {
                  orderDetails.order_status == 'Products Delivered' ?  <Review orderDetails={orderDetails} orderItem={orderItem} />:''
                }
              </div>


            ))
          }
        </div>
        <div className='w-full'>
          <h5 className='text-left w-full text-lg font-bold mb-2' >Address:</h5>
          <div className='ml-1'>
            <p className='text-base font-semibold'>First Name: <span className='font-normal'>{orderDetails?.fName}</span></p>
            <p className='text-base font-semibold'>Last Name: <span className='font-normal'>{orderDetails?.lName}</span></p>
            <p className='text-base font-semibold'>Email: <span className='font-normal'>{orderDetails?.email}</span></p>
            <p className='text-base font-semibold'>Additional Number: <span className='font-normal'>{orderDetails?.addNumber}</span></p>
            <p className='text-base font-semibold'>Address: <span className='font-normal'>{orderDetails?.address}</span></p>
          </div>
        </div>

      </div>
    </div>
  )
}
