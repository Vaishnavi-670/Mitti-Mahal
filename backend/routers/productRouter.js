const express = require('express');
const Model = require('../models/productModel');
const { } = require('mongoose');

const router = express.Router(); 


router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
       .then((result) => {
            res.status(200).json(result);
        })
       .catch((err) => {
            res.status(500).json(err);
        });
})

router.get('/getbycategory:category', (req, res) => {
    Model.find({ category: req.params.category })
       .then((result) => {
            res.status(200).json(result);
        })
       .catch((err) => {
            res.status(500).json(err);
        });
} )