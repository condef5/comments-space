"use strict";

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          body: "The pillows is pure nostalgic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: "Hajime no ippo is the best anime",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("Comment", null, {});
  }
};
