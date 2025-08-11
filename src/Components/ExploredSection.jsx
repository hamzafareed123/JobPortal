import React from 'react';
import { FaSearch } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { FaSalesforce } from "react-icons/fa6";
import { GiHumanPyramid } from "react-icons/gi";
import { MdOutlineAccountBalance } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";


function ExploredSection() {
 
  const categories = [
    { icon: <SiCoinmarketcap />, title: "Marketing", vacancies: "123 Vacancy" },
    { icon: <MdDeveloperMode />, title: "Development", vacancies: "98 Vacancy" },
    { icon: <MdDesignServices />, title: "Design", vacancies: "76 Vacancy" },
    { icon: <FaSalesforce />, title: "Sales", vacancies: "54 Vacancy" },
    { icon: <GiHumanPyramid />, title: "Human Resources", vacancies: "32 Vacancy" },
    { icon: <MdOutlineAccountBalance />, title: "Finance", vacancies: "45 Vacancy" },
    { icon: <MdOutlineContactSupport />, title: "Customer Support", vacancies: "67 Vacancy" },
    { icon: <IoMdSchool />, title: "Education", vacancies: "29 Vacancy" },
  ];

  return (
    <div className="w-full mt-20 px-8">
      
      <div className="text-center font-bold text-4xl text-gray-700 mb-10">
        <h1>Explore By Category</h1>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-2xl transition-shadow cursor-pointer"
          >
            <div className="text-[#00b074] text-6xl mb-3">{cat.icon}</div>
            <h2 className="text-lg font-semibold text-gray-800">{cat.title}</h2>
            <p className="text-gray-500">{cat.vacancies}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploredSection;
