module.exports = {
  development: {
    username: "root",
    password: null,
    database: "soranin_development",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "soranin_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
};
