import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoAddOutline, IoLogOutOutline } from "react-icons/io5";
import { LuImages } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { useAuth } from "../../customhooks/useAuth";
const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("jwt_token"));
  const id = token.split(".")[2];

  const navigate=useNavigate()
  const {logout,setActiveUser,activeUser}=useAuth()
  const fdata = async () => {
    const { data } = await axios.get(`http://localhost:3000/users/${id}`);
    console.log(data);
    setActiveUser(data)
  };

  useEffect(() => {
    fdata();
  }, []);


  const handlelogout=()=>{
    localStorage.removeItem("jwt_token")
    logout()
    navigate("/")
  }
  return (
    <div className="h-[89vh] flex bg-gray-100">
      <aside className="w-[18%] h-full bg-white shadow-lg dark:bg-gray-600 dark:text-white">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-indigo-600"><Link to="/dashboard">{activeUser.fullname} Panel</Link></h2>
        </div>
        <nav className="p-4 space-y-2">
          <Link to={`/dashboard/profile/${id}`} className="w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 font-medium flex items-center gap-3">
            <CiUser /> My Profile
          </Link>
          <Link to={`/dashboard/updateprofile/${activeUser.id}`} className="w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 font-medium flex items-center gap-3">
            <LiaUserEditSolid /> Edit Profile
          </Link>

          <div className="pt-4 border-t">
            <p className="px-4 text-xs uppercase text-gray-400 mb-2">Posts</p>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 font-medium flex items-center gap-3">
              <IoAddOutline /> Create Post
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 font-medium flex items-center gap-3">
              <LuImages /> My Posts
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 font-medium flex items-center gap-3">
              <MdOutlineExplore /> Explore Posts
            </button>
          </div>

          <div className="pt-4 border-t">
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 font-medium flex items-center gap-3">
              <SlSettings /> Settings
            </button>
            <button onClick={handlelogout} className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-50 text-red-600 font-medium flex items-center gap-3">
              <IoLogOutOutline /> Logout
            </button>
          </div>
        </nav>
      </aside>
        <div className="w-[82%] h-full overflow-y-scroll no-scrollbar dark:bg-slate-800">
            <Outlet/>
        </div>
    </div>
  );
};

export default Dashboard;
