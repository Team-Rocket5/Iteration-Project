const jwt = require("jsonwebtoken");

const auth = {};

auth.verifyToken = async (req, res, next) => {
  try {
    //check what request headers look like:
    console.log("Request headers inside auth.verifyToken: ", req.headers); 

    let token = req.cookies.ssid;
    if (!token) {
      return res
        .status(403)
        .send("Session expired, please login and try again!");
        //maybe redirect to login page?
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Verified user: ", verified)
    const { id} = verified;

    //req.user = verified;

    req.user = {id: id};

    next();
  } catch (err) {
    res.status(401).json({error: "Request is not authorized"});
  }
};

module.exports = auth;
