'use client'

import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';

export default function FormSection({ cartProducts }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const cart = useSelector(state => state.cart)
    const onSubmit = async data => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}shop/api/order/`, {
                products: cart,
                ...data 
            })
            console.log(res)
        } catch(err){
            console.log(err)
        }

        // sessionStorage.setItem('order-details', JSON.stringify({
        // }))
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <h2 className="mb-5 mt-7 lg:mt-0 md:mb-4 text-2xl font-semibold">Information</h2>

                <div className="grid md:grid-cols-2 md:gap-6 lg:ml-[1px]">
                    <div className="relative z-0 w-full mb-6 md:mb-1 group">
                        <input name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' {...register('firstName', { required: true, maxLength: 20 })} />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name *</label>

                        {errors?.firstName?.type === 'required' && <span className='text-sm font-bold text-red-500' >First Name is required</span>}
                        {errors?.firstName?.type === 'maxLength' && <span className='text-sm font-bold text-red-500' >First name cannot exceed 20 characters</span>}
                    </div>
                    <div className="relative z-0 w-full mb-6 md:mb-1 group">
                        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' '  {...register('lastName', { required: true, maxLength: 20 })} />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name *</label>
                        {errors?.lastName?.type === 'required' && <span className='text-sm font-bold text-red-500' >Last Name is required</span>}
                        {errors?.lastName?.type === 'maxLength' && <span className='text-sm font-bold text-red-500' >Last Name cannot exceed 20 characters</span>}
                    </div>
                    <div className="relative z-0 w-full mb-6 md:mb-1 group">
                        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' '  {...register('email', { required: true, maxLength: 50 })} />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email *</label>
                        {errors?.email?.type === 'required' && <span className='text-sm font-bold text-red-500' >Email is required</span>}
                        {errors?.email?.type === 'maxLength' && <span className='text-sm font-bold text-red-500' >Email cannot exceed 20 characters</span>}
                    </div>
                    <div className="relative z-0 w-full mb-6 md:mb-1 group">
                        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' '  {...register('mobileNumber', { required: true, maxLength: 20 })} />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number *</label>
                        {errors?.mobileNumber?.type === 'required' && <span className='text-sm font-bold text-red-500' >Mobile Number is required</span>}
                        {errors?.mobileNumber?.type === 'maxLength' && <span className='text-sm font-bold text-red-500' >Mobile Number cannot exceed 20 characters</span>}
                    </div>
                    <div className="relative z-0 w-full mb-6 md:mb-1 group">
                        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' '  {...register('additionalMobileNumber', { maxLength: 20 })} />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Additional Mobile Number</label>

                        {errors?.additionalMobileNumber?.type === 'maxLength' && <span className='text-sm font-bold text-red-500' >Mobile Number cannot exceed 20 characters</span>}
                    </div>
                    <div className="relative z-0 w-full mb-6 md:mb-1 group">
                        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' '  {...register('address', { required: true, maxLength: 100 })} />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address *</label>
                        {errors?.address?.type === 'required' && <span className='text-sm font-bold text-red-500' >Address is required</span>}
                        {errors?.address?.type === 'maxLength' && <span className='text-sm font-bold text-red-500' >Address cannot exceed 100 characters</span>}
                    </div>

                </div>
                <div className="place-order my-3 ">
                    <h2 className="mb-5 mt-7 md:mb-4 text-2xl font-semibold">Order Summary</h2>
                    <div className="lg:ml-[1px] space-y-2 ">

                        <div className="flex justify-between items-center text-sm " >
                            <p className="font-bold">Items Total:</p> <p className="font-semibold">৳ {cartProducts.reduce((totalPrice, product) => (product.price * product.itemCount) + totalPrice, 0)}</p>
                        </div>
                        <div className="flex justify-between items-center text-sm " >
                            <p className="font-bold">Delivery Fee:</p> <p className="font-semibold">৳ 60</p>
                        </div>
                        <hr className="!mt-5" />
                        <div className="flex justify-between items-center text-sm " >
                            <p className="font-bold">Total Payment:</p> <p className="font-semibold">৳ {cartProducts.reduce((totalPrice, product) => (product.price * product.itemCount) + totalPrice, 0) + 60}</p>
                        </div>
                    </div>
                </div>  
                <div className="mt-6">
                    <button
                        className="lg:ml-auto ease-in-out duration-300 w-full lg:w-36 flex items-center justify-center rounded-md border hover:border-transparent  border-indigo-600 px-6 py-3 text-base font-medium text-indigo-600 hover:text-white shadow-sm hover:bg-indigo-700
              ">
                        Place Order
                    </button>
                </div>
            </form>

        </>
    )
}



