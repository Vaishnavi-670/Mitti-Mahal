const express = require('express');
const Model = require('../models/userModel');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');
require('dotenv').config();

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/getall', (req, res) => {
    Model.find()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})

router.get('/getuser', verifyToken, (req, res) => {

    Model.findById(req.user._id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
})
router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {
            if (result)
                res.status(200).json(result);
            else
                res.status(404).json({ message: 'User not found' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.put('/update', verifyToken, (req, res) => {
    Model.findByIdAndUpdate(req.user._id, req.body, { new: true }) //new true value is used to get the updated data from the database
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

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

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {

            if (result) {
                // generate token
                const { _id, name, email, password, role } = result;
                const payload = { _id, email, password };

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '2 days' },
                    (err, token) => {
                        if (err) {
                            res.status(500).json({ message: 'Token Generation Failed' });
                        } else {
                            res.status(200).json({ token, name, email, role });
                        }
                    }
                )

            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/authorise', verifyToken, (req, res) => {
    res.json({ id: req.user._id, email: req.user.email });
})

module.exports = router;