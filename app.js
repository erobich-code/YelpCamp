let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

let campgrounds = [
  {name: "Site 1", image: "https://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/16115458/North-Bend-Park-Campground.jpg"},
  {name: "Site 2", image: "http://images.midwestliving.mdpcdn.com/sites/midwestliving.com/files/styles/slide/public/101478198_w.jpg?itok=8Q4OteDC"},
  {name: "Site 3", image: "http://www.destination360.com/north-america/us/montana/images/s/camping.jpg"},
  {name: "Site 4", image: "https://s3.amazonaws.com/virginiablog/wp-content/uploads/2016/03/16115458/North-Bend-Park-Campground.jpg"},
  {name: "Site 5", image: "http://images.midwestliving.mdpcdn.com/sites/midwestliving.com/files/styles/slide/public/101478198_w.jpg?itok=8Q4OteDC"},
  {name: "Site 6", image: "http://www.destination360.com/north-america/us/montana/images/s/camping.jpg"},

]
app.get("/campgrounds", function(req, res){
  

  res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
  //get data from form and add to campgrounds array
  let name = req.body.name;
  let image = req.body.image;
  console.log(req.body.image);
  let newCampground = {name: name, image: image};
  console.log(newCampground);
  campgrounds.push(newCampground);
  // Redir back to campground page
  res.redirect("/campgrounds");
});

//Create new page campgrounds/new
app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(port, function () {
  console.log("Server Has Started!");
});