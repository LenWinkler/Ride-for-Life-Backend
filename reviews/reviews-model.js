const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    add,
    update,
    remove
}

function findById(id) {
    return db('reviews').where({ id }).first();
}

function add(review) {
    return db('reviews')
    .returning(['id', 'review_text'])
    .insert(review)
    .then(response => {
        return findById(response[0])
    })
}

function update(changes, id) {
    return db('reviews')
    .where({ id })
    .update({ ...changes })
    .then(response => {
        return findById(id)
    })
}

function remove(id) {
    return db('reviews')
    .where({ id })
    .then(response => {
        db('reviews')
        .where({ id })
        .del()
        return res[0]
    })
}