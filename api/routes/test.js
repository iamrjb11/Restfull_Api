const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    //Console.log("INNN");
    res.status(200).json({
        message: 'Its a GET method'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Its a POST method'
    });
});

module.exports = router;