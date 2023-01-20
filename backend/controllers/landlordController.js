const db = require("../models");

const landlordController = {}; 

landlordController.getReviews = async (req, res) => {
    const landlordID = req.params.id; 
    const text = "SELECT * FROM reviews WHERE landlord_id = $1"
    const reviews = (await db.query(text, [landlordID])).rows; 
    res.status(200).json(reviews); 
}

landlordController.createLandlord = async (req, res) => {
  const { name, location, neighborhood} = req.body;
  const text =
    "INSERT INTO landlords(name, location, neighborhood) VALUES ($1,$2, $3) RETURNING _id, name, location";
  const values = [name, location, neighborhood];
  const landlord = await db.query(text, values); 
  res.status(200).json(landlord); 
}





module.exports = landlordController; 