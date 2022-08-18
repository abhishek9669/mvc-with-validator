const express = require('express');
var env = require('dotenv');
const { adminRouter } = require('./routes/adminRoute');
const app = express();
env.config();


app.use("/admin",adminRouter);


let port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(" port is running",port)
});