import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';
import cache from 'configs/cache';

const uri = 'http://localhost:4000/graphql';

const getApolloClient = () =>
  new ApolloClient({
    uri,
    cache,
    fetch,
  });

export default getApolloClient;