const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken()

        res.status(201).send({user, token});
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken()

        res.status(200).send({user, token});
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });

        await req.user.save();

        res.status(200).send('logout')
    }catch(error) {
        res.status(500).send(error);
    }
})

//logout all session
router.post('/users/logoutAll', auth, async (req, res) => {
    try {

        req.user.tokens = [];
        await req.user.save();
        res.status(200).send('logout')
    } catch (er) {
        res.status(500).send(er);
    }
})

router.get('/users',auth, async (req, res) => {
    try {
        const users = await User.find({_id:req});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get('/users/me',auth, async (req, res) => {
   res.status(200).send({user: req.user});
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).send();
        }

        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.patch('/users/:id', async (req, res, next) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'age', 'password'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'});
    }

    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send({error: 'User not found'});
        }

        updates.forEach((update) => user[update] = req.body[update])

        await user.save();
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        res.status(200).send(user);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(204).send(user);

    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;