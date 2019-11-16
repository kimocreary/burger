var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res){
    burgers.all(function(data){
        res.render("index", {burgerData:data})
    });
});

router.post("/burger/create", function(req, res){
    burgers.create(req.body.burger_name, function(data){
        console.log(data)
        res.redirect("/")
    })
});

router.put("/burger/:id", function(req, res){
    burgers.update(req.params.id, function(data){
        console.log(data); 
        res.sendStatus(200)
    })
})





module.exports = router;