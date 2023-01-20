const express = require("express");
const router = express.Router();
const landlordController = require("../controllers/landlordController") 



router.get("/:id", landlordController.getReviews, (req, res)=>{ 



})
