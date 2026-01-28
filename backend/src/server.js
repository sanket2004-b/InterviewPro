import env from 'dotenv';
env.config();
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';


const app=express();
const PORT=process.env.PORT || 3003;
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB',err);
});
app.get('/test',(req,res)=>{
    res.send('Hello World');
})

const __dirname=path.resolve();
app.use(express.static(path.join(__dirname,'../frontend/dist')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontend/dist/index.html'));
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});