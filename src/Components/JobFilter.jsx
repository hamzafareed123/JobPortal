import React, { useEffect, useState } from "react";
import { MyContext } from "./MyContext";

function JobFilter({ children }) {
  const [jobs, setJobs] = useState([]);

  const jobfilter = async () => {
    try {
      const response = await fetch("http://localhost:5000/jobs");
      const result = await response.json();

      // If result is an object with "jobs" key, extract the array
      if (Array.isArray(result)) {
        setJobs(result);
      } else if (Array.isArray(result.jobs)) {
        setJobs(result.jobs);
      } else {
        console.error("Unexpected data format:", result);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    jobfilter();
  }, []);

  return (
    <MyContext.Provider value={{ jobs }}>
      {children}
    </MyContext.Provider>
  );
}

export default JobFilter;
