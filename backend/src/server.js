import env from 'dotenv';
env.config();
import express from 'express';

import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";


const app=express();



const __dirname=path.resolve();
app.use(express.static(path.join(__dirname,'../frontend/dist')));
app.get('/test',(req,res)=>{
    res.send('Hello World');
})
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../frontend/dist/index.html'));
// })
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();