import { chatClient } from "../lib/stream"; 

export async function getStreamToken(req,res) {
    try{
        const token=chatClient.createToken(req.user.clerkId);
        res.statud(200).json({
            token,
            userId:req.user.clerkId,
            userName:req.user.name,
            userImage:req.user.image,
        });

    }catch (error){
        console.log("Error in getstreamtoken contro",error.message);
        res.status(500).json({message:"internal Server error!:"})
    }
    
}