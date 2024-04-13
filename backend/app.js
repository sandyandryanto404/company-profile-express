/**
 * This file is part of the Sandy Andryanto Company Profile Website.
 *
 * @author     Sandy Andryanto <sandy.andryanto404@gmail.com>
 * @copyright  2024
 *
 * For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 */

const express = require("express");
const app = express();
var db = require("./app/models");

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  db.sequelize.sync();
});
