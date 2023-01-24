const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const cookieController = require('../controllers/cookieController')


router.post("/login", 
    userController.login,
    cookieController.setSSIDCookie,
  (req, res) => res.status(200).json('user authenicated!') )

router.post('/logout', (req, res) => {
    res.clearCookie('ssid')
    res.status(200).json('logged out!')
})

router.post('/signup', userController.signup)




