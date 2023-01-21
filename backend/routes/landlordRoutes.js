const express = require("express");
const router = express.Router();
const landlordController = require("../controllers/landlordController") 
const auth = require("../middleware/auth")



router.get("/:id", landlordController.getReviews)

router.post("/", auth.verifyToken, landlordController.createLandlord)




