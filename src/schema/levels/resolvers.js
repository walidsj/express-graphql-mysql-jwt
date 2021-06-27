const { Level } = require("../../../models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

const resolvers = {
	Query: {
		async level(_, { id }) {
			return await Level.findByPk(id);
		},
		async levels() {
			return await Level.findAll();
		},
	},

	Mutation: {},
};

module.exports = resolvers;
