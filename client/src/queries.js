import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:9000'
  })
});

export async function getTime() {
  const {data: {time}} = await client.query({
    query: gql`
      query TimeQuery {
        time
      }
    `
  });
  return new Date(time);
}
