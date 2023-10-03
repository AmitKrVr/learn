const express = require("express");
const hbs = require("hbs");
const routes = require("./routes/main");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Detail = require("./models/Details");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const Gallery = require("./models/Gallery");
const Banner = require("./models/Banner");

const app = express();

// Middleware
app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("", routes);

// (template engine)

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// DB connection
main()
    .then((res = console.log("DB Connected")))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Dynamic_Website");
}

// Detail.create({
//     brandName: "Amit Tech",
//     brandIconUrl: "https://avatars.githubusercontent.com/u/136904032?v=4",
//     links: [
//         {
//             label: "Home",
//             url: "/"
//         },
//         {
//             label: "Services",
//             url: "/services"
//         },
//         {
//             label: "Gallery",
//             url: "/gallery"
//         },
//         {
//             label: "About",
//             url: "/about"
//         },
//         {
//             label: "Contact Us",
//             url: "/contact"
//         },
//     ]
// })

// Slider.create([
//     {
//     title: "Unlocking the Code",
//     subTitle: "Crafting Digital Magic – Your Journey to Mastery in the World of Web Development and Programming.",
//     imageUrl: "/static/images/dev1.jpg",
//     },
//     {
//     title: "DevOps Dynamics",
//     subTitle: "Navigating the Fast Lane of Development – Empowering Developers, Accelerating Innovation.",
//     imageUrl: "/static/images/dev2.jpg",
//     },
//     {
//     title: "Developer's Haven",
//     subTitle: "Where Code Meets Creativity – Unleash Your Potential and Craft the Future of Technology.",
//     imageUrl: "/static/images/dev3.jpg",
//     },
// ]);

// Service.create([
//     {
//         icon: "fa-brands fa-accusoft",
//         title: "Provie Best Cources",
//         description: "We Provide cources that helps our student in learning in placement",
//         linkText: "Check",
//         link: "https://www.google.com/",
//     },
//     {
//         icon: "fa-brands fa-affiliatetheme",
//         title: "Learn Projects",
//         description: "We Provide cources that helps our student in learning in placement",
//         linkText: "Learn",
//         link: "https://www.google.com/",
//     },
//     {
//         icon: "fa-solid fa-rectangle-ad",
//         title: "Provie Best Cources",
//         description: "We Provide cources that helps our student in learning in placement",
//         linkText: "Ad",
//         link: "https://www.google.com/",
//     },
// ])

// Gallery.create({
//         galleryHeading: "PHOTO GALLERY",
//         links: [
//             {
//                 url: "/static/images/gallery/1.jpg"
//             },
//             {
//                 url: "/static/images/gallery/2.jpg"
//             },
//             {
//                 url: "/static/images/gallery/3.jpg"
//             },
//             {
//                 url: "/static/images/gallery/4.jpg"
//             },
//             {
//                 url: "/static/images/gallery/5.jpg"
//             },
//             {
//                 url: "/static/images/gallery/6.jpg"
//             },
//             {
//                 url: "/static/images/gallery/7.jpg"
//             },
//             {
//                 url: "/static/images/gallery/8.jpg"
//             },
//             {
//                 url: "/static/images/gallery/9.jpg"
//             },
//             {
//                 url: "/static/images/gallery/10.jpg"
//             },
//         ]
//     })

// Banner.create([
//     {
//         title: "Ride the Next Programming Revolution",
//         subTitle: "Welcome to a programming oasis where innovation and excellence come together to define the future of coding. Our unwavering commitment to delivering top-tier coding resources is designed to empower learners like you. We believe in pushing the boundaries of programming knowledge, embracing challenges, and crafting solutions that elevate your coding skills. Join us on this journey of discovery and transformation in the world of programming",
//         imageURL: "/static/images/graphics.jpg",
//         btnText: "Click here",
//     },
//     {
//         title: "Building a Future in Code",
//         subTitle: "Step into the realm of programming excellence, where every line of code is a masterpiece waiting to be written. Dive deep into the world of algorithms, data structures, and cutting-edge technologies. Our mission is to empower you with knowledge and skills, helping you become a coding virtuoso in an ever-evolving digital landscape.",
//         imageURL: "/static/images/graphics2.jpg",
//         btnText: "Click here",
//     },
//     {
//         title: "Start learning new technology",
//         subTitle: "At DevAmit, we're passionate about helping you embark on a journey of technological exploration. Whether you're a beginner or a seasoned pro, our expertly crafted courses and resources are designed to empower you. Discover the latest trends in programming languages. It's time to unlock your potential and embrace the exciting world of new technology. Join us and start your learning journey today.",
//         btnText: "Start learning",
//     }
// ]);

app.listen(process.env.PORT | 5000, () => {
    console.log("Server Started");
});
