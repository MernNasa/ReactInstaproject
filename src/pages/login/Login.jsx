import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../customhooks/useAuth";

const Login = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const { password, email } = formdata;
  const navigate = useNavigate();

  const {login} =useAuth()
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const generateToken = (u) => {
    return u.fullname.slice(0, 3) + ".kbjh67gvbvt68b." + u.id;
  };

  const handleForm = async (e) => {
    e.preventDefault();
    // logic to get the all details
    const { data } = await axios.get("http://localhost:3000/users");
    const user = data.find((u) => u.email === email);
    if (!user) {
      toast.error("User Not Register", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    if (user.password !== password) {
      toast.error("Invalid password", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    const token = generateToken(user);
    localStorage.setItem("jwt_token", JSON.stringify(token));
    setFormData({
      email: "",
      password: "",
    });
    toast.success("Login successfully", {
      position: "top-right",
      autoClose: 2000,
    });
    login()
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen  ">
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 relative flex items-center justify-center">
    {/* Morning Haze */}
    <div className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
        `,
      }}
    />
    {/* Your Content/Components */}
     <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Please login to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleForm}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="email"
              value={email}
              onChange={handleInput}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="password"
              value={password}
              onChange={handleInput}
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
  </div>
     
    </div>
  );
};

export default Login;
