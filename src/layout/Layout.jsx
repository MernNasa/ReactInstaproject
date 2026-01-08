import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  
return(
  <>
    <Navbar/>
    <Outlet/>
  </>
)


}

export default Layout