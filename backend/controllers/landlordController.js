const db = require("../models");

const landlordController = {}; 

// get reviews about a particular landloard 
landlordController.getReviews = async (req, res) => {
    try {
    const landlordID = req.params.id; 
    const text = "SELECT * FROM reviews WHERE landlord_id = $1"
    const reviews = (await db.query(text, [landlordID])).rows; 
    res.status(200).json(reviews); //send back reviews (in array format)
    } catch (err) {
        return next({
            log: `landlordController.getReviews: ${err}`,
            message: { err: "Failed to get landloard reviews" },
        });
    }
}
//create landlord 
landlordController.createLandlord = async (req, res) => {
  try {  
    const { name, location, neighborhood} = req.body;
    const text =
        "INSERT INTO landlords(name, location, neighborhood) VALUES ($1,$2, $3) RETURNING _id, name, location";
    const values = [name, location, neighborhood];
    const landlord = await db.query(text, values); 
    res.status(200).json(landlord); 
  } catch(err) {
        return next({
            log: `landlordController.getReviews: ${err}`,
            message: { err: "Failed to get landloard reviews" },
        });
  }
}




module.exports = landlordController; 