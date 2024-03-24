import { useLoaderData, useParams } from "react-router-dom";
import { LuCircleDollarSign } from "react-icons/lu";
import { CiShop } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    // console.log(jobs);
    const { id } = useParams()
    // console.log(id, jobs)
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    // console.log(job)
    const { job_description, contact_information, job_title, salary, job_responsibility, educational_requirements, experiences } = job;
    
    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast.success('You have applied successfully.');
    }

    return (
        <div>
            <h2 className="text-center font-bold text-3xl">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4 my-10">
                <div className="border md:col-span-3 space-y-5 p-4">
                    <p><span className="font-bold">Job Description:</span> {job_description}</p>
                    <p><span className="font-bold">Job Responsibility: </span> {job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements:</span> {educational_requirements}</p>
                    <p><span className="font-bold">Experiences:</span> {experiences}</p>
                </div>
                <div className="">
                    <div className="bg-[#F4F1FF] border  p-4">
                        <h1 className="font-bold mb-2 pb-4 border-b-2">Job Details</h1>
                        <div className="space-y-3">
                            <h3 className="flex items-center gap-2 font-bold"><LuCircleDollarSign className="text-xl" />Salary:  <span className="font-normal"> {salary}</span></h3>

                            <h3 className="flex  gap-2 font-bold"><CiShop className="text-3xl" /><span className="text-nowrap">Job Title:</span>  <span className="font-normal"> {job_title}</span></h3>
                        </div>
                        <div className="border-b-2 mt-2">
                            <h1 className="font-bold mb-4">Contact Information</h1>
                        </div>
                        <div className="mt-2 space-y-3">
                            <h3 className="flex items-center gap-2 font-bold"><FaPhoneFlip />Phone:  <span className="font-normal"> {contact_information.phone}</span></h3>
                            <h3 className="flex items-center gap-2 font-bold"><LuCircleDollarSign className="text-xl" />Email:  <span className="font-normal"> {contact_information.email}</span></h3>
                            <h3 className="flex items-center gap-2 font-bold"><LuCircleDollarSign className="text-xl" />
                                Address:  <span className="font-normal"> {contact_information.address}</span></h3>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button onClick={handleApplyJob} className="btn w-full btn-primary ">Apply Now</button>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;