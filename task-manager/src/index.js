const express = require('express');
require('./db/mongoose');

const taskRouter = require('./routers/task');
const userRouter = require('./routers/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log('Server started on port ' + port)
});

const bcrypt = require('bcryptjs');
const myFunction = async () => {
    const password = 'red12345';
    const hashPassword = await bcrypt.hash(password, 10);

    console.log(password);
    console.log(hashPassword);

    const isMatch = await bcrypt.compare(password, hashPassword);
    console.log(isMatch);
}

myFunction();
