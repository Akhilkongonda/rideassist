import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Map.css';


const Mapcointainer = (props) => {
  console.log(props.lat,props.lng)
  
  return (
    <div  style={{ width: '80%', height: '80%' }} className=" mapp">
    <Map  google={props.google} zoom={10}
     style={{ width: '100%', height: '100%' }}
     containerStyle={{width: '800px', height: '600px'}}
      initialCenter={
        {
          lat:props.lat,
          lng:props.lng
        }
        
    }>
      
      <Marker className='text-primary'   lat={props.lat} lng={props.lng}/>
      
    </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBbz5agIqI3MeWg1FoOUQCMsTmN-z5Ktww')
})(Mapcointainer);
