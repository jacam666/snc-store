"use client"

import MyNavbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-white relative">
      <MyNavbar /> 
      <div className="grid grid-cols-1 gap-4">
        <img src="/images/homepage-images/snc-products-3.jpg" className="w-full"/>
          <div className="absolute inset-0 flex justify-center items-center px-2 mt-9 ">
            <span className="text-white text-center text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl border rounded-lg backdrop-brightness-50 p-4">SNC Supplement are a range of products designed to help you achieve your fitness goals, whether you want to build muscle, lose fat, improve performance or boost your immune system.</span>
          </div>
        </div>
      </div>
  );
}