const express = require("express");
const app = express();
var db = require('./app/models');

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  db.sequelize.sync();
});