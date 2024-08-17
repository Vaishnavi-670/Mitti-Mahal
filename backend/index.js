const express = require('express');
const userRouter =  require('./routers/userRouter');

const app = express();
const port =5001;

app.use(express.json());
app.use('/user', userRouter);

app.get('/',(req, res) => {
    res.send('Response from server')
})
app.get('/add',(req, res) => {
    res.send('Response from add route')
})

app.listen(port, () => {
    console.log(`Server running on port`)
});