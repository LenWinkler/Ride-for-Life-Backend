const request = require('supertest');
const bcrypt = require('bcryptjs');

const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

const Users = require('../users/users-model.js');
const Drivers = require('../drivers/drivers-model.js');
const Reviews = require('../reviews/reviews-model.js');

jest.mock('../auth/restricted-middleware.js', () => {
    return (req, res, next) => {
        next();
    }
});

describe('drivers endpoints', function() {

    describe('GET /', function() {

        it('should return 200 status', async function() {
            await request(server)
            .get('/api/drivers')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return json', async function() {
            await request(server)
            .get('/api/drivers')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })
        })
    })

    describe('GET /:id', function() {

        const testDriver = {
            drivers_name: "Test Example", 
            drivers_plot: "121", 
            drivers_phone_number: "475-743-4567",
            drivers_email: "testdriver@gmail.com",
            password: bcrypt.hashSync('password', 5),
            drivers_price: 50
        }

        beforeEach(async () => {
            await db('drivers').truncate();
            await Drivers.add(testDriver);
        })

        it('should return 200 status', async function() {
            await request(server)
            .get('/api/drivers/1')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return object with id prop', async function() {
            await request(server)
            .get('/api/drivers/1')
            .then(res => {
                expect(res.body).toHaveProperty('id')
            })
        })

    })

    describe('GET /:id/reviews', function() {

        const testUser = {
            users_name: "Test", 
            users_plot: "161", 
            users_phone_number: "564-197-1256", 
            users_email: "testuser@gmail.com", 
            password: bcrypt.hashSync('password', 5), 
            due_date: "2019-12-15"
        }

        const testDriver = {
            drivers_name: "Test Example", 
            drivers_plot: "121", 
            drivers_phone_number: "475-743-4567",
            drivers_email: "testdriver@gmail.com",
            password: bcrypt.hashSync('password', 5),
            drivers_price: 50
        }

        const testReview = {
            reviewer: "Review Example",
            review_date: "2019-09-12",
            rating: 3,
            review_text: "Not bad, not great",
            user_id: 1,
            driver_id: 1
        }
      
        beforeEach(async () => {
            await db('users').truncate();
            await db('drivers').truncate();
            await db('reviews').truncate();
            await Users.add(testUser);
            await Drivers.add(testDriver);
            await Reviews.add(testReview);
        })

        it('should return 200', async function() {
            await request(server)
            .get('/api/drivers/1/reviews')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    })

    describe('PUT /:id', function() {

        const testDriver = {
            drivers_name: "Test Example", 
            drivers_plot: "121", 
            drivers_phone_number: "476-743-4567",
            drivers_email: "testdriver1@gmail.com",
            password: bcrypt.hashSync('password', 5),
            drivers_price: 50
        }

        beforeEach(async () => {
            await db('drivers').truncate();
            await Drivers.add(testDriver)
        })

        it('should return 200', async function() {
            await request(server)
            .put('/api/drivers/1')
            .send({ drivers_plot: "222" })
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return updated info', async function() {
            await request(server)
            .put('/api/drivers/1')
            .send({ drivers_plot: "222" })
            .then(res => {
                expect(res.body.drivers_plot).toEqual("222")
            })
        })
    })

    describe('DELETE /:id', function() {

        const testDriver = {
            drivers_name: "Test Example", 
            drivers_plot: "121", 
            drivers_phone_number: "471-743-4567",
            drivers_email: "testdriver2@gmail.com",
            password: bcrypt.hashSync('password', 5),
            drivers_price: 50
        }

        beforeEach(async () => {
            await db('drivers').truncate();
            await Drivers.add(testDriver)
        })

        it('should return 200', async function() {
            await request(server)
            .delete('/api/drivers/1')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return success message', async function() {
            await request(server)
            .delete('/api/drivers/1')
            .then(res => {
                expect(res.body.message).toBe('Driver deleted successfully')
            })
        })

    })

})