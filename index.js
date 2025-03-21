const express =require('express');
const app=express();
const path=require('path');
const connectDB=require('./config/db')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const logger = require('morgan');
const cors = require('cors');
const corsOptions=require('./middleware/cors_option');
const port = process.env.PORT;


app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(helmet());
app.get('/',(req,res)=>{
    res.send("Welcome Dude");
});
connectDB();
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
});