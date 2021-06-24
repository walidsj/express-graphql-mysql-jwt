const { makeExecutableSchema } = require("graphql-tools");
const merge = require("lodash.merge");

// Multiple files to keep your project modularised

const userSchema = require("./users");
// const roleSchema = require("./role");

// mengimpor modul-modul schema, kemudian diexport ke Root index.js
const schema = makeExecutableSchema({
	typeDefs: [
		userSchema.typeDefs,
		// roleSchema.typeDefs,
	],
	resolvers: merge(
		userSchema.resolvers
		// roleSchema.resolvers,
	),
});

module.exports = schema;
