import React, { useState } from "react";
import test1 from "../images/test1.jpg";
import test2 from "../images/test2.jpg";
import test3 from "../images/test3.jpg";
import test4 from "../images/test4.jpg";

const reviews = [
  {
    name: "Harram",
    role: "Software Engineer",
    img: test1,
    review: "This service is amazing! Highly recommend."
  },
  {
    name: "Ali",
    role: "UI/UX Designer",
    img: test2,
    review: "Great experience and excellent support."
  },
  {
    name: "Sara",
    role: "Project Manager",
    img: test3,
    review: "They really care about customer satisfaction."
  },
  {
    name: "Bilal",
    role: "Backend Developer",
    img: test4,
    review: "Top-notch quality and fast delivery."
  }
];

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(1); // start with second card in center
  const cardsPerPage = 3;

  const handleCubeClick = (index) => {
    setActiveIndex(index);
  };

  // Calculate the first visible card so activeIndex is centered
  const startIndex = Math.max(0, activeIndex - 1);
  const visibleCards = reviews.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="mt-20">
      <div className="text-center mb-10">
        <h1 className="font-bold text-5xl text-gray-700">Our Client Says</h1>
      </div>

      {/* Cards container */}
      <div className="flex justify-center space-x-6 transition-all duration-500">
        {visibleCards.map((item, i) => {
          const actualIndex = startIndex + i;
          return (
            <div
              key={actualIndex}
              className={`w-80 shadow-lg rounded-lg h-80 p-6 text-center transition-all duration-300 ${
                activeIndex === actualIndex ? "bg-[#00b074]" : "bg-[#9bd6c1]"
              }`}
            >
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto rounded-full w-20 h-20 mb-4"
              />
              <h2 className="text-2xl text-white font-semibold">{item.name}</h2>
              <h4 className="text-white text-lg font-bold">{item.role}</h4>
              <p className="mt-4 text-white">{item.review}</p>
            </div>
          );
        })}
      </div>

      {/* Cube buttons */}
      <div className="flex justify-center mt-6 space-x-3">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCubeClick(index)}
            className={`w-5 h-5 rounded-sm transition-colors duration-300 ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
