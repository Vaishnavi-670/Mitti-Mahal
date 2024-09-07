const express = require('express');
const Model = require('../models/productModel');

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

router.get('/getall', (req, res) => {
    Model.find()
       .then((result) => {
            res.status(200).json(result);
        })
       .catch((err) => {
            res.status(500).json(err);
        });
} )

router.get('/getbycategory/:category', (req, res) => {
    Model.find({ category: req.params.category })
       .then((result) => {
            res.status(200).json(result);
        })
       .catch((err) => {
            res.status(500).json(err);
        });
} )
router.get('/getbytitle:/title', (req, res) => {
    Model.findById({title: req.params.title})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});

router.get('/getbyprice', (req, res) => {
    Model.findOne({price: req.query.price})
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((results) => {
     res.status(200).json(results);
    })
    .catch((err) => {
         console.log(err);
         res.status(500).json(err);
     });
})

module.exports  = router;