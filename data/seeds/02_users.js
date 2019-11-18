const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('users').insert([
    {
     users_name: 'seeduser1', 
     users_plot: '142', 
     users_phone_number: '123-1234-3456', 
     users_email: 'seeduser1@gmail.com', 
     password: bcrypt.hashSync('password', 10), 
     due_date: "2019-12-15" 
    },
    {
      users_name: 'seeduser2', 
      users_plot: '155', 
      users_phone_number: '123-1235-1256', 
      users_email: 'seeduser2@gmail.com', 
      password: bcrypt.hashSync('password', 10), 
      due_date: "2019-12-15" 
     },
     {
      users_name: 'seeduser2', 
      users_plot: '148', 
      users_phone_number: '121-1684-8856', 
      users_email: 'seeduser3@gmail.com', 
      password: bcrypt.hashSync('password', 10),
      due_date: "2019-12-15" 
     }
  ]);
};