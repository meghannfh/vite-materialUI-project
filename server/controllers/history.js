const History = require('../models/History');

module.exports = {
    getHistory: async(req, res) => {
        try {
            const history = await History.find({ user: req.user.id })
            res.json(history);
        }catch (err){
            res.status(400).json({error: err});
        }
    }
}