
import React, { useState } from "react";

// import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();
  console.log("login page location",location);
  const from=location.state?.from?.pathname || "/";
  // const location = useLocation();
  // const history = useHistory();
  // let navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from,{replace:true});
          // navigate("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div>
      <div className="container text-center">
        
              <form action="" className="flex-col items-center">
                
                <div>
                <input
                
                onChange={(e) => setEmail(e.target.value)}
                className="email p-3 m-2 border "
                type="email"
                placeholder="enter your email"
              />
                </div>
                <div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="password p-3 m-2 border"
                  type="password"
                  placeholder="enter your password"
                />
                </div>
                <button
                  onClick={handleLogin}
                  className="btn btn-info w-75 p-2 mt-3"
                >
                  Login
                </button>
                <p className="p-2">
                  <small className="text-info">
                   
                    <Link to="/registration">are you new? register here..</Link>
                  </small>
                </p>
              </form>
            
          {/* <SocialLoginBtn></SocialLoginBtn> */}
        </div>
      </div>
    
  );
};

export default Login;