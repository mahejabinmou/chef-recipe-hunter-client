import React from 'react';

const Banner = () => {
    return (
        <div className='md:flex justify-center items-center w-full mt-4'>
        <div className='w-64 px-4'>
        <h4 className='text-4xl'>One Step Closer To Your <br /> <span className='text-indigo-500 text-4xl'>Dream Job</span></h4>
        <p><small>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</small></p>
         <button className='bg-indigo-500 rounded p-2 text-white'>Get Started</button> 
        </div>

        <img src="https://i.ibb.co/Y01GkRQ/P3-OLGJ1-copy-1.png" className='w-96' alt="" />
    
    </div>
    );
};

export default Banner;