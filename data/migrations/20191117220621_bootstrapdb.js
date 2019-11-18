
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments();

      tbl.string('users_name').notNullable();
      tbl.string('users_plot').notNullable();
      tbl.string('users_phone_number').notNullable();
      tbl.string('users_email').unique().notNullable();
      tbl.string('due_date');
  })
  .createTable('drivers', tbl => {
      tbl.increments();

      tbl.string('drivers_name').notNullable();
      tbl.string('drivers_plot').notNullable();
      tbl.string('drivers_phone_number').unique().notNullable();
      tbl.string('drivers_email').unique().notNullable();
      tbl.integer('drivers_price').unsigned().notNullable();
  })
  .createTable('reviews', tbl => {
      tbl.increments();

      tbl.string('reviewer').notNullable();
      tbl.string('review_date').notNullable();
      tbl.integer('rating').unsigned().notNullable();
      tbl.string('review_text');
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('driver_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('drivers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('reviews')
    .dropTableIfExists('drivers')
    .dropTableIfExists('users')
};
