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
      console.log(recipes);
    //   console.log(recipes[0].recipe_id);
    

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
          {/* {
          recipes&&  recipes.map((recepie)=>(
                <p>{recepie.recipe_id}</p>
            ))
          } */}

{
          recipes&&  recipes.map((recepie)=>(
                
         <div key={recepie.recipe_id} className="max-w-sm p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={recepie.recipeImage} alt="" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span className='text-2xl font-bold'>RecipeName:</span> {recepie.recipeName}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>CookingMethod:</span> {recepie.cookingMethod}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Ingredients:</span> {recepie.ingredients}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">< span className='font-bold'>Rating: </span>{recepie.rating}</p>
           <button className='bg-blue-700 rounded-sm '>Favourite</button>
            </div>
            ))
          }
         
            
          
          </div> 
         
         <div>

         </div>


        </div>
    
        );
    };
    
    export default ChefRecepie;