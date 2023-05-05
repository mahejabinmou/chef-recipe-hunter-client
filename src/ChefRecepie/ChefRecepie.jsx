// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecepie = () => {
    const allData=useLoaderData();
    const {id} = useParams();
    // console.log(id);
    // console.log(allData);

    const [viewDetails,setViewDetails]=useState({});
    const [favourite,setFavourite]=useState(false);

    useEffect(()=>{
        const singleRecepie=allData.find((data) => data.id == id);
        setViewDetails(singleRecepie);
    },[]);
    //   console.log(viewDetails);


      const recipes=viewDetails.recipes;
      console.log(recipes);
    //   console.log(recipes[0].recipe_id);
    
    const handleAddNewTodo=()=>{
        toast("my favourite");
         setFavourite(!false);
    }

     return (
        <div>

            <div className='text-center'>
                <img src={viewDetails?.image} className='w-[300px] h-[300px] mx-auto p-8' alt="" />
                <h2 className='text-4xl font-bold p-2'>{viewDetails?.name}</h2>
                <p><span className='font-bold'>Bio:</span> {viewDetails?.bio}</p>
                <p><span className='font-bold'>Number of likes:</span> {viewDetails?.likes}</p>
                <p><span className='font-bold'>NumberOfrecipes:</span>{viewDetails?.numberOfrecipes}</p>
                <p><span className='font-bold'>Experience:</span>{viewDetails?.experience}</p>
                
                
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
            
            <img src={recepie.recipeImage} className='w-[300px] h-[300px] mx-auto' alt="" />
            <div className='text-center'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span className='text-2xl font-bold'>RecipeName:</span> {recepie.recipeName}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>CookingMethod:</span> {recepie.cookingMethod}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Ingredients:</span> {recepie.ingredients}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">< span className='font-bold'>Rating: </span>{recepie.rating}</p>
           {favourite?<button disabled onClick={handleAddNewTodo} className='bg-blue-700 rounded-sm '>Favourite</button>
           :<button  onClick={handleAddNewTodo} className='bg-blue-700 rounded-sm '>Favourite</button>
        }      <ToastContainer/>
            </div>
            
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