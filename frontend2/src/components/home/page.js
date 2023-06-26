import React from 'react'

export default function Checkout() {
  return (
    <>
      <div className='h-screen checkout ' >
        <div className="w-1/3">
          <div className="product">
            <div>
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="" />
            </div>
            <div>
              <h3>Basic Tee 6-Pack</h3>
              <p>Color: Red</p>
              <p>Size: S</p>
              <div>qty</div>
              <p>Price: 29$</p>
            </div>
          </div>
        </div>
        <div className="order-2 w-2/3 h-12 2 r-section">
          <form action="" className="order-details">

          </form>
          <div className="place-order">
            
          </div>
        </div>
      </div>
    </>
  )
}
