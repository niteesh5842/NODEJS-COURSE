const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "Niteesh@5842", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
