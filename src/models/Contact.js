const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    query: String,
})

const Query = mongoose.model("Query", contactSchema);

module.exports = Query;