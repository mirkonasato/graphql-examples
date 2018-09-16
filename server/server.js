const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    message: String
  }
`;

const resolvers = {
  Query: {
    message: () => 'Hello from the GraphQL server!'
  }
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen(9000)
  .then((serverInfo) => console.info(`Server running at ${serverInfo.url}`));
