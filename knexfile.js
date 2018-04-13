// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'user2',
      password: 'password',
      database: 'knex_shopping',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_URL,
      user: 'user2',
      password: 'password',
      database: 'knex_shopping',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + 'knex/seeds'
    }
  }
};
