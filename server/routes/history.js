const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history');

router.get('/history', historyController.getHistory);