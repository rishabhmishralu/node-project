const express=require('express')
const fitnessapi=require('../Api/fitness')

const fitness=express.Router();
fitness.route('/fitness').get(fitnessapi.apiController)

module.exports=fitness;