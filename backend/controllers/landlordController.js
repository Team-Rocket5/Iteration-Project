const db = require("../models");

const landlordController = {}; 

// get reviews about a particular landloard 
landlordController.getLandlordReviews = async (req, res) => {
    try {
    const landlordID = req.params.id; 
    console.log(req.params.id);
    const text = "SELECT * FROM landlords\
        INNER JOIN reviews\
        ON reviews.landlord_id = landlords.id\
        WHERE landlords.id = $1;"
    const reviews = (await db.query(text, [landlordID])).rows; 
    console.log(reviews); 
    res.status(200).json(reviews); //send back reviews (in array format)
    } catch (err) {
        return next({
            log: `landlordController.getReviews: ${err}`,
            message: { err: "Failed to get landloard reviews" },
        });
    }
}
//create landlord 
landlordController.createLandlord = async (req, res, next) => {
  try {  
    const { name, location, neighborhood} = req.body;
    const text =
        "INSERT INTO landlords(name, location, neighborhood) VALUES ($1,$2, $3) RETURNING id, name, location";
    const values = [name, location, neighborhood];
    const landlord = (await db.query(text, values)).rows[0]; 
    res.status(200).json(landlord); 
  } catch(err) {
        return next({
            log: `landlordController.getReviews: ${err}`,
            message: { err: "Failed to get landloard reviews" },
        });
  }
}




module.exports = landlordController; 