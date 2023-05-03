// import { response } from 'express';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Chef = () => {
//     const [chefsData,setChefsData]=useState([]);
//     fetch("http://localhost:4600/allData")
//     .then((response)=>response.json())
//     .then(data=>setChefsData(data))
//     console.log(data);
//     return (
//         <div>
//       <h1>Our Chefs</h1>
//        <div className="chefs"> 
//         {
//         fullData[0]?.chefs?.map((chef) => (
//           <div key={chef?.id} className="chef-card">
//          <h2>{chef?.name}</h2>
//              <p>{chef?.experience}</p>
//             {/* <ul>
//               {chef?.items?.map((item) => (
//                 <li key={item?.id}>
//                   {item?.name} - ${item?.price}
//                 </li>
//               ))}
//             </ul> */}
//             <p> ${chef?.recipes}</p>
//              <p>Duration: {chef?.duration}</p>
//              <Link to={`/chef/${chef?.id}`}>
//                <button>View Recepie Button</button>
//             </Link>
//            </div>
//         ))
//         }
//       </div>
//     </div>


//     // <div>
//     //     <h1>Our Chefs</h1>
//     //    <div className="chefs"></div>
//     //    {
//     //     fullData[0]?.chefs?.map((chef) => ())}
       
       

//     // </div>
//     );
// };

// export default Chef;
import React from 'react';

const Chef = () => {
    return (
        <div>
            <h2>the cheif</h2>
        </div>
    );
};

export default Chef;