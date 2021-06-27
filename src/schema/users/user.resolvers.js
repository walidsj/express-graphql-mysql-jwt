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
			return await Level.findByPk(user.levelId);
		},
		async school(user, args, context, info) {
			return await School.findByPk(user.schoolId);
		},
	},

	Mutation: {
		// Handle user signup
		async register(
			_,
			{ email, password, name, phoneNumber, levelId, schoolId }
		) {
			const user = await User.create({
				email,
				password: await bcrypt.hash(password, 10),
				name,
				phoneNumber,
				levelId,
				schoolId,
				role: "user",
			});

			return jsonwebtoken.sign(
				{ id: user.id, email: user.email, role: user.role },
				new Buffer.from(process.env.JWT_SECRET).toString("base64"),
				{ expiresIn: "30d" }
			);
		},

		// Handles user login
		async login(_, { email, password }) {
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
