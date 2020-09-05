const EdisonDataModel = require('../../models/edisonData');

const createEdisonData = ({ 
  cluster,
  scienceAppName,
  simulationId,
  jobExecTime,
  jobStatus,
  jobData,
}) => {
  const newData = new EdisonDataModel({
    cluster,
    scienceAppName,
    simulationId,
    jobExecTime,
    jobStatus,
    jobData,
    createdAt: new Date().getTime(),
  });

  newData.save();

  return newData._id;
}

module.exports = createEdisonData;