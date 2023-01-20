const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


router.get("/reviews", userController.getReviews, (req, res) => {
    res.status(200).json(res.locals.reviews); 
}); 

