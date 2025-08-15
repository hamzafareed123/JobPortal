import React, { useState } from "react";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

function NavBarSection() {
  const [showJobsMenu, setShowJobsMenu] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm">
      <div className="px-5 py-7 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-4xl font-bold">Job Entry</h1>

        {/* Navigation */}
        <ul className="flex gap-8 text-xl items-center">
          <li>
            <NavLink
              to="/"
              className="border rounded border-transparent hover:bg-[#00b074] hover:text-white px-3 py-2 transition"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="border rounded border-transparent hover:bg-[#00b074] hover:text-white px-3 py-2 transition"
            >
              About
            </NavLink>
          </li>

          {/* Jobs Dropdown */}
          <li className="relative">
            <button
              onClick={() => setShowJobsMenu((prev) => !prev)}
              className="flex items-center gap-1 border rounded border-transparent hover:bg-[#00b074] hover:text-white px-3 py-2 transition"
            >
              Jobs
              {showJobsMenu ? (
                <ChevronUpIcon className="w-4 h-4" />
              ) : (
                <ChevronDownIcon className="w-4 h-4" />
              )}
            </button>

            {showJobsMenu && (
              <ul
                className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg text-black"
                onMouseLeave={() => setShowJobsMenu(false)}
              >
                <li>
                  <NavLink
                    to="/jobs"
                    className="block px-4 py-2 hover:bg-[#00b074] hover:text-white"
                    onClick={() => setShowJobsMenu(false)}
                  >
                    Job List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/jobsDetails"
                    className="block px-4 py-2 hover:bg-[#00b074] hover:text-white"
                    onClick={() => setShowJobsMenu(false)}
                  >
                    Job Details
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/contact"
              className="border rounded border-transparent hover:bg-[#00b074] hover:text-white px-3 py-2 transition"
            >
              Contact
            </NavLink>
          </li>

          {/* Post Job Button */}
          <li>
            <NavLink
              to="/page404"
              className="border rounded border-transparent bg-[#00b074] text-white px-4 py-2 flex items-center gap-2 hover:bg-[#00915e] transition"
            >
              Post A Job
              <ArrowRightIcon className="w-5 h-5" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarSection;
