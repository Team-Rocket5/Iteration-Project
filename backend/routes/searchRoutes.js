const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");


router.get("/landlord", searchController.searchByName) 


router.get("/location", searchController.searchByLocation) 


module.exports = router; 
