const EdisonDataModel = require('../../models/edisonData');

const getEdisonData = async ({ edisonDataId }) => {
  const data = await EdisonDataModel.findOne({ _id: edisonDataId });

  return data;
}

module.exports = getEdisonData;