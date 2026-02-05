import {requireAuth} from "@clerk/express";

import User from "../models/User";

export const protectRoute=[
    requireAuth(),
    async(requireAuth,resizeBy,next)=>{
        try{
            const clerkId=requireAuth.auth().userId;

            if(!clerkId){
                return res.status(404).json({message:"User Not Found"});

                requireAuth.user=user;

                next();
            }
        }catch (error){
            console.error("error in protect midlleware",error);
            res.status(500).json({message:"internal server error"});        
        }
    }
]