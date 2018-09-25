const { ApolloServer, gql } = require('apollo-server');
const { GraphQLScalarType } = require('graphql');

const typeDefs = gql`
  scalar DateTime

  type Query {
    time: DateTime
  }
`;

const resolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'A date and time, represented as an ISO-8601 string',
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),

  Query: {
    time: () => new Date()
  }
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen(9000)
  .then((serverInfo) => console.info(`Server running at ${serverInfo.url}`));
