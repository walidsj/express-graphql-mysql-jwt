const { gql } = require("apollo-server-express");

// Define our schema using the GraphQL schema language
const typeDefs = gql`
	extend type Query {
		school(id: ID!): School
		schools: [School]
	}

	type School {
		id: ID!
		name: String!
		imgUrl: String

		level: Level
	}
`;
module.exports = typeDefs;
