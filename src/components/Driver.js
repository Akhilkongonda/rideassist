import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Driver.css';

function Driver() {
  const [coords, setCoords] = useState(null);
  const [busNumber, setBusNumber] = useState('');

  // Send the driver's location to the server and update the state with the new location
  const sendLocation = async () => {
    // Get the current location of the driver
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);

      // Send the location to the server
      axios.post('http://localhost:3900/location-api/insert-location', {
        number: busNumber,
        lat: latitude,
        lng: longitude,
      })
      .then(response => console.log(response))
      .catch(error => console.error(error));

      // Update the state with the new location
      setCoords({ lat: latitude, lng: longitude });
    }, (error) => {
      console.error(error);
    });
  };

  // Delete the driver's location from the database
  const deleteLocation = async () => {
    try {
      const response = await axios.delete(`http://localhost:3900/location-api/delete-location/${busNumber}`);
      console.log(response);
      setCoords(null); // Set the state back to null to remove the marker from the map
    } catch (error) {
      console.log("Error while deleting location:", error);
    }
  };

  return (
    <div className='bg3'>
      <div className='p-3'>
        <button className='d-flex m-auto p-2'>START JOURNEY...!</button>
      </div>      
     
      <div>
        <form className='mt-5'>
          <input
            className='d-flex m-auto'
            type='text'
            value={busNumber}
            onChange={(event) => setBusNumber(event.target.value)}
            placeholder="BUS NUMBER"
          />
        </form>

        
      
        <ul className='nav '>
          <li className='nav-item'>
            <button
              className='btn  btnset btn-primary mt-4'
              onClick={sendLocation}
              disabled={!busNumber}
            >
              Provide your location
            </button>

            <button
              className='btn  btnset btn-primary mt-4'
              onClick={deleteLocation}
              disabled={!busNumber || !coords}
            >
              Stop sharing location
            </button>

          </li>
        </ul>
      </div>
      
      <Outlet />
    </div>
  );
}

export default Driver;
