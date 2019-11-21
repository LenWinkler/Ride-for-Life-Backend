const request = require('supertest');
const bcrypt = require('bcryptjs');

const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

const Users = require('../users/users-model.js');
const Drivers = require('../drivers/drivers-model.js');

describe('auth endpoints', function() {

// -----------TESTS FOR REGISTRATION------------------- //

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
                drivers_name: "Test Example", 
                drivers_plot: "121", 
                drivers_phone_number: "475-743-4567",
                drivers_email: "testexample@gmail.com",
                password: "password",
                drivers_price: 50
             })
             .then(res => {
                 expect(res.status).toBe(201);
             })
        });

        it('should return json', function() {
            return request(server)
            .post('/api/auth/register_driver')
            .send({ 
                drivers_name: "Test Example", 
                drivers_plot: "121", 
                drivers_phone_number: "475-743-4567",
                drivers_email: "testexample@gmail.com",
                password: "password",
                drivers_price: 50
             })
             .then(res => {
                 expect(res.type).toMatch(/json/i);
             })
        });
    })

    // ---------------TESTS FOR LOGIN--------------------- //

    describe('POST to login',function() {

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

        beforeEach(async () => {
            await db('users').truncate();
            await db('drivers').truncate();
            await Users.add(testUser);
            await Drivers.add(testDriver);
        })

        it('should return 200 status', async function() {
            return await request(server)
            .post('/api/auth/user_login')
            .send({ users_email: "testuser@gmail.com", password: "password" })
            .then(res => {
                expect(res.status).toBe(200)
            })

        })

        it('should return a token', async function() {
            return await request(server)
            .post('/api/auth/user_login')
            .send({ users_email: "testuser@gmail.com", password: "password" })
            .then(res => {
                expect(res.body).toHaveProperty('token')
            })
        })

        it('should return 200 status', async function() {
            return await request(server)
            .post('/api/auth/driver_login')
            .send({ drivers_email: "testdriver@gmail.com", password: "password" })
            .then(res => {
                expect(res.status).toBe(200)
            })

        })

        it('should return a token', async function() {
            return await request(server)
            .post('/api/auth/driver_login')
            .send({ drivers_email: "testdriver@gmail.com", password: "password" })
            .then(res => {
                expect(res.body).toHaveProperty('token')
            })

        })
    })
})