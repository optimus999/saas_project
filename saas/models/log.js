const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    user: String,
    inputText: String,
    outputText: String,
    operation: String,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Log', logSchema);
