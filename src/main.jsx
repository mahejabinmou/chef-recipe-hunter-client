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




const router = createBrowserRouter([
  {
    path:"/",
   element:<Main></Main>,
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
      element:<ChefRecepie></ChefRecepie>
    }
    

  ]
  },
  
      

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);


