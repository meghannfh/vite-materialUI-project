const Card = require('../models/Card');

module.exports = {
    getProfile: async(req, res) => {
        try {
            const cards = await Card.find({ user: req.user.id }).sort({ createdAt: 'desc'}).lean();
            res.json(cards);
        }catch (err){
            res.status(400).json({error: err});
        }
    }
}