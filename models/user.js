const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail: true,
					max: 255,
				},
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING,
				validate: {
					max: 255,
				},
			},
			name: {
				type: DataTypes.STRING,
				validate: {
					len: [4, 255],
				},
			},
			phoneNumber: {
				type: DataTypes.STRING,
				validate: {
					isNumeric: true,
					len: [9, 13],
				},
			},
			schoolId: {
				type: DataTypes.INTEGER,
				validate: {
					isInt: true,
				},
			},
			role: {
				type: DataTypes.ENUM("user", "provider", "admin"),
				validate: {
					isIn: [["user", "provider", "admin"]],
				},
			},
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
