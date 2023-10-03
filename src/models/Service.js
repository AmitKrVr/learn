const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    linkText: String,
    link: String,
})

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;