const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class School extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	School.init(
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					len: [4, 255],
				},
			},
			imgUrl: {
				allowNull: true,
				type: DataTypes.STRING,
				validate: {
					max: 255,
				},
			},
			levelId: {
				allowNull: false,
				type: DataTypes.INTEGER,
				validate: {
					isInt: true,
				},
			},
		},
		{
			sequelize,
			modelName: "School",
		}
	);
	return School;
};
