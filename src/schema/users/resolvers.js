const { User, Level, School } = require("../../../models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();

const resolvers = {
	Query: {
		// fetch the profile of currently authenticated user
		async me(_, args, { user }) {
			// make sure user is loggedin
			if (!user) throw new Error("You are not authenticated!");

			// user is authenticated
			return await User.findByPk(user.id);
		},
	},

	User: {
		async level(user, args, context, info) {
			const school = await School.findByPk(user.schoolId);
			return await Level.findByPk(school.levelId);
		},
		async school(user, args, context, info) {
			return await School.findByPk(user.schoolId);
		},
	},

	Mutation: {
		// Handle user signup
		async userSignup(_, { input }) {
			const user = await User.create({
				...input,
				password: await bcrypt.hash(input.password, 10),
				role: "user",
			});

			return jsonwebtoken.sign(
				{ id: user.id, email: user.email, role: user.role },
				new Buffer.from(process.env.JWT_SECRET).toString("base64"),
				{ expiresIn: "30d" }
			);
		},

		// Handles user login
		async userSignin(_, { input }) {
			const { email, password } = input;

			const user = await User.findOne({ where: { email } });
			if (!user) throw new Error("No user with that email");

			const valid = await bcrypt.compare(password, user.password);
			if (!valid) throw new Error("Incorrect password");

			return jsonwebtoken.sign(
				{ id: user.id, email: user.email, role: user.role },
				new Buffer.from(process.env.JWT_SECRET).toString("base64"),
				{ expiresIn: "30d" }
			);
		},
	},
};

module.exports = resolvers;
