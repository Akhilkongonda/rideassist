import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <div>
   
         <div  className='navbar navv'>
        
       
        <ul className='nav m-auto p-0'>
            <li className='nav-item'>
                <Link className='nav-link' to ="/">
                    <button className='btn  btn1 '>Driver Register</button>
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to ="/Userregister">
                <button className='btn btn1'>User Register</button>
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to ="/User">
                <button className='btn  btn1'>User</button>
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to ="/Driver">
                <button className='btn btn1 '>Driver</button>
                </Link>
            </li>
            <li>
               
            </li>
           
            </ul>
            
    </div>
    
    </div>

  )
}

export default Navbar