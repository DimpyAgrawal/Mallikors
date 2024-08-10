import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

function UserProfile() {
    const location = useLocation();
    const userId = location.state.m;
    console.log(userId);
    const[particularData,setParticularData] = useState(null);
    console.log(particularData);
    const token = localStorage.getItem('token');
    
    
    const getParticularUserData = async()=>{
        try{
            console.log('inside getuser');
            const response = await axios.get(`http://localhost:8080/getDataById/${userId}` , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },     
            })
            console.log(response.data.data);
            setParticularData(response.data.data);
            
        }
        catch(err){
            console.log(err);            
        }
    }
    useEffect(()=>{
        if(userId)
            getParticularUserData();
    },[userId])

    return (
        <div>
          {particularData ? (
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{particularData.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <strong>Email:</strong> {particularData.email}<br/>
                        <strong>Phone:</strong> {particularData.phone}<br/>
                        <strong>Address:</strong> {particularData.address}
                    </p>
                </a>
            ) : (
                <p>Loading...</p>
            )}
    </div>
  )
}

export default UserProfile
