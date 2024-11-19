const express = require('express');
const { formatText, analyzeText } = require('../controllers/textController');

const router = express.Router();

router.post('/format', formatText);
console.log("coming here");
router.post('/analyze', analyzeText);

module.exports = router;
