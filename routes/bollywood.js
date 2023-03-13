const express=require('express')
const bollyapi=require('../Api/bollywood');

const bolly=express.Router()
bolly.route("/bollywood").get(bollyapi.apiController);

module.exports= bolly;