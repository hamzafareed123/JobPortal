import React from "react";
import mainImage from '../images/mainSection.jpg';  

function Hero() {
  return (
    <section className="relative h-[80vh] w-full mt-0 overflow-hidden">
     
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

     
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h2 className="text-4xl font-bold text-white uppercase mb-4">
         
        </h2>
        <p className="text-xl text-red-600 font-bold"></p>
      </div>
        <img
        src={mainImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover animate-slide"
      />
    </section>
  );
}

export default Hero;
