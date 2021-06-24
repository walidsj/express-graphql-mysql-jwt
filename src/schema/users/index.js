const typeDefs = require("./user.types");
const resolvers = require("./user.resolvers");

// mengimpor modul typeDefs & resolvers, kemudian diexport ke schema
module.exports = {
	typeDefs,
	resolvers,
};
