// import { response } from 'express';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chef = () => {
    const [chefsData, setChefsData] = useState([]);
    useEffect(() => {
        fetch("https://food-server-mahejabinmou.vercel.app/allData")
            .then(res => res.json())
            .then(data => setChefsData(data))
    }
        , [])
    //  console.log(chefsData);
    // const { experience, id, name, numberOfrecipes,likes, image } = chefsData;
    return (
        <div>
            <h1 className='font-bold text-4xl text-center my-8'>The Awesome Chefs</h1>
            <div className="chefs grid grid-cols-3 mb-8">
                {
                    chefsData.map((chef) => (
                        <div key={chef.id} className="max-w-sm p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            
                            <LazyLoad height={400} width={350}>
                            <img src={chef.image} alt="" />
    </LazyLoad>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{chef.name}</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Eperience: {chef.experience}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of recepies: {chef.numberOfrecipes}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Likes: {chef.likes}</p>

                            <Link to={`/chefRecepie/${chef.id}`}>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Recepie</button>
                            </Link>
                           

                        </div>


                    ))}
            </div>
        </div>

    );
};

export default Chef;