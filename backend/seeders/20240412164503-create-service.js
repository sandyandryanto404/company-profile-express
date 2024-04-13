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
    let icons = [
      "fas fa-archive",
      "fas fa-atom",
      "fas fa-award",
      "fas fa-balance-scale",
      "fas fa-blender",
      "fas fa-book-reader",
      "fas fa-box-open",
      "fas fa-cash-register",
      "fas fa-cloud-download-alt",
    ];
    icons.map((icon, index) => {
      let sort = parseInt(index) + 1;
      let obj = {
        icon: icon,
        title: faker.lorem.sentence(8),
        description: faker.lorem.paragraphs(2),
        status: 1,
        sort: sort,
        created_at: new Date(),
        updated_at: new Date(),
      };
      data.push(obj);
    });
    queryInterface.bulkDelete("services", null, {});
    return queryInterface.bulkInsert("services", data, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("services", null, {});
  },
};
