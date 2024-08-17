const express = require('express');
const router = express.Router();

router.post('/add', (req , res) => {
    console.log(req.body);
    res.send('Response from userRouter');  
})

router.get('/getall', (req, res) => {
    res.send('Response from userRouter');
})

router.get('/getbyid/:id', (req, res) => {
    console.log(req.params.id);
    res.send('Response from userRouter');
})
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.id);
    res.send('Response from userRouter');
})

router.put('/update', (req, res) => {
    console.log(req.body);
    res.send('Response from userRouter');
})

router.delete('/delete', (req, res) => {
    console.log(req.body);
    res.send('Response from userRouter');
})

module.exports = router;