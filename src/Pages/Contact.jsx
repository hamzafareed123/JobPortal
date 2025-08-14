import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Form from "../Components/Form";
import mainImage from '../images/contactUs.jpg'

function Contact() {
  return (
    <div className="">
          <section className="relative h-[90vh] w-full mt-0 overflow-hidden">
              
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
              <div className="relative z-10 w-1/2 flex flex-col justify-center items-center h-full text-center px-4 ml-10">
                <h1 className="text-6xl font-bold text-white uppercase mb-4 p-3">
                   Contact For Any Query
                </h1>
                
              </div>
        
              <img
                src={mainImage}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            </section>
      

      <div className="flex gap-7 mb-10 justify-center mt-15 bg-white ">
        <div className="flex items-center gap-3 rounded-xl py-12 px-6 bg-[#effdf5] text-gray-600  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <IoLocation size={30} color="#00b074" />
          <h2 className="text-lg font-semibold">
            123 Street, Islamabad, Pakistan
          </h2>
        </div>

        <div className="flex items-center rounded-xl  gap-3 py-4 px-17   bg-[#effdf5] text-gray-600  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <MdEmail size={30} color="#00b074"/>
          <h2 className="text-lg font-semibold">
            info@example.com
          </h2>
        </div>

        <div className="flex items-center rounded-xl  gap-3 py-4 px-17  bg-[#effdf5] text-gray-600  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <FaPhoneAlt size={30} color="#00b074"/>
          <h2 className="text-lg font-semibold">
            +922 345 6789
          </h2>
        </div>
      </div>
      <Form/>
    </div>
  );
}

export default Contact;
