import React, { useState } from 'react';
import axios from 'axios';
import MapContainer from './Map';

function User() {
  const [busNumber, setBusNumber] = useState('');
  const [locationData, setLocationData] = useState(null);

  const handleFormSubmit = async (event) => { 
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3900/location-api/get-location-by-number/${busNumber}`);

      console.log(response);

      setLocationData(response.data.payload.locationData);
    } catch (error) {
      console.log("Error getting location data:", error);
    }
  };

  return (
    <div>
      <form  onSubmit={handleFormSubmit}>
        <input type="text" value={busNumber} onChange={(event) => setBusNumber(event.target.value)} />
        <button  type="submit">Get Location</button>
      </form>
      {locationData && typeof locationData.lat === 'number' && typeof locationData.lng === 'number' && (
  <MapContainer lat={locationData.lat} lng={locationData.lng} />
)}

    </div>
  );
}

export default User;
