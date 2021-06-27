const typeDefs = require("./school.types");
const resolvers = require("./school.resolvers");

// mengimpor modul typeDefs & resolvers, kemudian diexport ke schema
module.exports = {
	typeDefs,
	resolvers,
};
