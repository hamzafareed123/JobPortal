import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";


const dotPattern =
  "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23cbd5e1'/%3E%3C/svg%3E";

function About() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-10 px-8 py-16">
      <div className="relative flex-1">
        <div
          className="absolute inset-0 bg-repeat rounded-lg"
          style={{
            backgroundImage: `url("${dotPattern}")`,
            opacity: 0.3,
            zIndex: 0,
          }}
        ></div>

        <div className="grid grid-cols-2 gap-4 relative z-10">
          <img
            src={img1}
            alt="Work"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src={img2}
            alt="Team"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src={img3}
            alt="Office"
            className="rounded-lg object-cover w-full h-48"
          />
          <img
            src={img4}
            alt="Success"
            className="rounded-lg object-cover w-full h-48"
          />
        </div>
      </div>

      <div className="flex-1 ml-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 ">
          We Help To Get The Best Job And Find A Talent
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Our platform connects passionate job seekers with industry-leading
          companies. Whether you're looking to start your career or expand your
          team, we provide the tools, resources, and network to make it happen.
          From AI-powered job matching to verified employer profiles, we ensure
          every opportunity is transparent and tailored to your goals.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Advanced AI
            job-matching system for personalized results
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Verified companies and
            secure application process
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Career resources,
            interview tips, and skill-building tools dolore erat amet
          </li>
        </ul>
        <button className="px-6 text-lg py-3 bg-[#00b074] text-white rounded-md hover:bg-black transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
}

export default About;
