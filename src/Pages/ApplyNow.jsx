import React from 'react'

function ApplyNow() {
  return (

    <div className="bg-white rounded-xl shadow-lg px-6 ml-15 flex flex-col justify-center w-[50rem] mt-30">
        <h2 className="text-4xl font-bold mb-4 text-[#00b074]">
          APPLY FOR THE JOB
        </h2>
        <form className="flex flex-col gap-4 mt-8" id="form">
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
  )
}

export default ApplyNow