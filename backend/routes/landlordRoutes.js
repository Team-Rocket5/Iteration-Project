const express = require("express");
const router = express.Router();
const landlordController = require("../controllers/landlordController") 
const auth = require("../middleware/auth")



router.get("/:id", landlordController.getLandlordReviews)

router.post("/", //auth.verifyToken,==> removed for testing
 landlordController.createLandlord)


module.exports = router; 


