const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const cookieController = require('../controllers/cookieController')


router.post("/login", userController.login )

router.post('/logout', (req, res) => {
    res.clearCookie('ssid')
    res.status(200).json('logged out!')
})

router.post('/signup', userController.signup
  )

module.exports = router; 




