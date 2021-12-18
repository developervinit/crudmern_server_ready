const express = require("express");
const empRoute = require("./routes/empRoute.js");
const errorControler = require("./controllers/errController.js");
const app = new express();
const cors =require("cors");
const path = require("path");

//enabling cors using package
app.use(cors());

//body parser for post-method
app.use(express.json());

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("frontend/build"));
//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname,'frontend', 'build', 'index.html'));
//     })
//   }   


app.use(express.static("frontend/build"));
    

//mounting the routes for employee
app.use("/emp", empRoute);

//for error handling
app.use(errorControler);


module.exports = app;