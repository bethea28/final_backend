const express = require('express');
const router = require('express').Router();
var app = express()
const Review = require('../models/index').Review
var bodyParser = require('body-parser');




const createReview = (req,res) =>{
  Review.create({
    rating: req.body.rating,
    date: req.body.date,
    description: req.body.description
  })
  .then((data)=>{
   
    res.send(data)
  })
  
}

router.route('/')
  .post(createReview)

module.exports = router