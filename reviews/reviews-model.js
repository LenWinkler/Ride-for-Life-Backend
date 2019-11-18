const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    findAllById,
    add,
    update,
    remove
}

function findById(id) {
    return db('reviews').where({ id }).first();
}

function findAllById(id) {
    return db('reviews').where({ id })
}

async function add(review) {
    return db('reviews')
    .returning(['id', 'review_text'])
    .insert(review, 'id')
    .then(response => {
        return findById(response[0])
    })
}

async function update(changes, id) {
    return db('reviews')
    .where({ id })
    .update({ ...changes })
    .then(response => {
        return findById(id)
    })
}

async function remove(id) {
    return db('reviews')
    .where({ id })
    .then(response => {
        db('reviews')
        .where({ id })
        .del()
        return res[0]
    })
}