const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links: [
        {
            label: String,
            url: String,
        },
    ],
});

const Detail = mongoose.model("Detail", detailSchema);

module.exports = Detail;