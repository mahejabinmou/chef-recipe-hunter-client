// import { response } from 'express';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Chef = () => {
    const [chefsData,setChefsData]=useState([]);
    useEffect(()=>{
        fetch("https://food-server-mahejabinmou.vercel.app/allData")
    .then(res=>res.json())
    .then(data=>setChefsData(data))
    }
    ,[])
     console.log(chefsData);
    return (
    //     <div className="pt-24 pb-24">
    //         <div className='text-center mb-16'>
    //         <h2 className='font-bold text-4xl'>The chefs</h2>
    //     </div>
    //     <div>
    //         {
    //             chefsData.map((chef)=>(
                  
                    
                    
    //             ))
    //         }
    //     </div>
      
       
    // </div>
    <div>
      <h1>Our Chefs</h1>
      <div className="chefs grid grid-cols-3 mb-8">
        {
        chefsData[0]?.chefs.map((chef) => (
        //   <div key={chef?.id} className="chef-card">
        //     <img src={chef?.image} alt="" />
        //     <h2>{chef?.name}</h2>
        //     <p>{chef?.experience}</p>
        //     <p>{chef?.recipes}</p>
        //     <p>{chef?.likes}</p>
        //     <Link to={`/chefRecepie/${chef?.id}`}>
        //       <button>View Recepie</button>
        //     </Link>
        //   </div>
        
<div key={chef?.id} class="max-w-sm p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <img src={chef?.image} alt="" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><h2>{chef?.name}</h2></h5>
    
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Eperience: {chef?.experience}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of recepies: {chef?.recipes}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Likes: {chef?.likes}</p>
    
    <Link to={`/chefRecepie/${chef?.id}`}>
               <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Recepie</button>
            </Link>
    
    {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a> */}
</div>


        ))}
      </div>
    </div>

    );
};

export default Chef;