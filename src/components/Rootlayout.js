import react from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import React from 'react'
import Footer from './Footer'
 
 function Rootlayout() {
   return (
     <div>
        <Navbar/>

        <div style={{minHeight:"90vh"}}>
        <Outlet/>
        </div>
        
     
     <div>
     <Footer/>
     </div>
     </div>
   )
 }
 
 export default Rootlayout