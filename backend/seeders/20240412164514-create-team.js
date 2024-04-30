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

"use strict";

const faker = require("faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [];
    for (var i = 1; i <= 10; i++) {
      let gender_index = Math.floor(Math.random() * 2) + 1;
      let gender_name = parseInt(gender_index) === 1 ? "male" : "female";
      let first_name = faker.name.firstName(gender_name);
      let name = first_name + " " + faker.name.lastName();
      let obj = {
        image: "team" + i + ".jpg",
        phone: faker.phone.phoneNumber(),
        position_name: faker.name.jobTitle(),
        twitter: faker.internet.userName().toLowerCase(),
        facebook: faker.internet.userName().toLowerCase(),
        instagram: faker.internet.userName().toLowerCase(),
        linked_in: faker.internet.userName().toLowerCase(),
        name: name,
        email: faker.internet.email().toLowerCase(),
        status: 1,
        sort: i,
        created_at: new Date(),
        updated_at: new Date(),
      };
      data.push(obj);
    }
    queryInterface.bulkDelete("teams", null, {});
    return queryInterface.bulkInsert("teams", data, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("teams", null, {});
  },
};
