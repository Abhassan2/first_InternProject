import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import feedbackModel from './models/feedbackSchema.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

async function connectDb (){
  try{
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb is connected successfully!");
  } catch(error){
    console.log(error);
  }
}

app.get("/", async (req, res)=>{
  res.send("Root endpoint");
})

app.get("/home", async (req, res) => {
  try {
    res.json({success: true, message: "Welcome to the Event Feedback Management System"});
  } catch (error) {
    console.log(error.message);
    return res.json({success: false, message: error.message});
  }
});

app.post("/feedback", async (req, res)=>{
  try {
    const {event, email, name, rating, comment} = req.body;
    if(!event || !email || !rating || !comment){
      return res.json({success: false, message: "Fill all fields"});
    }

    const newFeedback = new feedbackModel({
      name,
      email,
      event,
      rating,
      feedback: comment
    });
    await newFeedback.save();

    res.json({success: true, newFeedback});
  } catch (error) {
    console.log(error.message);
    return res.json({success: false, message: error.message});
  }
});

app.get("/feedback", async (req, res)=>{
  try {
    const feedbacks = await feedbackModel.find({});
    if(!feedbacks){
      return res.json({success: false, message: "No feedback available"});
    }

    res.json({success: true, feedbacks});
  } catch (error) {
    console.log(error.message);
    return res.json({success: false, message: error.message});
  }
})

app.use((req,res)=>{
  res.json({success:false, message: "Invalid api endpoint"});
});

app.listen(process.env.PORT, async () => {
  await connectDb();
  console.log(`Server running on ${process.env.PORT}`);
});
