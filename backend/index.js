const express = require('express');
const userRouter =  require('./routers/userRouter');

const app = express();
const port =5001;

app.use(express.json());

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server running on port`)
});