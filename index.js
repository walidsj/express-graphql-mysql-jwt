const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const jwt = require("express-jwt");
const cors = require("cors");
require("dotenv").config();
const schema = require("./src/schema");

// create express app
const app = express();

// test dan CORS handling
app.use(cors());
app.get("/", (req, res) =>
	res.send(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);

// auth middleware
const auth = jwt({
	secret: new Buffer.from(process.env.JWT_SECRET).toString("base64"),
	credentialsRequired: false,
});

// endpoint graphql
app.use(auth);
const server = new ApolloServer({
	schema,
	context: ({ req }) => {
		const user = req.user || null;
		return { user };
	},
});
server.applyMiddleware({ app, path: "/graphql" });

// jalankan server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
	console.log(
		`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
	)
);
