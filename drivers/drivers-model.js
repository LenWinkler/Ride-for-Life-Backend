const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    findReviews,
    add,
    update,
    remove
}

function find() {
    return db('drivers')
}

function findBy(filter) {
    return db('drivers').where(filter)
}

function findById(id) {
    return db('drivers').where({ id }).first();
}

function findReviews(id) {
    return db('reviews').where({ driver_id: id })
}

async function add(driver) {
    return db('drivers')
    .returning(['id', 'drivers_name'])
    .insert(driver, 'id')
    .then(response => {
        return findById(response[0])
    })
}

async function update(changes, id) {
    return db('drivers')
    .where({ id })
    .update({ ...changes })
    .then(response => {
        return findById(id)
    })
}

async function remove(id) {
    return db('users')
    .where({ id })
    .then(response => {
        db('drivers')
        .where({ id })
        .del()
        return response[0]
    })
}