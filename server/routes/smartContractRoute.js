const express = require('express');
const { getTokenBalance } = require('../controllers/smartContractController');
const router = express.Router();

router
    .route("/token/balance")
    .post(getTokenBalance);

module.exports = router;
