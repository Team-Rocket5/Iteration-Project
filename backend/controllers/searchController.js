const db = require("../models"); 

const searchController = {};

//for search page: search landloard by name
searchController.searchByName = async (req, res) => {
    try {
        console.log("Inside search controller---by name")
        const landlordName = "$" + req.query.name + "$"; 
        const text = 
            "SELECT * FROM landlords WHERE name ILIKE $1"; 
        const landlords = (await db.query(text, [landlordName])).rows;
        //if not found, return message
        if (!landlords) return res.json("landlord not in database");
        
        //looper over all landlords if found to add rating data 
        for (let landlord of landlords) {
            const ratingQuery = "SELECT AVG(rating) FROM reviews where landlord_id = $1"; 
            const rating = await db.query(ratingQuery, [landlord.id]); //get average rating a particular landlord
            //if rating does not exist, assign to null; otherwise to a one decimal number; 
            landlord.rating = rating === null ? null : Number.parseFloat(rating).toFixed(1) 
        } 
        res.locals.landlords = landlords;  // an array of landlord objects;   
        //NTF: send back information about all the landlords found, including their name, id, AND rating
            //except their reviews ==> reviews can be accessed by clicking on the invidual landlord card 
        //NTF: to make things more efficient, it would be nice to pass down the rating as prop to invidual landlord cards
            //so we do not need to inquiry for their rating again.   
        res.status(200).json(landlords);  
    }catch(err) {
        return next({
            log: `searchController.searchByName: ${err}`,
            message: { err: "Failed to get landloard list" },
          });
    }
}

////for search page: search landloard by location (city/town and neighborhood)
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
        //res.locals.landlords = landlords; 
        //NTF: send back information about all the landlords found, including their name, id, AND rating
            //except their reviews ==> reviews can be accessed by clicking on the invidual landlord card 
        //NTF: to make things more efficient, it would be nice to pass down the rating as prop to invidual landlord cards
            //so we do not need to inquiry for their rating again. 
        res.status(200).json(landlords);    
    }catch(err) {
        return next({
            log: `searchController.searchByName: ${err}`,
            message: { err: "Failed to get landloard list" },
          });
    }
}



module.exports = searchController; 