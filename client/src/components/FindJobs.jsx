import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FindJobs() {
  const [userData, setUserData] = useState([]);
  const token = localStorage.getItem('token');
  const notify = () => toast.success("Job post successfully");
  const notify3 = () => toast.success("Applied successfully");
  const [troggle, setTroggle] = useState(false);
  const userId = localStorage.getItem('id');

  const getUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getAllJobData', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      setUserData(response.data);
    } catch (err) {
      console.log("error in find job page route " + err);
    }
  }

  const handleClick = async (ownerId, foundationName, role) => {
    try {
      console.log(ownerId, foundationName, role);
      console.log('inside add response');
      const response = await axios.put(`http://localhost:8080/addResponse`, { userId, ownerId, foundationName, role }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      notify3();
      console.log(response.data);
    } catch (err) {
      console.log("error in find job page and route of addresponse " + err);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div 
    style={{ overflowY: 'auto', scrollbarWidth: 'none' }}   /* Firefox */
    className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hidden"
  >
    {userData.map((job, index) => {
      const ownerId = job.postedBy?._id;
      if (ownerId === userId) {
        return <div key={index}></div>;
      }
      return (
        <div 
          key={index} 
          className="w-full p-6 bg-[#0b0c10] border border-[#45a29e] rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-[#0b0c10] dark:border-[#45a29e]"
        >
          <h5 className="mb-2 text-3xl font-bold text-[#66fcf1]">{job.ownerName}</h5>
          <p className="mb-3 text-lg text-[#c5c6c7]">Role: {job.jobTitle}</p>
          <p className="mb-3 text-lg text-[#c5c6c7]">Salary: {job.salary}</p>
          <p className="mb-3 text-lg text-[#c5c6c7]">Duration: {job.duration}</p>
          <p className="mb-3 text-lg text-[#c5c6c7]">Location: {job.location}</p>
          <button 
            type="button" 
            className="w-full rounded-md bg-[#66fcf1] py-3 px-8 text-center text-base font-semibold text-[#0b0c10] outline-none hover:bg-[#45a29e] transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => handleClick(ownerId, job.ownerName, job.jobTitle)}
          >
            Apply
          </button>
        </div>
      );
    })}
  </div>
  
  
  );
}

export default FindJobs;
