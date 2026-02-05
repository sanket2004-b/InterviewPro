import mongoose from "mongoose";

const sessionSchema= new mongoose.Schema(
    {
        problem:{
            type:String,
            required:true,
        },
        difficulty:{
            type:String,
            enum:["easy","medium","hard"],
            required:true,
        },
        host:{
            

        }
    }
)