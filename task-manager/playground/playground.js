require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('69aef8705295b1338a5ba070', {age:1 }).then((user)=> {
    console.log(user);

    return User.countDocuments({ age: 1 });
}).then((count)=> {
    console.log(count);
}).catch((err)=> {
    console.log(err);
})