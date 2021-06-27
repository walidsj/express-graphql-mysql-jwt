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
		userSignup(input: RegisterInput!): String
		userSignin(input: LoginInput!): String
	}

	input RegisterInput {
		email: String!
		password: String!
		name: String!
		phoneNumber: String
		schoolId: Int!
	}

	input LoginInput {
		email: String!
		password: String!
	}
`;
module.exports = typeDefs;
