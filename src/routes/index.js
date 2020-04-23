const express = require('express');

const ping = require('./api/ping.routes');

const router = express.Router();

// --- routes ---

router.use('/ping', ping);

module.exports = router;