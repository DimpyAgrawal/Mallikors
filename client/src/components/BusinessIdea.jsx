import React, { useState,useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

function BusinessIdea() {

    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleButtonClick = () => {
        const encodedQuery = encodeURIComponent(query);
        window.location.href = `https://www.google.com/maps/search/${encodedQuery}`;
    };

    
        useEffect(() => {
          AOS.init({ duration: 2000 });
      
        }, []);

    return (
        <div className='flex flex-col items-center justify-center min-h-[90vh] p-6 bg-[#0b0c10]'>
        <h1 className="text-4xl font-bold mb-6 text-[#66fcf1] text-center">
            Check Scalability of Your Business Idea
        </h1>
        <div className='flex flex-col items-center gap-4 w-full max-w-md'>
            <input 
                type="text" 
                value={query} 
                onChange={handleInputChange} 
                placeholder="Enter Business Name and Location" 
                className="w-full p-3 border border-[#c5c6c7] rounded-lg bg-[#1f2833] text-[#c5c6c7] placeholder-[#c5c6c7] focus:outline-none focus:ring-2 focus:ring-[#66fcf1] transition duration-300"
            />
            <button 
                onClick={handleButtonClick} 
                className="w-full rounded-md bg-[#66fcf1] py-3 px-8 text-center text-base font-semibold text-[#0b0c10] outline-none hover:bg-[#45a29e] transition-all duration-300 shadow-md hover:shadow-lg"
            >
                Search
            </button>
        </div>
    </div>
    

    
    );
}

export default BusinessIdea;
