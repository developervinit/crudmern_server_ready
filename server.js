const app = require("./app.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const  express = require("express");


//to connect 'config.env' file
dotenv.config({ path: './config.env'});

//db-string for database connection
const string = process.env.STRING;
const dbString = string.replace("<password>", process.env.PASSWORD);


//connecting database using mongoose method
mongoose.connect(dbString, {
                             useNewUrlParser: true,
                             useUnifiedTopology: true
                           }).then(() => console.log("database is connected"))
                           .catch(err => console.log('ERROR', err.message));

                           
if(process.env.NODE_ENV === "production"){
  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,'frontend', 'build', 'index.html'));
  })
}                           

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Node server is istening on port ${PORT}`);
});
