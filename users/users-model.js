const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    findReviews,
    add,
    update,
    remove
}

function findById(id) {
    return db('users').where({ id }).first();
}

function findReviews(id) {
    return db('reviews').where({ user_id: id })
}

async function add(user) {
    return db('users')
    .returning(['id', 'users_name'])
    .insert(user)
    .then(response => {
        return findById(response[0])
    })
}

async function update(changes, id) {
    return db('users')
    .where({ id })
    .update({ ...changes })
    .then(response => {
        return findById(id)
    })
}

async function remove(id) {
    return db('users')
    .where({ id })
    .then(res => {
        db('users')
        .where({ id })
        .del()
        return res[0]
    })
}