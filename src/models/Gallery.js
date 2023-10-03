const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    galleryHeading: String,
    links: [
        {
            url: String
        },
    ],
})

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;