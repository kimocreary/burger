var express = require("express");

var port = process.env.PORT || 8080

var app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

var expressHandlebars = require("express-handlebars")

var routes = require("./controllers/burgers_controller.js")
app.use(routes)

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 














app.listen(port, function(){
    console.log("app listening on port", port)
})