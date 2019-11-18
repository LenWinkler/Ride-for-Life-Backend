
exports.seed = function(knex) {
      return knex('reviews').insert([
        { 
          reviewer: 'seeduser2', 
          review_date: '2019-10-14',
          rating: 5,
          review_text: 'Got to the hospital quickly. Didn\'t hit any potholes',
          user_id: 2,
          driver_id: 1
        },
        {
          reviewer: 'seeduser1', 
          review_date: '2019-08-11',
          rating: 3,
          review_text: 'Took a long time to get to my house but otherwise good',
          user_id: 1,
          driver_id: 3
        },
        {
          reviewer: 'seeduser3', 
          review_date: '2019-07-24',
          rating: 1,
          review_text: 'Got lost on the way to the hospital. Also ran over a cat',
          user_id: 3,
          driver_id: 2
        }
      ]);
    };
