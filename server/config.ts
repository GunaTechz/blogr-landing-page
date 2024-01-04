import { Router } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routers from './utils/routes';

dotenv.config();
const router = Router();

const URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    if (!URI) {
      throw new Error("MongoDB URI is not defined");
    }
    
    const dbconnection =await mongoose.connect(URI);
    if(dbconnection.connection.host){
      router.use('/allRoutes', routers)
      console.log(`MongoDB Connected: ${mongoose.connection.host}`);
    }
  } catch (err) {
    console.log('Error', err);
  }
};
