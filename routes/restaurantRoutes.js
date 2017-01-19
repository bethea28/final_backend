const express = require('express');
const router = require('express').Router();
var app = express()
const Restaurant = require('../models/index').Restaurant
const Reviews = require('../models/index').Review
var bodyParser = require('body-parser');




const createRestaurant = (req,res) =>{
  Restaurant.create({
    name: req.body.name,
    neighborhood: req.body.neighborhood,
    address: req.body.address,
    cuisine: req.body.cuisine,
    cost: req.body.cost
  })
  .then((data)=>{
    // console.log(data)
    // data.dataValues.message = 'Restaurant successfully added!'
    res.send(data)
  })
 

}

const getAllRestaurants = (req,res) =>{
  Restaurant.findAll({

  })
  .then((data)=>{
    // console.log(data)
    // data.dataValues.message = 'Restaurant successfully added!'
    res.send(data)
  })
   .then(()=>{
    res.sendStatus(200)
  })
   .catch((err)=>{
    // console.log(err)
   })

}



var getOneRestaurant = (req,res) =>{
  Restaurant.findOne({
    where:{
      id: req.params.id
    },
    include: [Reviews]
  })
  .then((data)=>{
    // console.log(data)
    // data.dataValues.Reviews = Reviews
    // res.send({restaurant:data, Reviews: Reviews})

    res.send(data)
  })
  .catch((err)=>{
    // console.log(err)
  })
}



router.route('/')
  .post(createRestaurant)
  .get(getAllRestaurants)
router.route('/:id')
  .get(getOneRestaurant)

module.exports = router