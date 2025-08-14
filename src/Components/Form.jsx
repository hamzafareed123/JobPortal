import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Form() {
  return (
    <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
      {/* Left: Map */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[33.6844, 73.0479]}
          zoom={13}
          style={{ height: "100%", minHeight: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          <Marker position={[33.6844, 73.0479]}>
            <Popup>Islamabad, Pakistan 📍</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Right: Form */}
      <div className="bg-white rounded-xl shadow-lg px-6 mt-0  flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 text-[#00b074]">
          Contact Us
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#00b074]"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#00b074]"
          />
          <textarea
            placeholder="Enter Your Message"
            rows="6"
            className="border border-gray-300 rounded-lg px-4 py-8 focus:outline-none focus:ring-2 focus:ring-[#00b074]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#00b074] text-white py-4 text-xl px-4 rounded-lg hover:bg-[#00915e] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
