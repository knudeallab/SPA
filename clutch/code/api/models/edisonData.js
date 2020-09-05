const mongoose = require('mongoose');
const collection = 'edisonData';

const schema = {
  cluster: { type: String },
  scienceAppName: { type: String },
  simulationId: { type: String },
  jobExecTime: { type: Number },
  jobStatus: { type: String },
  jobData: { type: String },
}

const EdisonDataModel = mongoose.model(collection, schema);

module.exports = EdisonDataModel;