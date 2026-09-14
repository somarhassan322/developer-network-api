const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

// @rote        GET api/auth
// @desc Test   route
// @access      Public
router.get('/', (req, res) => res.send('Auth route'));


module.exports = router;