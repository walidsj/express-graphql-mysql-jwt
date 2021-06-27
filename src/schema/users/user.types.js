const { gql } = require("apollo-server-express");

// Define our schema using the GraphQL schema language
const typeDefs = gql`
	type Query {
		me: User
	}

	type User {
		id: ID!
		email: String!
		name: String!
		phoneNumber: String
		role: String!

		level: Level
		school: School
	}

	type Mutation {
		register(
			email: String!
			password: String!
			name: String!
			phoneNumber: String
			levelId: Int!
			schoolId: Int!
		): String

		login(email: String!, password: String!): String
	}
`;
module.exports = typeDefs;
