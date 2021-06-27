const typeDefs = require("./level.types");
const resolvers = require("./level.resolvers");

// mengimpor modul typeDefs & resolvers, kemudian diexport ke schema
module.exports = {
	typeDefs,
	resolvers,
};
