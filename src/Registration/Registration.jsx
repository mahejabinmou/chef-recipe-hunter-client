
// /* eslint-disable no-unused-vars */
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL,setPhotoURl] =useState("");
  const [error, setError] = useState("");


  const handleRegistration = (event) => {
    event.preventDefault();
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError("password not valid need 6 char ");
      return;
    }
    console.log(name,email,photoURL,password);
    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div>
      <div className="container text-center">
        
              <p className="text-danger">{error}</p>
              <form action="" className="flex-col items-center">
     <div>
          <input 
          onChange={(e) => setName(e.target.value)} className="name p-3 m-2 border"
          type="text" placeholder="enter your Name" required />
    </div>
    <div>
         <input 
         onChange={(e) => setEmail(e.target.value)} className="email p-3 m-2 border"
         type="email" placeholder="enter your email"/>

   </div>
                <div className="pass-container">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="password p-3 m-2 border"
                    type="text"
                    placeholder="type your password"
                  />
                  <div>
          <input 
          onChange={(e) => setPhotoURl(e.target.value)} className="photoURL p-3 m-2 border"
          type="text" placeholder="enter your photoURL" required />
    </div>
                  {/* <input
                    className="password p-3 m-2"
                    type="password"
                    placeholder="enter your password"
                  /> */}
                  {/* <button>toggle</button> */}
                </div>
                <button
                  onClick={handleRegistration}
                  className="btn btn-info w-75 p-2 mt-3"
                >
                  Register
                </button>
                <p className="p-2">
                  <small className="text-info">
                    already have account? login here..
                  </small>
                </p>
              </form>
            
          
          
        
        {/* <SocialLoginBtn></SocialLoginBtn> */}
      </div>
    </div>
  );
};

export default Register;
