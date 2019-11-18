const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findReviews,
    add,
    update,
    remove
}

function find() {
    return db('drivers')
}

function findById(id) {
    return db('drivers').where({ id })
}

function findReviews(id) {
    return db('reviews').where({ driver_id: id })
}

function add(driver) {
    return db('drivers')
    .returning(['id', 'drivers_name'])
    .insert(driver)
    .then(response => {
        return findById(response[0])
    })
}

function update(changes, id) {
    return db('drivers')
    .where({ id })
    .update({ ...changes })
    .then(response => {
        return findById(id)
    })
}

function remove(id) {
    return db('users')
    .where({ id })
    .then(response => {
        db('drivers')
        .where({ id })
        .del()
        return response[0]
    })
}