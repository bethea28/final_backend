// const express = require('express');
// const router = require('express').Router();
// var app = express()
// const Restaurant = require('../models/index').Restaurant
// const Reviews = require('../models/index').Review
// var bodyParser = require('body-parser');


// var getOneRestaurant = (req,res) =>{
//   Restaurant.findOne({
//     where:{
//       id: req.params.id
//     },
//     include: [Reviews]
//   })
//   .then((data)=>{
//     console.log(data)
//     res.send({data})
//   })
//   .then(()=>{
//     res.sendStatus(200)
//   })
//   .catch((err)=>{
//     // console.log(err)
//   })
// }


// router.route('/')
//   .get(getOneRestaurant)

// module.exports = router