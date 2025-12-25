import Review from "../models/Review.js";
import { isAdmin } from "./userController.js";

export async function addReview(req, res) {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const { productID, rating, comment } = req.body;
        const email = req.user.email;

        if (!productID || !rating || !comment) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newReview = new Review({
            reviewId: "REV" + Date.now(),
            productID,
            email,
            rating: Number(rating),
            comment
        });

        await newReview.save();
        res.json(newReview);

    } catch (err) {
        console.error("Error adding review:", err);
        res.status(500).json({ message: "Error adding review", error: err.message });
    }
}


export async function getProductReviews(req, res) {
    try {
        const productID = req.params.productID;
        const reviews = await Review.find({ productID });
        res.json(reviews);
    } catch (error) {
        console.error("Error in getProductReviews:", error);
        res.status(500).json({ message: "Error fetching reviews", error: error.message });
    }
}

export async function deleteReview(req, res) {
    if (!isAdmin(req)) {
        return res.status(403).json({ message: "Only admin can delete reviews" });
    }

    try {
        await Review.deleteOne({ _id: req.params.id });
        res.json({ message: "Review deleted successfully" });
    } catch (err) {
        console.error("Error in deleteReview:", err);
        res.status(500).json({ message: "Error deleting review", error: err.message });
    }
}
