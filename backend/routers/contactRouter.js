const express = require('express');
const ContactModel = require('../models/contactModel');

const router = express.Router();

// Add a new contact message
router.post('/add', (req, res) => {
    console.log(req.body);
    new ContactModel(req.body)
        .save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get all contact messages
router.get('/getall', (req, res) => {
    ContactModel.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get contact message by ID
router.get('/getbyid/:id', (req, res) => {
    ContactModel.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update a contact message by ID
router.put('/update/:id', (req, res) => {
    ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete a contact message by ID
router.delete('/delete/:id', (req, res) => {
    ContactModel.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
