import React from 'react'
import {useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error} = useRouteError()
  return (
    <div className='text-center m-10 bg-yellow-200'>
        <h4 className='text-8xl  text-rose-500'>404</h4>
        <p className='text-2xl'>
            <i>{error?.statusText || error?.message}</i>
        </p>
        <img src="https://i.ibb.co/L91kW4R/2944923.jpg" alt="" />
        
    </div>
);
};


export default ErrorPage;