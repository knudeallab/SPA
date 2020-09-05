const { buildSchema } = require('graphql');

const Query = require('./Query');
const Mutation = require('./Mutation');
const EdisonData = require('./EdisonData');

const typeDefs = buildSchema(`
  type Query ${Query}
  type Mutation ${Mutation}
  type EdisonData ${EdisonData}
`);

module.exports = typeDefs;
