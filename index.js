
import express from 'express';
import router from './routes.js'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();


const app = express();

app.use(express.json());

app.use('/',router)

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      
    }
  }


const PORT = process.env.PORT || 8008



connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("server listening on port",PORT);
    })
})