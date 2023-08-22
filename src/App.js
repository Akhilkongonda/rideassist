import React from 'react'
import  {map }from './components/Map'
// import CustomMap from './components/map'
// import Geolocation from './components/Geolocation'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import User from './components/User'
import Driver from './components/Driver'
import Rootlayout from './components/Rootlayout'
import Driverregister from './components/Driverregister'
import Userregister from './components/Userregister'
import Aboutus from './components/Aboutus'
import Mapcointainer from './components/Map'
import Geolocation from './components/Geolocation'







function App() {

const router=createBrowserRouter([
  {
    path:"/",
    element:<Rootlayout/>,
    children:[
      {
        path:'/',
        element:<Driverregister/>
      },
      {
        path:'/Userregister',
        element:<Userregister/>
      },
      {
        path:'/Driver',
        element:<Driver/>,
        children:[
          
            {
              path:'/Driver/Geolocation',
              element:<Geolocation/>
            }
          
        ]
        
      
      },
      {
        path:'/User',
        element:<User/>,
        children:[
          {
            path:'/User/Mapcointainer',
            element:<Mapcointainer/>
          }
        ]
      }
     
    ]
  }
])














  return (
    
    <div className='App container'>
     {/* <MapContainer></MapContainer> 
     <CustomMap></CustomMap> 
     <Geolocation></Geolocation>  */}
      <RouterProvider router={router}/>
      <Outlet/>
    </div>
  );
}

export default App;

