const mongooes=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const connectDB=async ()=>{
    try{
      await  mongooes.connect(`${process.env.DATABASE_URL}`);
      console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("MongoDb connection error",err);
    }
}

module.exports=connectDB;