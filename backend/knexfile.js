// knexfile.js
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'postgres',
      password: '0911'
    },
    migrations: {
      directory: './migrations'
    }
  }
  // configure other environments as needed
};
