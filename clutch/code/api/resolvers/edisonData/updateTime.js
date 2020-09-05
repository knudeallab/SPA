const EdisonDataModel = require('../../models/edisonData');

const updateTime = async ({ edisonDataId, execTime }) => {
  await EdisonDataModel.updateOne({ _id: edisonDataId }, { jobExecTime: execTime });

  return edisonDataId;
}

module.exports = updateTime;