require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');

User.findByIdAndUpdate('69aef8705295b1338a5ba070', {age:1 }).then((user)=> {
    console.log(user);

    return User.countDocuments({ age: 1 });
}).then((count)=> {
    console.log(count);
}).catch((err)=> {
    console.log(err);
})

Task.findByIdAndDelete('69aefb133c3f145697af5fed').then((task)=> {
    console.log(task);
    return Task.countDocuments({completed: false})
}).then((task)=> {
    console.log(task);
}).catch((err)=> {
    console.log(err);
})
