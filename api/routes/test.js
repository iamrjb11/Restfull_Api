const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    //Console.log("INNN");
    res.status(200).json({
        message: 'Its a GET method'
    });
});

router.post('/', (req, res, next) => {
    const user = {
        name: req.body.name,
        age: req.body.age
    }
    res.status(200).json({
        message: 'Its a POST method',
        user: user
    });
});

module.exports = router;