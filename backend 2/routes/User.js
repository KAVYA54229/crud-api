const express = require('express')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../model/User');

const router = express.Router();

router.post('/signup', async(req,res)=>{
    const { userid,name, email,mobile,password } = req.body;
    const newUser = new User({ userid,name, email,mobile,password});
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});


// Protected Route Example
router.get('/protected', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ msg: 'No token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ msg: 'Failed to authenticate token' });
        res.json({ msg: 'Protected data', userId: decoded.id });
    });
});


module.exports = router;