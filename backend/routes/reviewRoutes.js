const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth"); 
const reviewController = require("../controllers/reviewController"); 

//get all reviews by a user
router.get("/", auth.verifyToken, reviewController.getUserReviews
//(req, res) => {res.send("user taken verified!")}

)


//add a new review to a landlord
//temp: remove verification
router.post("/", //auth.verifyToken,
 reviewController.addReview)
 


//edit 
router.patch("/", auth.verifyToken, reviewController.updateReview); 


//delete 

router.delete("/", auth.verifyToken, reviewController.deleteReview); 

module.exports = router; 