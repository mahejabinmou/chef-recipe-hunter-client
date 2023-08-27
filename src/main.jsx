import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx'
import Home from './Home/Home.jsx'
import Login from './Login/Login';
import Registration from './Registration/Registration';
import Blog from './Blog/Blog';
import AuthProvider from './provider/AuthProvider';
import ChefRecepie from './ChefRecepie/ChefRecepie';
import ErrorPage from './ErrorPage/ErroePage';
import PrivateRoute from './PrivateRoute/PrivateRoute';




const router = createBrowserRouter([
  {
    path:"/",
   element:<Main></Main>,
   errorElement:<ErrorPage></ErrorPage>,

   children:[
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/login",
      element:<Login></Login>,
    },
    {
      path:"/registration",
      element:<Registration></Registration>
    },
    {
      path:"/blog",
      element:<Blog></Blog>
    },
    {
      path:"/chefRecepie/:id",
      element:<PrivateRoute><ChefRecepie></ChefRecepie></PrivateRoute>,
      loader:({params})=>
      fetch(`https://food-server-mahejabinmou.vercel.app/allData`)
      
    }
    

  ]
  },
  
      

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <div className='max-w-screen-md p-6 mx-auto'>
          <RouterProvider router={router} />
        </div>
   </AuthProvider>
  </React.StrictMode>
);


