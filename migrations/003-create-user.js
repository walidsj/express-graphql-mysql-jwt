module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
				unique: true,
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			phoneNumber: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			levelId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: "levels", // nama database
					key: "id",
				},
			},
			schoolId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: "schools", // nama database
					key: "id",
				},
			},
			role: {
				allowNull: false,
				type: Sequelize.ENUM("user", "provider", "admin"),
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Users");
	},
};
