// server.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

// Set up GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true, // Enable GraphiQL interface
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
