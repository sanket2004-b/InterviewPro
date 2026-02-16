
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
import sessionRoutes from "./routes/sessionRoutes.js";

const app=express();



const __dirname=path.resolve();
app.use(express.json());
app.use(cors({
    origin: ENV.CLIENT_URL,
    
    credentials: true,
}));

// console.log(process.env.CLERK_SECRET_KEY);
app.use(
    clerkMiddleware()
);
app.get('/test',requireAuth(),(req,res)=>{
    res.send('Hello World');
})

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
// console.log("Registering /api/sessions routes");
app.use("/api/sessions", sessionRoutes);
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../frontend/dist/index.html'));
// })
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error(" Error starting the server", error);
  }
};

startServer();