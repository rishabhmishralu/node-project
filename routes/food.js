const express=require("express")
const foodapi=require("../Api/food");

const food = express.Router();
food.route("/food").get(foodapi.apiController);

module.exports=food;