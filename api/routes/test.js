const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Userdb = require('../models/userdb');

router.get('/all', (req, res, next) => {
    Userdb.find()
        .exec()
        .then(results => {
            if (results.length > 0) {
                res.status(200).json({
                    message: "All User Info",
                    result: results
                });
            } else {
                res.status(404).json({
                    message: "All User Info",
                    result: 'No data available'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});
router.get('/:userId', (req, res, next) => {
    //Console.log("INNN");\
    const id = req.params.userId;
    Userdb.findById(id)
        .exec()
        .then(result => {
            console.log(result);
            if (result)
                res.status(200).json(result);
            else
                res.status(404).json({ message: 'orry, your  userid is not valid!' });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });


});

router.post('/', (req, res, next) => {
    // const user =  {
    //     name: req.body.name,
    //     age: req.body.age
    // }
    const user = new Userdb({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age
    });
    user.save()
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));

    res.status(200).json({
        message: 'Its a POST method',
        user: user
    });
});
router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId;
    Userdb.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Deleted',
                result: result,

            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.patch('/:userId', (req, res, next) => {
    const id = req.params.userId;
    Userdb.update({ _id: id }, { $set: { name: req.body.newname, age: newage } })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Updated',
                result: result
            });
        })
        .catch(err => {
            res.status(404).json({
                message: 'Error !',
                error: err
            })
        })

    ;
});

module.exports = router;