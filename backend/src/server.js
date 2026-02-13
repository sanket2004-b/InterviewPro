import env from 'dotenv';
env.config();
import express from 'express';

import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import { serve } from "inngest/express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware, requireAuth } from '@clerk/express';
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

const app=express();



const __dirname=path.resolve();

app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));
app.use(express.static(path.join(__dirname,'../frontend/dist')));
// console.log(process.env.CLERK_SECRET_KEY);
app.use(
    clerkMiddleware({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  })
);
app.get('/test',requireAuth(),(req,res)=>{
    res.send('Hello World');
})

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
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