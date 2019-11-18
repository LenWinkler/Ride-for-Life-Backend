const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('drivers').insert([
    {
      drivers_name: 'seeddriver1', 
      drivers_plot: '123', 
      drivers_phone_number: '235-143-4567',
      drivers_email: 'seeddriver1@gmail.com',
      password: bcrypt.hashSync('password', 10),
      drivers_price: 50
    },
    {
      drivers_name: 'seeddriver2', 
      drivers_plot: '142', 
      drivers_phone_number: '245-133-1261',
      drivers_email: 'seeddriver2@gmail.com',
      password: bcrypt.hashSync('password', 10),
      drivers_price: 40
    },
    {
      drivers_name: 'seeddriver3', 
      drivers_plot: '321', 
      drivers_phone_number: '234-123-4567',
      drivers_email: 'seeddriver3@gmail.com',
      password: bcrypt.hashSync('password', 10),
      drivers_price: 75
    }
  ]);
};