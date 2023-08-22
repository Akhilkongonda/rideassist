// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import Mapcointainer  from './Map'


// function Geolocation() {
//       console.log("infunction")
 
  
//     const [lat,setlat]=useState()
//     const [log,setlng]=useState() 


//     useEffect(()=>{
//         navigator.geolocation.watchPosition((position)=>{
//           //console.log(position);
        
//           setlat(position.coords.latitude);
//           setlng(position.coords.longitude);
//         console.log(position.coords.latitude,position.coords.longitude)
//               // send coordinates to the API
//       fetch('http://localhost:3900/location-api/insert-location', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ lat: position.coords.latitude, lng: position.coords.longitude })
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
         
//     ,(err)=>{
//       console.log(err)
//     },
//     {
//       enableHighAccuracy: true,
//       timeout: 20000,
//       maximumAge: 60000
//   })
//     },[])

//   return (
//     <div>
//    {/* <MapContainer lat={lat} log={log}/> */}
//     </div>
//   )
// }

// export default Geolocation;
