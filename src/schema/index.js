const { makeExecutableSchema } = require("graphql-tools");
const merge = require("lodash.merge");

// Multiple files to keep your project modularised
const levelTypeDef = require("./levels/types.js");
const levelResolver = require("./levels/resolvers.js");

const userTypeDef = require("./users/types.js");
const userResolver = require("./users/resolvers.js");

const schoolTypeDef = require("./schools/types.js");
const schoolResolver = require("./schools/resolvers.js");

// mengimpor modul-modul schema, kemudian diexport ke Root index.js
const schema = makeExecutableSchema({
	typeDefs: [userTypeDef, levelTypeDef, schoolTypeDef],
	resolvers: merge(userResolver, levelResolver, schoolResolver),
});

module.exports = schema;
