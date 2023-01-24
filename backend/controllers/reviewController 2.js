const db = require("../models");

const reviewController = {}; 

//add review 

reviewController.addReview = async (req, res) => {
    try {      
        const {landlordID, review, rent_again, rating, address} = req.body; //NTF: send the landlord ID in request please!
        //TODO: need to check if this way of getting user ID works
        const reviewerID = req.user.id;
        const values = [landlordID, reviewerID, review, rent_again, rating, address]
        //TODO: if address is provided (optional for reviewer) and new, add it to the properties table; 

        const text = 
            "INSERT INTO reviews(landlord_id, reviewer_id, review, rent_again, rating, address)\
            VALUES($1, $2, $3, $4, $5, $6)"
        await db.query(text, values)
        res.send("review added!")
    } catch (err) {
        return next({
            log: `landlordController.addReview: ${err}`,
            message: { err: "Failed to add review" },
        });
    }

}


//TODO: update and delete 