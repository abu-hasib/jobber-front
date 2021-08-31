import React, { useState, useEffect } from "react";
import { getAllJobs } from "../../app/user";
// import Navigation from "../Navigation";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getAllJobs().then((response) => {
      console.log(response);
      const { jobs } = response.data;
      setJobs(jobs);
    });
    return () => {
      // cleanup;
    };
  }, [jobs]);
  return (
    <div>
      {jobs.map((job) => (
        <li>{job.title}</li>
      ))}
    </div>
  );
};

export default Home;
