import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        reviewId: {
            type: String,
            required: true,
            unique: true
         },

        productID: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
        },

        rating: {
            type: Number,
            required: true,
        },

        comment: {
            type: String,
            required: true,
            trim: true
        }
    }
    
);

const Review = mongoose.model("Review", reviewSchema)

export default Review;
