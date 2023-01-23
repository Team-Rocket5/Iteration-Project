const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth"); 
const reviewController = require("../controllers/reviewController"); 


router.post("/", auth.verifyToken, reviewController.addReview)



module.exports = router; 