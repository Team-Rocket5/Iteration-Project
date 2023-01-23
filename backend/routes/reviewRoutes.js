const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth"); 
const reviewController = require("../controllers/reviewController"); 

//get all reviews by a user
router.get("/", auth.verifyToken, 
(req, res) => {res.send("user taken verified!")}
//reviewController.getReviews
)

//add a new review to a landlord
router.post()

//edit 

//delete 



module.exports = router; 