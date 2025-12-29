import express from "express";
import { addReview, getProductReviews, deleteReview, getAllReviews } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", addReview);

reviewRouter.get("/", getAllReviews);

reviewRouter.get("/:productID", getProductReviews);

reviewRouter.delete("/:id", deleteReview);

export default reviewRouter;
