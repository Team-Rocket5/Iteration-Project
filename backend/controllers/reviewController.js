const db = require("../models");

const reviewController = {}; 


reviewController.getUserReviews = async (req, res, next)=> {
    try {
        const reviewerID = req.user.id; 
        const text = "SELECT * FROM reviews WHERE reviewer_id = $1"
        const reviews = (await db.query(text, [reviewerID])).rows; 
        res.status(200).json(reviews); 
    }catch(err) {
        return next({
            log: `reviewController.getUReview: ${err}`,
            message: { err: "Failed to access user reviews" },
        });
    }
} 

//add review 
reviewController.addReview = async (req, res, next) => {
    try {  
         
        const {landlordID, review, rent_again, rating, date, reviewerID, reviewerName} = req.body;
       
        const values = [landlordID, reviewerID, review, rent_again, rating, date, reviewerName, address, subject]
        
        console.log(values)
        //TODO: if address is provided (optional for reviewer) and new, add it to the properties table; 

        //temporary: text with address 
        const text = "INSERT INTO reviews(landlord_id, reviewer_id, review, rent_again, rating, date, reviewerName, address, subject)\
           VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)\
        //     RETURNING review"
        // const text = 
        //     "INSERT INTO reviews(landlord_id, reviewer_id, review, rent_again, rating, date)\
        //     VALUES($1, $2, $3, $4, $5, $6)\
        //     RETURNING review"
        const newReview = (await db.query(text, values)).rows[0]; 
        console.log("new review: ", newReview)
        res.send("review added!")
    } catch (err) {
        return next({
            log: `reviewController.addReview: ${err}`,
            message: { err: "Failed to add new user review" },
        });
    }

}  

// update review

reviewController.updateReview = async (req, res, next) => {
    try {      
        const {review, rent_again, rating, landlordID} = req.body;
        const reviewerID = req.user.id;//attainable through verification

        const values = [review, rent_again, rating, landlordID, reviewerID]
        //TODO: if address is provided (optional for reviewer) and new, add it to the properties table; 

        const text = 
            "UPDATE reviews\
            SET review = $1\
            SET rent_again = $2\
            SET rating = $3\
            WHERE landlord_id = $4 AND reivewer_id = $5\
            RETURNING *"

        const newReview = (await db.query(text, values)).rows[0]; 
        res.status(200).json()
    } catch (err) {
        return next({
            log: `reviewController.updateReview: ${err}`,
            message: { err: "Failed to update user review" },
        });
    }

}

// delete review  

reviewController.deleteReview = async (req, res, next) => {
    try {      
        const {landlordID} = req.body;
        const reviewerID = req.user.id;//attainable through verification

        const values = [ landlordID, reviewerID]

        const text = 
            "DELETE FROM reviews\
            WHERE landlord_id = $1 AND reivewer_id = $2\
            RETURNING *"

        await db.query(text, values);  
        res.status(200).json("Review is deleted!")
    } catch (err) {
        return next({
            log: `reviewController.deleteReview: ${err}`,
            message: { err: "Failed to delete user review" },
        });
    }

}

module.exports = reviewController; 
