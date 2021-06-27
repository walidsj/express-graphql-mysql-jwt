module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Schools", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			imgUrl: {
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
		await queryInterface.dropTable("Schools");
	},
};
