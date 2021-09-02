const express = require('express');
const getirRoutes = require('./getir.route');

const router = express.Router();

/**
 * GET v1/health
 */
router.get('/health', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/getir', getirRoutes);

module.exports = router;
