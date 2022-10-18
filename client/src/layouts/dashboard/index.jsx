import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/dashboard/Navbar'
import Sidebar from '../../components/dashboard/Sidebar'

export default function Index() {
  return (
    <div className="relative overflow-hidden ">
  
  
    <Navbar />

    <aside className="fixed bg-white shadow-md max-h-screen w-30">
      <Sidebar />
    </aside>
  
    <main className="ml-48 pt-6 max-h-screen overflow-auto">
      <div className="px-6 py-8">
        <div className="w-full mx-auto">
            
  
        
            <Outlet/>

        </div>
      </div>
    </main>
  </div>
  )
}
