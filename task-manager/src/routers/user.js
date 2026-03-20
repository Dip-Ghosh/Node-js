const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const multer = require('multer');
const sharp = require('sharp');
const router = new express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken()
        res.status(201).send({user, token});
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken()

        res.status(200).send({user, token});
    } catch (error) {
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
    } catch (error) {
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

router.get('/users', auth, async (req, res) => {
    try {
        const users = await User.find({_id: req});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get('/users/me', auth, async (req, res) => {
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

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'age', 'password'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'});
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save();
        res.status(200).send(req.user);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.deleteOne();
        res.status(204).send(req.user);
    } catch (error) {
        res.status(500).send(error);
    }
})

const upload = multer({
    // dest: 'avatar',
    limits: {
        fileSize: 1 * 1024 * 1024
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'), false);
        }

        cb(undefined, true);
    }
});

router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {


    const buffer = await sharp(req.file.buffer).resize({
        width: 150,
        height: 50
    }).png().toBuffer()

    req.user.avatar = buffer;

    await req.user.save();
    res.send('avatar');
}, (error, req, res, next) => {
    res.status(400).send({error: error.message});
})

router.delete('/users/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined;
    await req.user.save();
    res.send('avatar');
})


router.get('/users/:id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user || !user.avatar) {
            return new Error('User not found');
        }

        res.set('Content-Type', 'image/png');
        res.send(user.avatar);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;