import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './Pages/AdminDashboard'
import AdminProfile from './Pages/AdminProfile'
import AdminSetting from './Pages/AdminSetting'
import Admin from './Pages/Admin'

const Adminroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/Dashboard' element={<AdminDashboard />}/>
            <Route path='/profile' element={<AdminProfile />}/>
            <Route path='/profile/settings' element={<AdminSetting />}/>
            <Route path='/' element={<Admin />}/>


           
        </Routes>
    </div>
  )
}

export default Adminroutes