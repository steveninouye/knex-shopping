exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          title: 'title1',
          description: 'this is the description',
          inventory: 3,
          price: 3.0
        },
        {
          id: 2,
          title: 'title2',
          description: 'this is the description',
          inventory: 4,
          price: 3.01
        },
        {
          id: 3,
          title: 'title3',
          description: 'this is the description',
          inventory: 5,
          price: 3.22
        },
        {
          id: 4,
          title: 'title4',
          description: 'this is the description',
          inventory: 7,
          price: 4.0
        },
        {
          id: 5,
          title: 'title5',
          description: 'this is the description',
          inventory: 9,
          price: 7.0
        }
      ]);
    });
};
