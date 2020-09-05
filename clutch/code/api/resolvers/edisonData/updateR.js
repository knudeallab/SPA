// const EdisonDataModel = require('../../models/edisonData');
const R = require('r-script');

const updateR = ({ inputRData }) => {
  const out = R('rscripts/out.R').data().callSync();

  let status = 'Failure';
  if(out) status = 'Success';
  else status = 'Failure';

  return status;
}

module.exports = updateR;