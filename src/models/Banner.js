const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    imgageURL: String,
    btnText: String,
})

const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;