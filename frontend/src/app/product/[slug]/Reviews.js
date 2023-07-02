import React from 'react'
import RateChild from './RateChild';
import axios from 'axios';


export async function fetchProductReviews(id) {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}shop/api/reviews/?product=${id}`
    );
    return res.data;
}



export default async function Reviews({ productId }) {

    const reviews = await fetchProductReviews(productId)

    return (
        <>

            <div className="pb-10 lg:col-span-2 lg:col-start-1 lg lg:pb-16 lg:pr-8 lg:pt-6 m-auto-2xl mt-9 m-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div>
                    <h3 className="text-3xl font-bold mb-6">Reviews</h3>
                    {
                        reviews.length === 0 ? <p>This product doesn't have any review...</p> :
                            reviews.map((review) => (
                                <div className="space-y-6">
                                    <div class="relative mt-8 flex  gap-x-4">
                                        <svg class="h-10 w-10 rounded-full  text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                        </svg>
                                        <div class="text-sm leading-6">
                                            <p class="font-semibold text-gray-900">
                                                <div>
                                                    <span class="absolute inset-0"></span>
                                                    Random User
                                                </div>
                                            </p>
                                            <p class="text-gray-600">{review.feedback}</p>
                                            <RateChild rating={review.rating} />
                                        </div>
                                    </div>


                                </div>
                            ))
                    }
                </div>


            </div>
        </>
    )
}
