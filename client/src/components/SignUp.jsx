import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {

  const notify1 = () => toast.success("SignUp successfully");
  const notify2 = (msg) => toast.info(msg);
  const initialValue = {
    name: '',
    email: '',
    password: '',
    phone:'',
    address:'',


  }

  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialValue);
  const { name, email, password,phone,address} = userData;

  const onChangeValue = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
 
  }
  


  const onHandleSubmit = (e) => {
    
    e.preventDefault();
    // console.log(userData);
    axios.post('http://localhost:8080/auth/register', userData)
      .then(response => {
        console.log(response.data);
      }).catch(error => {
        notify2();
        console.log("error" + " " + error);
      })
    notify1();
    navigate('/signin');
  }
  

  return (



    <div className='flex flex-col w-[75vw] ml-[6rem] h-[90vh]'>
    <div className='flex w-[80%] h-[90%] bg-[#0b0c10] shadow-2xl m-auto p-8 rounded-md'>
      <div className='w-[100%] md:w-[50%] m-auto mt-0'>
        <div className='w-[100%] md:w-[90%]'>
  
          <h1 className='font-bold text-3xl mb-8 text-[#66fcf1]'>Create an Account</h1>
  
          <p className='text-[#c5c6c7]'>Your Name</p>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={(e) => onChangeValue(e)} 
            className="bg-[#0b0c10] border mb-3 border-[#66fcf1] text-[#c5c6c7] sm:text-sm rounded-lg focus:ring-[#66fcf1] focus:border-[#66fcf1] block w-full p-2.5" 
            placeholder="name" 
            required 
          />
          <p className='text-[#c5c6c7]'>Your Email</p>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={email} 
            onChange={(e) => onChangeValue(e)} 
            className="bg-[#0b0c10] border mb-3 border-[#66fcf1] text-[#c5c6c7] sm:text-sm rounded-lg focus:ring-[#66fcf1] focus:border-[#66fcf1] block w-full p-2.5" 
            placeholder="name@company.com" 
            required 
          />
          <p className='text-[#c5c6c7]'>Password</p>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={password} 
            placeholder="••••••••" 
            onChange={(e) => onChangeValue(e)} 
            className="bg-[#0b0c10] border border-[#66fcf1] text-[#c5c6c7] sm:text-sm rounded-lg focus:ring-[#66fcf1] focus:border-[#66fcf1] block w-full p-2.5" 
            required 
          />
          <p className='text-[#c5c6c7] mt-4'>Phone Number</p>
          <input 
            type="text" 
            name="phone" 
            id="phone" 
            value={phone} 
            onChange={(e) => onChangeValue(e)} 
            className="bg-[#0b0c10] border mb-3 border-[#66fcf1] text-[#c5c6c7] sm:text-sm rounded-lg focus:ring-[#66fcf1] focus:border-[#66fcf1] block w-full p-2.5" 
            placeholder="8976XXXXX" 
            required 
          />
          <p className='text-[#c5c6c7]'>Address</p>
          <input 
            type="text" 
            name="address" 
            id="address" 
            value={address} 
            onChange={(e) => onChangeValue(e)} 
            className="bg-[#0b0c10] border mb-3 border-[#66fcf1] text-[#c5c6c7] sm:text-sm rounded-lg focus:ring-[#66fcf1] focus:border-[#66fcf1] block w-full p-2.5" 
            placeholder="" 
            required 
          />
          
          <button 
            type="button" 
            className='p-1 rounded-md text-[#0b0c10] font-semibold mt-8 bg-[#66fcf1] w-[100%] m-auto' 
            onClick={(e) => onHandleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
     
    </div>
  </div>
  

  )
}
