const exp=require("express")
const Locationapp=exp.Router()

const expressAsyncHandler=require("express-async-handler")// error handling without using try catch 








// sample data 
let location=[];

//get users

Locationapp.get('/get-location',expressAsyncHandler(
    async(request,response)=>{
        //get locationobj from database to insert in to the collections
        const locationobj=request.app.get('locationobj');
        //get users from db;
        let locationslist=await locationobj.find().toArray()
    
        response.status(200).send({meassge:"all locations",payload:locationslist})
    
        response.send({err:err.message})
    }
))

//get locations by using bus number

Locationapp.get('/get-location-by-number/:number', expressAsyncHandler(async (request, response) => {
    const locationobj = request.app.get('locationobj');
    const busNumber = request.params.number;
    //console.log(busNumber)
    const locationData = await locationobj.findOne({ number: busNumber });
    
    response.send({ message: 'Location data found', payload: { locationData } });
    // console.log(locationData)
  }));
  







// update location

Locationapp.put('/put-location',async(request,response)=>{




     //get locationobj from database to insert in to the collections
     const locationobj=request.app.get('locationobj');
   


    //get modified location from geo location
    let modifiedlocation=request.body;
   //modify user in db
   let dbres=await locationobj.updateOne({number:modifiedlocation.number})

   response.status(200).send("location updated")


})


//body parser middleware
Locationapp.use(exp.json())




// create  post locations from geolocation
Locationapp.post('/insert-location', async (request, response) => {
  try {
    const locationobj = request.app.get('locationobj');
    
    const { number, lat, lng } = request.body; // extract bus number, latitude, and longitude
    
    // update the existing document or insert a new one if it doesn't exist
    await locationobj.updateOne(
      { number: number },
      { $set: { lat: lat, lng: lng } },
      { upsert: true }
    );

    response.status(200).send({ message: 'Location updated successfully' });
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: 'An error occurred while updating location' });
  }
});



// Delete location data by bus number
Locationapp.delete('/delete-location/:number', async (request, response) => {
  try {
    const locationobj = request.app.get('locationobj');
    
    const busNumber = request.params.number; // extract bus number
    
    // Delete the location data for the given bus number
    const result = await locationobj.deleteOne({ number: busNumber });

    if (result.deletedCount === 1) {
      response.status(200).send({ message: 'Location data deleted successfully' });
    } else {
      response.status(404).send({ error: 'Location data not found' });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: 'An error occurred while deleting location data' });
  }
});







module.exports=Locationapp;

