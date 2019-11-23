require("dotenv").config();

let config = {
    "development": {
      "username": "root",
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": "127.0.0.1",
      "port": process.env.DB_PORT,
      "dialect": "mysql",
      "operatorsAliases": false
    }
  }
  
  module.exports = config;