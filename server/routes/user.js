const express = require('express')
const router = express.Router()
const userController = require('../controllers/users');


// login route
router.post('/login', userController.postLogin);

// signup route
router.post('/signup', userController.postSignup);

// router.post("/signup", authController.postSignup);

// router.put('/edit/:id', authController.editProfile)

module.exports = router;