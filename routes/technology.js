const express=require('express')

const  techapi=require('../Api/technology')

const tech=express.Router();
tech.route("/technology").get(techapi.apiController);

module.exports=tech;