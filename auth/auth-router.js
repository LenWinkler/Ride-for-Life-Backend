const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const Drivers = require('../drivers/drivers-model.js');

function getJwtTokenUser(user) {

    const payload = {
        id: user.id,
        name: user.users_name,
        role: user.role
    };

    const secret = process.env.JWT_SECRET || 'dev env secret';

    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, secret, options);
};

function getJwtTokenDriver(driver) {

    const payload = {
        id: driver.id,
        name: driver.drivers_name,
        role: driver.role
    };

    const secret = process.env.JWT_SECRET || 'dev env secret';

    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, secret, options);
};

router.post('/register_user', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 11);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.post('/register_driver', (req, res) => {
    let driver = req.body;

    const hash = bcrypt.hashSync(driver.password, 11);
    driver.password = hash;

    Drivers.add(driver)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.post('/user_login', (req, res) => {
    let { users_email, password } = req.body;

    Users.findBy({ users_email })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = getJwtTokenUser(user);

                res.status(200).json({ token: token })
            } else {
                res.status(400).json({ message: 'Invalid credentials' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

router.post('/driver_login', (req, res) => {
    let { drivers_email, password } = req.body;

    Drivers.findBy({ drivers_email })
        .first()
        .then(driver => {
            if (driver && bcrypt.compareSync(password, driver.password)) {
                const token = getJwtTokenDriver(driver);

                res.status(200).json({ token: token })
            } else {
                res.status(400).json({ message: 'Invalid credentials' })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

module.exports = router;