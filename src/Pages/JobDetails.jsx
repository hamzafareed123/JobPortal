import React from "react";
import mainImage from "../images/jobDetail.jpg";
import logo2 from "../images/logo2.jpg";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { CheckIcon } from "@heroicons/react/24/solid";

function JobDetails() {
  const filteredJobs = [
    {
      id: 2,
      title: "Frontend Developer",
      companyLogo: logo2,
      location: "Los Angeles, USA",
      type: "Part Time",
      salary: "$100 - $300",
      deadline: "15 Feb, 2025",
    },
  ];

  const items = [
    "Position: Frontend Developer",
    "Location: Los Angeles, USA (Remote option available)",
    "Type: Part-Time",
    "Salary: $100 – $300",
    "Application Deadline: 15 Feb, 2025",
    "Experience: 1–3 years (preferred)",
  ];

  const require = [
    "Develop responsive and user-friendly web interfaces using modern frontend technologies",
    "Collaborate with designers and backend developers to deliver seamless user experiences",
    "Optimize web applications for maximum speed and scalability",
    "Maintain and improve existing codebases",
    "Stay updated with the latest frontend trends and best practice",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-100"></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-10">
          <h1
            className="text-5xl md:text-6xl font-extrabold text-white uppercase mb-4 leading-tight"
            style={{
              animation: "slideIn 2s ease-out forwards",
            }}
          >
            Discover Your Next Career Move With Us
          </h1>
        </div>

        <img
          src={mainImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />


        <style>
          {`
            @keyframes slideIn {
              0% {
                transform: translateX(-100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
          `}
        </style>
      </section>

      <div className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col md:flex-row md:justify-between md:items-center gap-6"
          >
            <div className="flex items-center gap-6">
              <img
                src={job.companyLogo}
                alt="Company Logo"
                className="w-20 h-20 rounded-full border shadow"
              />
              <div>
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <div className="flex flex-wrap gap-4 text-gray-600 mt-2 text-lg">
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt size={18} color="#00b074" /> {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock size={18} color="#00b074" /> {job.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 ml-20">
        <div className="md:col-span-2 mt-10">
          <h1 className="text-3xl font-bold mb-4">Job Description</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            We are looking for a creative and detail-oriented Frontend Developer
            to join our growing team. You will be responsible for designing,
            developing, and maintaining engaging user interfaces for our web
            applications. This role requires a strong understanding of modern
            frontend technologies, an eye for design, and the ability to
            collaborate with cross-functional teams to deliver high-quality user
            experiences.
          </p>
        </div>

        <div className="bg-[#effdf5] p-6 rounded-lg shadow ml-30 w-120">
          <h1 className="text-2xl font-bold mb-4">Job Summary</h1>
          <ul className="space-y-2 text-gray-700 text-lg">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 ml-20 mt-20">
  {/* Responsibilities */}
  <div className="bg-white p-4">
    <h1 className="text-3xl font-bold mb-4">Responsibilities</h1>
    <ul className="space-y-2 text-gray-700 text-lg">
      {require.map((item, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>


  <div className="bg-[#EFFDF5] p-4 ml-75 w-120 ">
    <h1 className="text-3xl font-bold mb-4">About Company</h1>
    <p className="text-lg leading-relaxed text-gray-700">
      We are looking for a creative and detail-oriented Frontend Developer
      to join our growing team. You will be responsible for designing,
      developing, and maintaining engaging user interfaces for our web
      applications. This role requires a strong understanding of modern
      frontend technologies, an eye for design, and the ability to
      collaborate with cross-functional teams to deliver high-quality user
      experiences.
    </p>
  </div>
</div>


<div className="bg-white rounded-xl shadow-lg px-6 ml-15 flex flex-col justify-center w-[50rem] mt-15">
  <h2 className="text-4xl font-bold mb-4 text-[#00b074]">
    APPLY FOR THE JOB
  </h2>
  <form className="flex flex-col gap-4 mt-8">
   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl">
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
    </div>

  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl">
      <input
        type="text"
        placeholder="Enter Your Portfolio Website"
        className="border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#00b074]"
      />
     
      <label className="flex items-center justify-center border border-gray-300 rounded-lg px-4 py-4 text-gray-500 cursor-pointer hover:bg-gray-50 transition">
        <input type="file" className="hidden" />
        📄 Choose CV
      </label>
    </div>


    <textarea
      placeholder="Cover Letter"
      rows="6"
      className="border text-xl border-gray-300 rounded-lg px-4 py-8 focus:outline-none focus:ring-2 focus:ring-[#00b074]"
    ></textarea>

  
    <button
      type="submit"
      className="bg-[#00b074] text-white py-4 text-xl px-4 rounded-lg hover:bg-[#00915e] transition duration-300"
    >
      Submit
    </button>
  </form>
</div>


    </>
  );
}

export default JobDetails;