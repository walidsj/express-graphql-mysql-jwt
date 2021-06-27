const { makeExecutableSchema } = require("graphql-tools");
const merge = require("lodash.merge");

// Multiple files to keep your project modularised
const userSchema = require("./users");
const levelSchema = require("./levels");
const schoolSchema = require("./schools");

// mengimpor modul-modul schema, kemudian diexport ke Root index.js
const schema = makeExecutableSchema({
	typeDefs: [userSchema.typeDefs, levelSchema.typeDefs, schoolSchema.typeDefs],
	resolvers: merge(
		userSchema.resolvers,
		levelSchema.resolvers,
		schoolSchema.resolvers
	),
});

module.exports = schema;
