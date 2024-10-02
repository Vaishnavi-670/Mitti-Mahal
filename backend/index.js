const express = require('express');
const cors = require('cors');
const orderRouter =  require('./routers/orderRouter');  
const userRouter =  require('./routers/userRouter');
const productRouter =  require('./routers/productRouter');
const productRouter =  require('./routers/reviewRouter');

const app = express();
const port =5000;

app.use(cors({
    origin: '*'
}));  // Enable cross-origin resource sharing (CORS) for all requests
app.use(express.json()); 
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/review', reviewRouter);

app.get('/',(req, res) => {
    res.send('Response from server')
})
app.get('/add',(req, res) => {
    res.send('Response from add route')
})

app.listen(port, () => {
    console.log(`Server running on port`)
});