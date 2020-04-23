const express = require('express');

const Controller = require('../../controllers/ping.controller');

let router = express.Router();

router.get('/', Controller.ping);

module.exports = router;
