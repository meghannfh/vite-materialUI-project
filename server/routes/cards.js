const express = require("express");
const router = express.Router();
const cardsController =  require('../controllers/cards')

router.get('/:id', cardsController.getCard)
router.post("/addCard", cardsController.addCard) //removed multer's upload.single("image")
router.delete("/deleteCard/:id", cardsController.deleteCard);
router.put("/updateCard/:id", cardsController.updateCard)

module.exports = router;