import{chatClient,streamClient} from "../lib/stream.js";

import Session from "../models/Session.js";

export async function createSession(req,res){
    try{
        const {problem,difficulty}=req.body;
        const userId=req.user._id;

        const clerkId=req.user.clerkId;

        if(!problem || !difficulty){
            return res.status(400).json({message:"problem add difficult is required please give!"})
        }

        const callId=`session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

        const session=await Session.create({problem,difficulty,host: userId,callId});

        await streamClient.video.call("defualt",callId).getOrCreate({
            data:{
                created_by_id:clerkId,
                custom:{ problem,difficulty,sessionId:session._id.toString()},
            },
        });
    }
}