const db = require("../models");

const landlordController = {}; 

landlordController.getReviews = async (req, res) => {
    const landlordID = req.params.id; 
    const text = "SELECT * FROM reviews WHERE landlord_id = $1"
    const reviews = await db.query(text, [landlordID]); 
    res.locals.reviews = reviews.rows; 
}




module.exports = landlordController; 