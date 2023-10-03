const express = require("express");
const { route } = require("express/lib/application");

const Detail = require("../models/Details");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");
const Gallery = require('../models/Gallery');
const Banner = require('../models/Banner');

const routes = express.Router();

routes.get("/", async (req, res) => {
    const details = await Detail.findOne({ _id: "650ff49e79095a7a62e72ab2" });
    const sliders = await Slider.find();
    const services = await Service.find();
    const banner1 = await Banner.findOne({_id: "65129c62b0cbe1c1d953a5fc"});
    const banner2 = await Banner.findOne({_id: "65129c62b0cbe1c1d953a5fa"});
    const banner3 = await Banner.findOne({_id: "65129c62b0cbe1c1d953a5fb"});
    res.render("index", {
        details: details,
        sliders: sliders,
        services: services,
        banner1 : banner1,
        banner2 : banner2,
        banner3 : banner3,
    });
});

routes.get("/gallery", async (req, res) => {
    const details = await Detail.findOne({ _id: "650ff49e79095a7a62e72ab2" });
    const sliders = await Slider.find();
    const gallery = await Gallery.findOne({_id: "6511bfd154d89aedea9ec0d8"});
    res.render("gallery", {
        details: details,
        sliders: sliders,
        gallery: gallery,

    });
});

// contact form
routes.post("/process-contact-form", async (req, res) => {
    const data = await Contact.create(req.body);

    data.save()
        .catch((err) => {
            console.log(err);
        });

    res.redirect("/");
});

module.exports = routes;
