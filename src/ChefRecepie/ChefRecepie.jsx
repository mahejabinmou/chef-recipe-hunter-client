// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecepie = () => {
    const allData=useLoaderData();
    const {id} = useParams();
    // console.log(id);
    // console.log(allData);

    const [viewDetails,setViewDetails]=useState({});

    useEffect(()=>{
        const singleRecepie=allData.find((data) => data.id == id);
        setViewDetails(singleRecepie);
    },[]);
    //   console.log(viewDetails);


    const recipes=viewDetails.recipes;
    // console.log(recipes[0].recipe_id);
    

     return (
        <div>

            <div className='text-center'>
                <img src={viewDetails?.image} alt="" />
               
                <h2 className='text-4xl font-bold'>{viewDetails?.name}</h2>
                <p>Bio: {viewDetails?.bio}</p>
                <p>Number of likes: {viewDetails?.likes}</p>
                <p>NumberOfrecipes: {viewDetails?.numberOfrecipes}</p>
                <p>Experience:{viewDetails?.experience}</p>
                
                
            </div>


          <h1 className='font-bold text-4xl text-center my-8'>Recepies</h1>
          <div className="chefs grid grid-cols-3 mb-8">
          {/* <p>Recepie Name:{recipes[0].recipeName}</p> */}

            
          
          </div> 
         
         <div>

         </div>


        </div>
    
        );
    };
    
    export default ChefRecepie;