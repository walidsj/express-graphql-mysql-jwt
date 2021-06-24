require("dotenv").config();

const dbDetails = {
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	dialect: "mysql",

	// penambahan supaya warning "deprecated String based operators are now deprecated." ilang
	operatorsAliases: false,
};

module.exports = {
	development: dbDetails,
	production: dbDetails,
};
