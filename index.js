const express =require('express');
const app=express();
const path=require('path');
const connectDB=require('./config/db')

connectDB();
app.listen(3000,()=>{
    console.log(`listening to port 3000`);
});