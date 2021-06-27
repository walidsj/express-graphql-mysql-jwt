const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Level extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Level.init(
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					len: [4, 255],
				},
			},
			description: {
				allowNull: true,
				type: DataTypes.STRING,
				validate: {
					max: 255,
				},
			},
			imgUrl: {
				allowNull: true,
				type: DataTypes.STRING,
				validate: {
					max: 255,
				},
			},
		},
		{
			sequelize,
			modelName: "Level",
		}
	);
	return Level;
};
