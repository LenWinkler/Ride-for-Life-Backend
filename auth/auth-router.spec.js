const request = require('supertest');

const server = require('../api/server.js');
const db = require('../data/dbConfig.js')

describe('auth endpoints', function() {

    describe('POST to register', function() {

        beforeEach(async () => {
            await db('users').truncate();
            await db('drivers').truncate();
        })

        it('should return 201 status', function() {
            return request(server)
            .post('/api/auth/register_user')
            .send({ 
                users_name: "Testing Example", 
                users_plot: "161", 
                users_phone_number: "564-197-1256", 
                users_email: "testing_example@gmail.com", 
                password: "password", 
                due_date: "2019-12-15"
             })
             .then(res => {
                 expect(res.status).toBe(201);
             })
        });

        it('should return json', function() {
            return request(server)
            .post('/api/auth/register_user')
            .send({ 
                users_name: "Testing Example", 
                users_plot: "161", 
                users_phone_number: "564-197-1256", 
                users_email: "testing_example@gmail.com", 
                password: "password", 
                due_date: "2019-12-15"
             })
             .then(res => {
                 expect(res.type).toMatch(/json/i);
             })
        });

        it('should return 201 status', function() {
            return request(server)
            .post('/api/auth/register_driver')
            .send({ 
                "drivers_name": "Test Example", 
                "drivers_plot": "121", 
                "drivers_phone_number": "475-743-4567",
                "drivers_email": "testexample@gmail.com",
                "password": "password",
                "drivers_price": 50
             })
             .then(res => {
                 expect(res.status).toBe(201);
             })
        });

        it('should return json', function() {
            return request(server)
            .post('/api/auth/register_driver')
            .send({ 
                "drivers_name": "Test Example", 
                "drivers_plot": "121", 
                "drivers_phone_number": "475-743-4567",
                "drivers_email": "testexample@gmail.com",
                "password": "password",
                "drivers_price": 50
             })
             .then(res => {
                 expect(res.type).toMatch(/json/i);
             })
        });
    })
})