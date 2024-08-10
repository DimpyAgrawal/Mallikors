import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import{ toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PostJobs() {
    const navigate = useNavigate();
    const notify = () => toast.success("Job post successfully");
    const notify3 = (msg)=>toast.error(msg);
    const initialValue = {
        ownerName:'',
        jobTitle:'',
        salary:'',
        duration:'',
        location:''
    }
    const[userData,setUserData] = useState(initialValue);
    const{ownerName,jobTitle,salary,duration,location} = userData;
    const token = localStorage.getItem('token');
    const onChangeValue=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value});
    }
    const onHandleSubmit = async(e)=>{
        console.log(ownerName +" "+ jobTitle+" "+salary+" "+ duration+" "+location);
        if(!ownerName || !location || !duration|| !salary||!jobTitle) notify3();
        // console.log(userData);
        e.preventDefault();
        try{
            console.log('inside handlesubmit');
            const response = await axios.post('http://localhost:8080/createJob', userData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            navigate('/');
            notify();
            console.log(response.data);

        }catch(err){
            notify3(err);
            console.log('error in postjobs router',err);
        }

    }
    return (
        <div class="flex h-[90vh] items-center justify-center p-12">
        <div class="mx-auto  w-full max-w-[35vw] bg-[#0b0c10] p-6 rounded-lg shadow-lg shadow-[#45a29e] transition-transform duration-500 hover:scale-105">
      
          <div class="mb-5">
            <label for="name" class="mb-3 block text-base font-medium text-[#c5c6c7]">
              Name
            </label>
            <input type="text" value={ownerName} onChange={(e)=> onChangeValue(e)} name="ownerName" id="name" placeholder="Full Name"
              class="w-full rounded-md border border-[#66fcf1] bg-[#1b1d1f] py-3 px-6 text-base font-medium text-[#c5c6c7] outline-none focus:border-[#45a29e] focus:shadow-outline transition-shadow duration-300" />
          </div>
      
          <div class="mb-5">
            <label for="jobTitle" class="mb-3 block text-base font-medium text-[#c5c6c7]">
              Job Title
            </label>
            <input type="text" value={jobTitle} onChange={(e)=> onChangeValue(e)} name="jobTitle" id="jobTitle" placeholder="Job Title"
              class="w-full rounded-md border border-[#66fcf1] bg-[#1b1d1f] py-3 px-6 text-base font-medium text-[#c5c6c7] outline-none focus:border-[#45a29e] focus:shadow-outline transition-shadow duration-300" />
          </div>
      
          <div class="mb-5">
            <label for="salary" class="mb-3 block text-base font-medium text-[#c5c6c7]">
              Salary
            </label>
            <input type="text" value={salary} onChange={(e)=> onChangeValue(e)} name="salary" id="salary" placeholder="Salary"
              class="w-full rounded-md border border-[#66fcf1] bg-[#1b1d1f] py-3 px-6 text-base font-medium text-[#c5c6c7] outline-none focus:border-[#45a29e] focus:shadow-outline transition-shadow duration-300" />
          </div>
      
          <div class="mb-5">
            <label for="duration" class="mb-3 block text-base font-medium text-[#c5c6c7]">
              Duration
            </label>
            <input type="text" value={duration} onChange={(e)=> onChangeValue(e)} name="duration" id="duration" placeholder="Duration"
              class="w-full rounded-md border border-[#66fcf1] bg-[#1b1d1f] py-3 px-6 text-base font-medium text-[#c5c6c7] outline-none focus:border-[#45a29e] focus:shadow-outline transition-shadow duration-300" />
          </div>
      
          <div class="mb-5">
            <label for="location" class="mb-3 block text-base font-medium text-[#c5c6c7]">
              Location
            </label>
            <input type="text" value={location} onChange={(e)=> onChangeValue(e)} name="location" id="location" placeholder="Location"
              class="w-full rounded-md border border-[#66fcf1] bg-[#1b1d1f] py-3 px-6 text-base font-medium text-[#c5c6c7] outline-none focus:border-[#45a29e] focus:shadow-outline transition-shadow duration-300" />
          </div>
      
          <div>
            <button onClick={(e)=>onHandleSubmit(e)}
              class="w-full rounded-md bg-[#66fcf1] py-3 px-8 text-center text-base font-semibold text-[#0b0c10] outline-none hover:bg-[#45a29e] transition-all duration-300 shadow-md hover:shadow-lg">
              Post
            </button>
          </div>
          
        </div>
      </div>
      
    )
}

export default PostJobs
