// getting access to express module 
const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");


const app = express();

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT || 8080 ;

// log requests 
app.use(morgan("tiny"));

// parse request to body-parser module 
app.use(bodyparser.urlencoded({extended:true}));

// set view engine
app.set("view engine" , "ejs");
// app.set("views",path.resolve(__dirname, "views/ejs"));

// load assets
app.use('/css', express.static(path.resolve(__dirname , "assets/css"))); // css/styling.css
app.use('/img', express.static(path.resolve(__dirname , "assets/img"))); 
app.use('/js', express.static(path.resolve(__dirname , "assets/js"))); 



 
app.get('/',(req,res)=>{
    // res.send("CRUD Application is Running");
    res.render(`index.ejs`);
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

