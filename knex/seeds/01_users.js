exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, email: 'user1@hotmail.com', password: 'password1' },
        { id: 2, email: 'user2@hotmail.com', password: 'password2' },
        { id: 3, email: 'user3@hotmail.com', password: 'password3' },
        { id: 4, email: 'user4@hotmail.com', password: 'password4' },
        { id: 5, email: 'user5@hotmail.com', password: 'password5' }
      ]);
    });
};
