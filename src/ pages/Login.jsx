import React from "react";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { UserAuth } from "../context/AuthContext";



const Login = () => {
  const { user, logIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate =useNavigate();
  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
     await logIn(email, password);
     console.log("Complete")
     navigate('/');
    } catch (error) {
      setError(error.message)
      console.log("message" + error.message);
    }
  };

  return (
    <>
     
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/462d8ff3-51d2-455f-92bc-1ef044c21528/LK-en-20220926-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className="p-3 bg-red-400 my-2">{error}</p>: null}
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded "
                  type="email"
                  placeholder="Email"
                  onChange={(e) => (
                    setEmail(e.target.value)
                  )}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded "
                  type="password"
                  placeholder="Password"
                  onChange={(e) => (
                    setPassword(e.target.value)
                  )}
               
                />
                <button onClick={handleSubmit} className="bg-red-600 py-3 my-6  rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className=" text-gray-600">
                    New to Netflix?
                  </span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
