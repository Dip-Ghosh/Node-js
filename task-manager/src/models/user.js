const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Task = require('./task');

const userSchema = new mongoose.Schema({
    name:     {
        type:     String,
        required: true,
        trim:     true,
    },
    password: {
        type:      String,
        required:  true,
        minlength: 7,
        trim:      true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    },
    email:    {
        type:      String,
        required:  true,
        trim:      true,
        lowercase: true,
        unique:    true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    age:      {
        type:    Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive number');
            }
        }
    },
    tokens:   [{
        token: {
            type:     String,
            required: true,
        }
    }]
}, {
    timestamps: true
})


userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens

    return userObject;
}

//generate token
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, 'secret');

    user.tokens = user.tokens.concat({token})
    await user.save();

    return token;
}

//credentials findings
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email});

    if (!user) {
        throw new Error('Login attempt for: ${email}');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Unable to login');
    }

    return user;
}

//Hashing password before saving
userSchema.pre('save', async function (nex) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
})

//delete user task when user is removed
userSchema.pre('deleteOne', { document:true, query: false }, async function () {
    const user = this;
    await Task.deleteMany({owner: user._id});
});


const User = mongoose.model('User', userSchema);

module.exports = User;
