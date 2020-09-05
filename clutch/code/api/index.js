const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql2');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const cors = require('cors');

const schema = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const port = 4000;
let mongodbConnect = null;
let mysqlConnect = null;

if (mongodbConnect === null) {
  const uri =
    "mongodb+srv://admin1234:admin1234@cluster0-yjxev.gcp.mongodb.net/test?retryWrites=true&w=majority";
  mongoose.Promise = global.Promise;
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  mongodbConnect = true;
}

if (mysqlConnect === null) {
  const mysqlClient = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'test',
  });
  mysqlClient.connect();
  mysqlConnect = true;
  mysqlClient.query(`SELECT * FROM EdisonData`, function(err, result, field){
    console.log(result);
  })
}

app.use(bodyParser.json());
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
  context: "",
}))

app.listen(port, () => {
  console.log('server on');
});