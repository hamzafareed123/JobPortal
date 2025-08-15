import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';
import logo1 from '../images/logo1.jpg';
import logo2 from '../images/logo2.jpg';
import logo3 from '../images/logo3.jpg';
import logo4 from '../images/logo4.jpg';
import logo5 from '../images/logo5.jpg';
import mainImage from '../images/mainSection.jpg'

const jobData = [
  {
    id: 1,
    title: 'Software Engineer',
    companyLogo: logo1,
    location: 'Karachi',
    type: 'Full Time',
    salary: '$123 - $456',
    deadline: '01 Jan, 2045',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    companyLogo: logo2,
    location: 'Lahore',
    type: 'Part Time',
    salary: '$100 - $300',
    deadline: '15 Feb, 2025',
  },
  {
    id: 3,
    title: 'Graphic Designer',
    companyLogo: logo3,
    location: 'Peshawar',
    type: 'Part Time',
    salary: '$100 - $200',
    deadline: '10 Mar, 2025',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    companyLogo: logo4,
    location: 'Islamabad',
    type: 'Full Time',
    salary: '$200 - $400',
    deadline: '20 Mar, 2025',
  },
  {
    id: 5,
    title: 'Backend Developer',
    companyLogo: logo5,
    location: 'Karachi',
    type: 'Full Time',
    salary: '$300 - $500',
    deadline: '01 Apr, 2025',
  },

];

function JobList() {
  const [activeTab, setActiveTab] = useState('Featured');

  const tabs = ['Featured', 'Full Time', 'Part Time'];

  const filteredJobs =
    activeTab === 'Featured'
      ? jobData
      : jobData.filter((job) => job.type === activeTab);

  return (
    <>
<section className="relative h-[90vh] w-full mt-0 overflow-hidden">
              
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
              <div className="relative z-10 w-1/2 flex flex-col justify-center items-center h-full text-center px-4 ml-10">
                <h1 className="text-6xl font-bold text-white uppercase mb-4 p-3">
                   List of All Jobs
                </h1>
                
              </div>
        
              <img
                src={mainImage}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            </section>
      

    <div className="w-full text-center mt-20">
      <h1 className="font-bold text-4xl">Job Listing</h1>

      {/* Tabs */}
      <ul className="flex justify-center gap-8 mt-15 text-2xl mb-8 border-b border-gray-300">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 cursor-pointer relative ${
              activeTab === tab
                ? 'text-blue-600 font-semibold border-b-4 border-blue-600'
                : 'text-gray-600'
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Job Cards */}
      <div className="max-w-6xl mx-auto space-y-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="flex justify-between items-center p-5 border rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Left section */}
            <div className="flex items-center gap-4">
              <img
                src={job.companyLogo}
                alt="Company Logo"
                className="w-14 h-14 rounded-full border"
              />
              <div className="text-left">
                <h2 className="text-xl font-bold">{job.title}</h2>
                <div className="flex gap-4 text-gray-500 mt-1 text-sm">
                  <span className="flex items-center gap-3">
                    <FaMapMarkerAlt /> {job.location}
                  </span>
                  <span className="flex items-center gap-3">
                    <FaClock /> {job.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="text-right flex flex-col items-end">
              <span className="flex items-center gap-1 text-lg font-semibold text-green-600">
                <FaDollarSign /> {job.salary}
              </span>
              <div className="flex gap-2 mt-2">
                <button className="px-6 py-3 text-lg bg-[#00b074] text-white rounded hover:bg-blue-700">
                  Apply
                </button>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                <FaCalendarAlt /> Deadline: {job.deadline}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default JobList;
