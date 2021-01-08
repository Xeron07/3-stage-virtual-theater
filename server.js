const express=require("express");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const csrf=require("csurf");
const admin = require("firebase-admin");

const serviceAccount = require("./config/service101.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://theater-2k20-default-rtdb.firebaseio.com"
});


const app=express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrf({cookie:true}));

app.listen("5000",(req,res)=>{
    console.log("server started....");
});