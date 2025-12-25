import express from "express";
import { addReview, getProductReviews, deleteReview } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", addReview);

reviewRouter.get("/:productID", getProductReviews);

reviewRouter.delete("/:id", deleteReview);

export default reviewRouter;
