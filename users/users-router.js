const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/:id',restricted, (req, res) => {
    Users.findById(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.get('/:id/reviews', restricted, (req, res) => {
    Users.findReviews(req.params.id)
        .then(reviews => {
            res.status(200).json(reviews)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.put('/:id', restricted, (req, res) => {
    Users.update(req.body, req.params.id)
        .then(changes => {
            res.status(200).json(changes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.delete('/:id', restricted, (req, res) => {
    Users.remove(req.params.id)
        .then(deleted => {
            res.status(200).json({ message: 'User deleted successfully' })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})