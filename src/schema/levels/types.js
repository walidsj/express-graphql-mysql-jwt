const { gql } = require("apollo-server-express");

// Define our schema using the GraphQL schema language
const typeDefs = gql`
	extend type Query {
		level(id: ID!): Level
		levels: [Level]
	}

	type Level {
		id: ID!
		name: String!
		description: String
		imgUrl: String
	}
`;
module.exports = typeDefs;
