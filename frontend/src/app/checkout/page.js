import React from "react";
import FormSection from './FormSection'
import ProductSection from "./ProductSection";
export default function Checkout() {
  return (
    <>
      <div className="flex flex-col justify-center max-w-2xl p-5 m-auto lg-my-5  lg:flex-row lg:max-w-7xl lg:px-8 lg:justify-between">
        <ProductSection />
        <div className=" mb-12   w-full  r-section lg:w-7/12 ">
          <FormSection />
        </div>
      </div>
    </>
  );
}
