const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    res.json({

        project: process.env.APP_NAME,

        version: "1.0.0",

        environment: process.env.NODE_ENV,

        status: "Running Successfully"

    });

});

module.exports = router;