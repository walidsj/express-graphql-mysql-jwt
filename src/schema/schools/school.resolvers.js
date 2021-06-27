const { Level, School } = require("../../../models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

const resolvers = {
	Query: {
		async school(_, { id }) {
			return await School.findByPk(id);
		},
		async schools() {
			return await School.findAll();
		},
	},

	School: {
		async level(school) {
			return await Level.findByPk(school.levelId);
		},
	},

	Mutation: {},
};

module.exports = resolvers;
