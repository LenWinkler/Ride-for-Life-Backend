const router = require('express').Router();

const Drivers = require('./drivers-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
    Drivers.find()
        .then(drivers => {
            res.status(200).json(drivers)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.get('/:id', restricted, (req, res) => {
    Drivers.findById(req.params.id)
        .then(driver => {
            res.status(200).json(driver)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.get('/:id/reviews', restricted, (req, res) => {
    Drivers.findReviews(req.params.id)
        .then(reviews => {
            res.status(200).json(reviews)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.put('/:id', restricted, (req, res) => {
    Drivers.update(req.body, req.params.id)
        .then(changes => {
            res.status(200).json(changes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.delete('/:id', restricted, (req, res) => {
    Drivers.remove(req.params.id)
        .then(deleted => {
            res.status(200).json({ message: 'Driver deleted successfully' })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;