const express = require('express');
require('./db/mongoose');

const taskRouter = require('./routers/task');
const userRouter = require('./routers/user');

const app = express();
const port = process.env.PORT || 3000;

const jwt = require('jsonwebtoken');

const nyFunction = async() => {
    const token = jwt.sign({ _id: 'abc123'}, 'secret', {expiresIn: '0 seconds'});
    console.log(token);

    const data =jwt.verify(token, 'secret');
    console.log(data);
}

nyFunction();

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log('Server started on port ' + port)
});

