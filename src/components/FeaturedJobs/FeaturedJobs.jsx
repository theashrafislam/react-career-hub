import { useEffect, useState } from "react";
import Job from "../Job/Job";
import { json } from "react-router-dom";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-extrabold">Featured Jobs: {jobs.length}</h2>
                <p className="font-medium text-base">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;