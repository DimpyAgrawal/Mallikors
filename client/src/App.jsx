import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import FindJobs from './components/FindJobs';
import PostJobs from './components/PostJobs';
import JobResponse from './components/JobResponse';
import UserProfile from './components/UserProfile';
import BusinessIdea from './components/BusinessIdea';
import GoogleMap from './components/GoogleMap1';
import ScrapMapData from './components/ScrapMapData';
import img from './assets/download.png'
import './global.css';

function App() {
  return (
    <div className="relative h-[100vh]">
    {/* Toast Container */}
    <ToastContainer className="absolute inset-0 z-50" />

    <BrowserRouter>
      <div className="flex h-[100%] bg-custom-black">
        <Navbar className="w-[20%] h-[100vh] bg-[#1f2833] text-[#c5c6c7]" />

        <div 
          className="relative flex-1 p-10"
          style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-[#0b0c10] opacity-30"
          />

          {/* Main content */}
          <div className="relative z-10">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/signin' element={<SignIn />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route exact path='/contactus' element={<ContactUs />} />
              <Route exact path='/findjobs' element={<FindJobs />} />
              <Route exact path='/postjobs' element={<PostJobs />} />
              <Route exact path='/jobresponse' element={<JobResponse />} />
              <Route exact path='/userprofile' element={<UserProfile />} />
              <Route exact path='/businessIdea' element={<BusinessIdea />} />
              <Route exact path='/googleMap' element={<GoogleMap />} />
              <Route exact path='/scrapmapdata' element={<ScrapMapData />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </div>
  )
}

export default App
