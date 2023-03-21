const express = require('express')
const router = express.Router()
const authController = require("../controllers/auth");
const cardsController =  require('../controllers/cards')
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/dash', cardsController.getDash)
router.get('/profile', authController.getProfile)
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.put('/edit/:id', authController.editProfile)

module.exports = router;