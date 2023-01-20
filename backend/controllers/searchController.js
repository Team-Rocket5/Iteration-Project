const db = require("../models"); 

const searchController = {};

searchController.searchByName = async (req, res) => {
    try {
        console.log("Inside search controller---by name")
        const landlordName = req.query.name; 
        const text = 
            "SELECT * FROM landlords WHERE name = $1"; 
        const landlords = (await db.query(text, [landlordName])).rows;
        //looper over all landlords found
        for (let landlord of landlords) {
            const ratingQuery = "SELECT AVG(rating) FROM reviews where landlord_id = $1"; 
            const rating = await db.query(ratingQuery, [landlord.id]); //get average rating a particular landlord
            //if rating does not exist, assign to null; otherwise to a one decimal number; 
            landlord.rating = rating === null ? null : Number.parseFloat(rating).toFixed(1) 
        } 
        res.locals.landlords = landlords;  // an array of landlord objects;   
        res.status(200).json(landlords);  
    }catch(err) {
        return next({
            log: `searchController.searchByName: ${err}`,
            message: { err: "Failed to get landloard list" },
          });
    }
}

searchController.searchByLocation = async (req, res) => {
    try {
        console.log("Inside search controller---by location")
        const location = req.query.location;
        const neighborhood = req.query.neighborhood;  
        const text = 
            "SELECT * FROM landlords WHERE location = $1 AND neighborhood = $2"; 
        const landlords = await db.query(text, [location, neighborhood]); 
        for (let landlord of landlords) {
            const ratingQuery = "SELECT AVG(rating) FROM reviews where landlord_id = $1"; 
            const rating = await db.query(ratingQuery, [landlord.id]); //get average rating a particular landlord
            //if rating does not exist, assign to null; otherwise to a one decimal number; 
            landlord.rating = rating === null ? null : Number.parseFloat(rating).toFixed(1) 
        } 
        res.locals.landlords = landlords;  // an array of landlord objects;   
        res.status(200).json(landlords);    
    }catch(err) {
        return next({
            log: `searchController.searchByName: ${err}`,
            message: { err: "Failed to get landloard list" },
          });
    }
}



module.exports = searchController; 