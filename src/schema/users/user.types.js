const { gql } = require("apollo-server-express");

// Define our schema using the GraphQL schema language
const typeDefs = gql`
	type User {
		id: Int!
		email: String!
		name: String!
		npm: String!
		phone: String!
	}

	type Query {
		me: User
	}

	type Mutation {
		register(
			email: String!
			password: String!
			name: String!
			npm: String!
			phone: String!
		): String

		login(email: String!, password: String!): String
	}
`;
module.exports = typeDefs;
