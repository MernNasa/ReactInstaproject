import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../customhooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
    const {logout}=useAuth()
    const [currentUser,setCurrentUser]=useState("")
    const{id}=useParams()
    const navigate=useNavigate()
    const fdata=async () => {
      const {data}= await axios.get(`http://localhost:3000/users/${id}`)
      setCurrentUser(data)
    }

    useEffect(()=>{
      fdata()
    },[])

    const handleDelete=async(userId)=>{
       try {
        const {data}= await axios.delete(`http://localhost:3000/users/${userId}`)
        toast.success("Account Deleted successfully",{position:"top-center"})
        localStorage.removeItem("jwt_token")
        logout()
        navigate("/")
       } catch (error) {
        console.log(error)
       }
    }
  return (
   <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      
      {/* Profile Card */}
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-6 text-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* User Info */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          {currentUser.fullname}
        </h2>

        <p className="text-gray-500 mt-1">
          {currentUser.email}
        </p>

        <span className="inline-block mt-3 px-4 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
          Frontend Developer
        </span>

        {/* Bio */}
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          Passionate React developer focused on building beautiful and
          performant web applications.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition">
            view Profile Details
          </button>
          <button onClick={()=>handleDelete(currentUser.id)} className="flex-1 border border-gray-300 hover:bg-red-300 py-2 rounded-xl transition">
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile