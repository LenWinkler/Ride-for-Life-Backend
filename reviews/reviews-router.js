const router = require('express').Router();

const Reviews = require('./reviews-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.post('/', restricted, (req,res) => {
    Reviews.add(req.body)
        .then(review => {
            res.status(201).json(review)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.put('/:id', restricted, (req, res) => {
    Reviews.update(req.body, req.params.id)
        .then(review => {
            res.status(200).json(review)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.delete('/:id', restricted, (req, res) => {
    Reviews.remove(req.params.id)
        .then(response => {
            res.status(200).json({ message: 'Review deleted successfully' })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;