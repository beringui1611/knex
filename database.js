const knex = require('knex')({
    client: 'mysql2', //nome da biblioteca que voce instalou
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Caique17242630',
      database : 'knexjs'
    }
});
  
module.exports = knex