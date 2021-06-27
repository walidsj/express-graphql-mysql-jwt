const bcrypt = require("bcrypt");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			"users",
			[
				{
					id: 1,
					email: "admin@admin.com",
					password: await bcrypt.hash("admin", 10),
					name: "Moh. Walid Arkham Sani",
					levelId: 1,
					schoolId: 1,
					role: "admin",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("users", null, {});
	},
};
