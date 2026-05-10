import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
    submittedOn: {
        type: Date,
        default: Date.now
    }
})

const feedbackModel = mongoose.model("Feedback", feedbackSchema);

export default feedbackModel;