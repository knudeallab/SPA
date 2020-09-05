const Mutation = `
  {
    createEdisonData(cluster:String, scienceAppName:String, simulationId:String, jobExecTime:Float, jobStatus:String, jobData: String):String
    updateR(inputRData: String):String
    updateTime(edisonDataId: String, execTime: Float):String
  }
`;

module.exports = Mutation;