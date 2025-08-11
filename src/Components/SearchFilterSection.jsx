import React from "react";

function SearchFilterSection() {
  return (
    <div className="w-full bg-[#00b074] py-6 flex justify-center">
      <div className="flex gap-10 bg-white p-4 rounded-sm shadow-lg items-center my-5 px-15">
        
        {/* Keyword Input */}
        <input
          type="text"
          className="px-6 py-2 w-70 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Keywords"
        />

        {/* Category Select */}
        <select
          id="category"
          name="Category"
          className="px-4 py-2 w-70 border border-gray-300 rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          defaultValue="Select Category"
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="option 1">Option 1</option>
          <option value="option 2">Option 2</option>
          <option value="option 3">Option 3</option>
          <option value="option 4">Option 4</option>
        </select>

        {/* Location Select */}
        <select
          id="location"
          name="location"
          className="px-4 py-2 border w-70 border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          defaultValue=""
        >
          <option value="" disabled>
            Select Location
          </option>
          <option value="islamabad">Islamabad</option>
          <option value="lahore">Lahore</option>
          <option value="karachi">Karachi</option>
          <option value="peshawar">Peshawar</option>
        </select>

        {/* Search Button */}
        <button className="px-6 py-2  bg-[#2b3940] text-white font-semibold rounded-md hover:bg-[#2b3940] transition-colors">
          Search
        </button>

      </div>
    </div>
  );
}

export default SearchFilterSection;
