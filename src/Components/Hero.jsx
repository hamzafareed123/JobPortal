import React from "react";
import mainImage from "../images/mainSection.jpg";

function Hero() {
  return (
    <section className="relative h-[90vh] w-full mt-0 overflow-hidden">
      
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="relative z-10 w-1/2 flex flex-col justify-center items-center h-full text-center px-4 ml-10">
        <h1 className="text-6xl font-bold text-white uppercase mb-4 p-3">
          Find The Perfect Job That You Deserved
        </h1>
        <span className="flex gap-10 mt-6">
          <button className="p-4 px-10 font-bold border rounded-md border-[#00b074] bg-[#00b074] text-white">
            <a href="">Find Job</a>
          </button>
          <button className="p-4 px-6 font-bold border rounded-md border-[#00b074] bg-blue-400 text-white">
            <a href="">Find Talent</a>
          </button>
        </span>
      </div>

      <img
        src={mainImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
    </section>
  );
}

export default Hero;
