'use client'

import { Rating } from '@smastrom/react-rating'
import React, { useEffect, useState } from 'react'
import '@smastrom/react-rating/style.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BounceLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { updateLoader } from '@/redux/slices/loading/loadingSlice';


export default function Review({orderItem, orderDetails}) {
    const dispatch = useDispatch()
    
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [reviewState, setReviewState] = useState('disabled')
    const [review, setReview] = useState(null)
    const [rating, setRating] = useState(3)
    
    async function getReviewForOrder(orderId, productId ) {
        try{
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}shop/api/reviews/?product=${productId}&order=${orderId}` )
            if (res.status==200 && res.data.length !== 0) {
                  setReview(res.data[0])
            }
            console.log(res)
        }        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        
        getReviewForOrder(orderDetails.id, orderItem.product.id)
    }, [])
    useEffect(() => {
        setRating(review?review.rating:3)
    }, [review])
    

    async function onSubmit(data) {
        dispatch(updateLoader(20))
        setReviewState("submitting_review")
        const payload = {
            ...data,
            order:orderDetails.id,
            product:orderItem.product.id, 
            rating:rating,
        }
        console.log(payload)
        
        try{
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}shop/api/reviews/`, payload)
            if(res.status===201){
                setReview(res.data)
        dispatch(updateLoader(100))
                
                return
            }
            console.log(res)
    } catch (err){
        console.log(err)
    } 
    setReview(null)
    setReviewState("reviewed")

    dispatch(updateLoader(100))
    

}
    
    return (
        <>
            <form onSubmit={review==null?  handleSubmit(onSubmit): e=> {} } className='flex  items-start flex-col mt-3 lg:m-0'>
                <textarea disabled={review!=null}  class="border border-gray-300  focus:border-indigo-900 outline-none text-sm px-2 py-1" cols={30} rows={3} placeholder='Give us a feedback' {...register('feedback', { required: true, maxLength: 300 })} defaultValue={review?review.feedback :''}></textarea>
                {errors?.feedback?.type === 'required' && <span className='text-xs mt-1 font-bold text-red-500' >Feedback is required</span>}
                        {errors?.feedback?.type === 'maxLength' && <span className='text-xs mt-1 font-bold text-red-500' >Feedback cannot exceed 300 characters</span>}
                <Rating
                    style={{ maxWidth: 110 }}
                    value={rating}
                    onChange={setRating}
                    isRequired
                    className='my-2'
                    isDisabled={review!=null}
                    />
                    {
                        review? 
                        <button disabled={true} type='submit' className={`bg-indigo-200 text-white font-medium py-1 px-2 text-xs rounded-sm `}>Reviewed</button>:
                        <button disabled={reviewState=='submitting_review'} type='submit' className={`bg-indigo-500 text-white font-medium py-1 px-2 text-xs rounded-sm hover:scale-105 transition-all duration-300 ease-in-out hover:bg-indigo-600 active:scale-95`}>Review</button>
                    }
            </form>
        </>
    )
}
