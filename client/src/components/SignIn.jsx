import React, { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom'

export default function SignIn() {
  const notify1 = () => toast.success('Sign in successful');
  const notify3 = (msg) => toast.error(msg);
  const initialValue = {
    email: '',
    password: ''
  }

  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialValue);
  const { email, password } = userData;

  const onChangeValue = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }



  const onHandleSubmit = (e) => {
    axios.post('http://localhost:8080/auth/login', userData)
      .then(response => {
        console.log(response.data);
        const { name, email, id } = jwt_decode(response.data.data);
        // window.location.reload();
        localStorage.setItem('token', response.data.data);
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('loggedin', true);
        notify1();
        navigate('/');
        location.reload();

        console.log('login');
      }).catch(error => {
        notify3();
        console.log('not login');
        console.log('error ', error);
      })
  }



  return (



    <div className='flex flex-col w-[100%] h-[90vh]'>
      <div className='flex w-[60%] h-[70%] bg-[#0b0c10] shadow-2xl m-auto  rounded-md'>
        <div className='w-[100%] md:w-[50%] m-auto '>
          <div className='w-[100%] md:w-[90%]'>

            <h1 className='font-bold text-2xl mb-5 text-[#66fcf1]'>Login</h1>
            <p className='text-[#c5c6c7]'>Your Email</p>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => onChangeValue(e)}
              className="bg-[#0b0c10] border mb-5 border-[#66fcf1] text-[#c5c6c7] sm:text-sm rounded-lg focus:ring-[#66fcf1] focus:border-[#66fcf1] block w-full p-2.5"
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
            <button
              type="button"
              className='p-1 rounded-md text-[#0b0c10] font-semibold mt-8 bg-[#66fcf1] w-[100%] m-auto'
              onClick={(e) => onHandleSubmit(e)}
            >
              Sign In
            </button>
            <p className="text-sm font-light mt-3 text-[#c5c6c7]">
              Don’t have an account yet?
              <NavLink to="/signup" className="font-medium text-[#66fcf1] hover:underline">Sign up</NavLink>
            </p>
          </div>
        </div>

      </div>
    </div>

  )
}
