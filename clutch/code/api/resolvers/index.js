const createEdisonData = require('./edisonData/create');
const getEdisonData = require('./edisonData/show');
const updateR = require('./edisonData/updateR');
const updateTime = require('./edisonData/updateTime');

const resolvers = {
  getEdisonData,
  createEdisonData,
  updateR,
  updateTime,
}

module.exports = resolvers;