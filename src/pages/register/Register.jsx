import axios from "axios";
import React, { useState } from "react";
import { BsRocketFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [formdata, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    conformpassword: "",
  });
  const navigate = useNavigate();
  const { fullname, email, password, conformpassword } = formdata;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handelForm = async (e) => {
    e.preventDefault();

    if (password !== conformpassword) {
      toast.error("Password is not matching", { position: "top-center" });
      return;
    }

    const finaldata = {
      fullname,
      email,
      password,
    };
    // logic to register the data
    try {
      const result = await axios.post("http://localhost:3000/users", finaldata);
      // console.log(result)
      toast.success("Registeration success", { position: "top-right" });
      setFormData({
        fullname: "",
        email: "",
        password: "",
        conformpassword: "",
      });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
  <div className="w-full h-[89vh] flex items-center justify-center">
     <div className="w-[400px] ">
    {/* Header */}
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
        <p className="text-gray-500 mt-2">Sign up to get started</p>
      </div>

      {/* Form */}
      <form className="space-y-5" onSubmit={handelForm}>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            onChange={handleInput}
            name="fullname"
            value={fullname}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInput}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
            placeholder="Create a password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="conformpassword"
            value={conformpassword}
            onChange={handleInput}
            placeholder="Confirm your password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Button */}
        <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
          Register
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-600 mt-8">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 font-medium hover:underline"
        >
          Login
        </Link>
      </p>
   </div>
  </div>
  );
};

export default Register;






//  <div className="w-full  h-[89vh] flex  bg-gradient-to-br from-indigo-600 to-purple-600">
//       <div className=" w-[30%] h-full bg-slate-100 flex flex-col items-center justify-center">
//         <div className=" items-center gap-3 mb-6">
//           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center [perspective:1000px]">
//             <BsRocketFill fill="blue" className="w-24 h-24 animate-myRocket [transform-style:preserve-3d] transform-gpu"/>
//           </div>
//           <h2 className="text-3xl font-bold">Welcome</h2>
//         </div>
//         <p className="text-sm opacity-90 text-center max-w-xs">
//           You are 30 seconds away from earning your own money.
//         </p>
//       </div>
//       <div className="w-[70%] h-full bg-slate-400">2</div>
//     </div>