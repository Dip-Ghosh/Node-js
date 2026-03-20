const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            throw new Error('Token is missing');
        }

        const decodedToken = jwt.verify(token, 'secret');
        const user = await User.findById({_id:decodedToken._id, 'tokens.token':token})
        if (!user) {
            throw new Error('UNAUTHORIZED');
        }

        req.token = token;
        req.user = user;
        next();

    } catch (error) {
        res.status(401).send({error: 'Please authenticate'});
    }
}

module.exports = auth;