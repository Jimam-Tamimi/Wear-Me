 
import { StarIcon } from '@heroicons/react/20/solid'
import AddToCart from './AddToCart'
import axios from 'axios'
 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


async function fetchProduct(productSlug) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}shop/api/products/${productSlug}`
  );
  return res.data;
}


export default async function Product({params}) {  
  const product = await fetchProduct(params.slug);
  console.log(product) 
  
  return (
    <div className="bg-white">
      <div className="pt-6">
 

        <div className='flex justify-between m-auto max-w-2xl  lg:max-w-7xl lg:px-8 flex-col lg:flex-row mt-8 '>

          {/* Image gallery */}
          <div className=" max-w-[90%] m-auto lg:m-0 lg:w-5/12 ">
            <div className="rounded-lg ">
              <img
                src={product.images[0].image}
                // alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>

          </div>

          {/* Product info */}
          <div className="mx-auto w-[90%]  my-2  lg:w-6/12 ">

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">{product.name}</h1>

              <p className="text-3xl tracking-tight text-gray-900">৳ {product.price}</p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          false ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only"> out of 5 stars</p>
                  <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  </a>
                </div>
              </div>

                          <AddToCart product={product} />
            </div>

          </div>
        </div>


        <div className="pb-10 lg:col-span-2 lg:col-start-1 lg lg:pb-16 lg:pr-8 lg:pt-6 m-auto-2xl mt-9 m-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Description and details */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>

    
        </div>

      </div>
    </div>
  )
}
