const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPasswordUserOne = await bcrypt.hash("Qwerty123!", 10);
    const hashedPasswordUserTwo = await bcrypt.hash("Qwerty1234!", 10);
    const hashedPasswordUserThree = await bcrypt.hash("Qwerty12345!", 10);
    const hashedPasswordUserFour = await bcrypt.hash("Qwerty123456!", 10);
    const hashedPasswordUserFive = await bcrypt.hash("Qwerty1234567!", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Tony Stark",
          email: "stark@gmail.com",
          password: hashedPasswordUserOne,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Thor",
          email: "thor@asgard.com",
          password: hashedPasswordUserTwo,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Peter Parker",
          email: "parker@gmail.com",
          password: hashedPasswordUserThree,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Groot",
          email: "groot@gmail.com",
          password: hashedPasswordUserFour,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Loki",
          email: "loki@asgard.com",
          password: hashedPasswordUserFive,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
