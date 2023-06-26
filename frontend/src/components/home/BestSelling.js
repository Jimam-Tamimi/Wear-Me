// 'use client'
import axios from "axios";
import ProductCard from "../ProductCard";

// const products = [
//     {
//       id: 1,
//       name: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//     },
//     {
//       id: 1,
//       name: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//     },
//     {
//       id: 1,
//       name: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//     },
//     {
//       id: 1,
//       name: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//     },
//     // More products...
//   ]

async function fetchProducts() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}shop/api/products/`
  );
  return res.data;
}

export default async function BestSelling() {
  // async function run() {
  //   try {

  //     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}shop/api/products/`)
  //     console.log(res)
  //   } catch (err){
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   run()
  //   return () => {

  //   }
  // }, [])

  const products = await fetchProducts();
  console.log(products);

  return (
    <>
      {/* <div classNameName="bg-white">
      <div classNameName="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 classNameName="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div classNameName="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} classNameName="group relative">
              <div classNameName="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  classNameName="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div classNameName="mt-4 flex justify-between">
                <div>
                  <h3 classNameName="text-sm text-gray-700">
                    <a href={`/products/${product.id}/`}>
                      <span aria-hidden="true" classNameName="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p classNameName="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p classNameName="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}

      <section className="text-gray-600 body-font">
        <div className="container just px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4 justify-between">
            {products.map((product) => (
              <ProductCard product={product} />
            ))} 
          </div>
        </div>
      </section>
    </>
  );
}
