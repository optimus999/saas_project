const Log = require('../models/log');

const formatText = async (req, res) => {
    const { text, formatType } = req.body;

    if (!text || !formatType) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    let formattedText;
    switch (formatType) {
        case 'uppercase':
            formattedText = text.toUpperCase();
            break;
        case 'lowercase':
            formattedText = text.toLowerCase();
            break;
        case 'trim':
            formattedText = text.trim();
            break;
        default:
            return res.status(400).json({ message: 'Unsupported format type' });
    }

    await Log.create({ user: 'Anonymous', inputText: text, outputText: formattedText, operation: 'format' });

    res.json({ formattedText });
};

const analyzeText = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ message: 'Text is required' });
    }

    const analysis = {
        wordCount: text.split(' ').length,
        characterCount: text.length,
    };

    await Log.create({ user: 'Anonymous', inputText: text, operation: 'analyze' });

    res.json({ analysis });
};

module.exports = { formatText, analyzeText };
