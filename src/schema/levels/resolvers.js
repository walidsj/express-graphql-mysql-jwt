const { Level } = require("../../../models");
require("dotenv").config();

const schoolsDataLoader = require("../../loaders/schools-loader.js");

const resolvers = {
	Query: {
		async level(_, { id }) {
			return await Level.findByPk(id);
		},
		async levels() {
			return await Level.findAll();
		},
	},
	Level: {
		async schools(level) {
			return await schoolsDataLoader.clearAll().load(level.id);
		},
	},
	Mutation: {},
};

module.exports = resolvers;
