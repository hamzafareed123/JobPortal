import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function NavBarSection() {
  return (
    <div className="w-full mt-0">
      <div className="text-start  text-[#00b074] p-5 flex justify-between gap-6 items-center">
        <h1 className="text-4xl font-bold">Job Entry</h1>

        <ul className="flex gap-10 text-xl ">
          <li className="border rounded border-transparent hover:bg-[#00b074] hover:text-white p-2">
            <a href="">Home</a>
          </li>
          <li className="border rounded border-transparent hover:bg-[#00b074] hover:text-white p-2">
            <a href="">About</a>
          </li>
          <li className="border rounded border-transparent hover:bg-[#00b074] hover:text-white p-2">
            <a href="">Jobs</a>
          </li>
          <li className="border rounded border-transparent hover:bg-[#00b074] hover:text-white p-2">
            <a href="">Contact</a>
          </li>
          <span className="">
            <li className="border rounded border-transparent bg-[#00b074] text-white p-3 flex items-center ">
              <a href="" className="flex items-center gap-2">
                Post A Job
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </li>
          </span>
        </ul>
      </div>
    </div>
  );
}

export default NavBarSection;
