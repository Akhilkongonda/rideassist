const exp=require("express");
const app=exp();
app.listen(3900,()=>console.log("web server listening 3900..."));

const path=require("path");

//connect react build
app.use(exp.static(path.join(__dirname,'./build')));



//get mongoclient by installing module mongodb
const mClient=require("mongodb").MongoClient;

//connect mongoclient by installing module mongodb
mClient.connect("mongodb://127.0.0.1/27017")
.then((dbRef)=>{
        //connect to a database after receiving the dbrefernc
        const dbobj=dbRef.db('rideassist');
        //connect location of this database 
        const locationobj=dbobj.collection("locations")

        //share collections to apis using set method
        app.set("locationobj",locationobj) 
        console.log("db connected succeess...")
})
.catch(err=>console.log("database connection error :",err));




//import locationapp
const Locationapp=require("./Apis/locationapi")

//excute locationapp when path starts with /location-api
app.use('/location-api',Locationapp)
