import React, { useContext, useState, useMemo } from "react";
import { MyContext } from "./MyContext";
import { Link } from "react-router-dom";

function SearchFilterSection() {
  const { jobs } = useContext(MyContext);

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  // Unique job types
  const jobTypes = useMemo(() => {
    if (!Array.isArray(jobs)) return [];
    return [...new Set(jobs.map((job) => job.type))];
  }, [jobs]);

  // Unique job locations
  const jobLocations = useMemo(() => {
    if (!Array.isArray(jobs)) return [];
    return [...new Set(jobs.map((job) => job.location))];
  }, [jobs]);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    if (!Array.isArray(jobs)) return [];
    return jobs.filter((job) => {
      const matchesKeyword = keyword
        ? job.keywords.some((kw) =>
            kw.toLowerCase().includes(keyword.toLowerCase())
          ) || job.title.toLowerCase().includes(keyword.toLowerCase())
        : true;

      const matchesCategory = category
        ? job.type.toLowerCase() === category.toLowerCase()
        : true;

      const matchesLocation = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;

      return matchesKeyword && matchesCategory && matchesLocation;
    });
  }, [jobs, keyword, category, location]);

  // Check if all filters are empty
  const noFiltersApplied = !keyword && !category && !location;

  return (
    <div className="w-full bg-[#00b074] py-6 flex flex-col items-center">
      {/* Filter Section */}
      <div className="flex gap-10 bg-white p-4 rounded-sm shadow-lg items-center my-5 px-15">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="px-6 py-2 w-70 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Keywords"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 w-70 border border-gray-300 rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Type</option>
          {jobTypes.map((type, idx) => (
            <option key={idx} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border w-70 border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Location</option>
          {jobLocations.map((loc, idx) => (
            <option key={idx} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Jobs List */}
      {!noFiltersApplied && (
        <div className="mt-6 w-full max-w-4xl">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-4 mb-4 rounded shadow-md border flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <p>{job.company}</p>
                  <p className="text-sm text-gray-600">
                    {job.location} • {job.type}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-sm px-2 py-1 rounded"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Now Button */}

                <Link
                  to='/applyNow'
                  className="bg-[#00b074] text-white py-2 px-4 rounded hover:bg-[#00915e] transition"
                >
                  Apply Now
                </Link>
              </div>
            ))
          ) : (
            <p className="text-white">No jobs found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchFilterSection;
