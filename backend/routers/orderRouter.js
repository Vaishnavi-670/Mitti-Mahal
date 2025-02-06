const express = require('express');
const OrderModel = require('../models/orderModel');
const verifyToken = require('./verifyToken');

const router = express.Router();

// Add a new order
router.post('/add', verifyToken, (req, res) => {
    req.body.user = req.user._id;
    console.log(req.body);
    new OrderModel(req.body)
        .save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get all orders
router.get('/getall', (req, res) => {
    OrderModel.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get order by ID
router.get('/getbyid/:id', (req, res) => {
    OrderModel.findById(req.params.id)

        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/getbyuser', verifyToken, (req, res) => {
    OrderModel.find({ user: req.user._id })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/update/:id', (req, res) => {
    OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete an order by ID
router.delete('/delete/:id', (req, res) => {
    OrderModel.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
