const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();

// async function collection(){
//   try{
//     await mongoose.connect('mongodb+srv://Examiner:Exam%40123@exammanagedb.2z5zb.mongodb.net/Exammanage')
//     console.log('Connected to MongoDB');
//     const db=mongoose.connection.db;
//     const dbname=mongoose.connection.db.databaseName;
//     console.log("db",dbname);
//     const collections=await db.listCollections().toArray();
//     console.log("collections",collections.map(collection=>collection.name));
//     await mongoose.connection.close();
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// collection();
// async function UserCollection(){
//   try{
//     await mongoose.connect('mongodb+srv://Examiner:Exam%40123@exammanagedb.2z5zb.mongodb.net/Exammanage')
//     console.log('Connected to MongoDB');
//     const user=mongoose.model('User',new mongoose.Schema({}, { strict: false }));
//     const content=await user.find();
//     console.log(content); 
//   }
//     catch(err){
//       console.log(err);
//     }
//   }
    
//  UserCollection();

mongoose.connect('mongodb+srv://Examiner:Exam%40123@exammanagedb.2z5zb.mongodb.net/Exammanage')
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.error('Could not connect to MongoDB',err));

const user=mongoose.model('user',new mongoose.Schema({}, { strict: false }));

// app.use(express.json("."));
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));


let root='/';
app.use((req,res,next)=>{
  root=req.originalUrl;
  // console.log(root);
  next();
});


// always redirect to index.html
app.get("/*",(req,res)=>{
  res.redirect("/index.html");
});



// login
app.post("/login", async (req,res)=>{
  const {username,password}=req.body;
  
  try
    {
      
      const userfinal = await user.findOne({ U_name: username });

      console.log("user Found",userfinal);
      console.log(userfinal);
      if(userfinal){
        if(userfinal.U_password===password){
          res.redirect("/home.html");
        }
        else{
          res.send(`<h1>incaluws</h1>`);
        }
      }
      else{
        res.send("Invalid Username");
      }
  }catch(err){
    res.send(err);
  }
});
app.listen(3000,()=>console.log("Listening on port 3000..."));