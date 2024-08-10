import axios from 'axios';
import React, { useEffect, useState } from 'react';

function JobResponse() {
  const [userData, setUserData] = useState([]);
  const userId = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getResponse/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      setUserData(response.data);
    } catch (err) {
      console.log('error in job response page', err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div 
    style={{ overflowY: 'auto', scrollbarWidth: 'none' }} /* Firefox */
    className="flex-1 p-6 sm:p-10 flex flex-col m-auto mt-10 h-[80vh] overflow-y-auto scrollbar-hidden"
  >
    {userData.length === 0 ? (
      <p className="text-[#66fcf1] font-semibold text-xl">Loading...</p>
    ) : (
      <div className="flex flex-wrap gap-6">
        {userData.map((user, idx) => (
          <a  
            key={idx}
            href="#"
            className="block w-full sm:w-[30%] lg:w-[30%] mb-6 p-4 sm:p-6 bg-[#0b0c10] border border-[#66fcf1] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-[#45a29e] hover:text-white"
          >
            <strong className="text-[#66fcf1]">Foundation Name:</strong> 
            <span className='text-custom-gray'> {user.foundationName} </span>
            <br />
            <strong className="text-[#66fcf1]">Role:</strong> 
            <span className='text-custom-gray'>{user.role}</span>
            <br/><br/>
            <h3 className='font-semibold text-[#66fcf1]'>Applied Candidate</h3>
            <p className="font-normal text-gray-300">
              <strong className="text-[#66fcf1]">Name:</strong> {user.name}<br/>
              <strong className="text-[#66fcf1]">Email:</strong> {user.email}<br/>
              <strong className="text-[#66fcf1]">Phone:</strong> {user.phone}<br/>
              <strong className="text-[#66fcf1]">Address:</strong> {user.address}<br/>
            </p>
          </a>
        ))}
      </div>
    )}
  </div>
  
  
  

  

  );
}

export default JobResponse;
