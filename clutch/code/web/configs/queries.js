import { gql } from 'apollo-boost';

// const GET_TEST = gql`
// `;

const CREATE_DATA = gql`
  mutation CreateData($cluster: String, $scienceAppName: String, $jobExecTime: Float, $simulationId: String, $jobStatus: String, $jobData: String){
    createEdisonData(cluster: $cluster, scienceAppName: $scienceAppName, jobExecTime: $jobExecTime, simulationId: $simulationId, jobStatus: $jobStatus, jobData: $jobData)
  }
`;

const UPDATE_R = gql`
  mutation UpdateR($inputRData: String) {
    updateR(inputRData: $inputRData)
  }
`;

const UPDATE_TIME = gql`
  mutation UpdateTime($edisonDataId: String, $execTime: Float){
    updateTime(edisonDataId: $edisonDataId, execTime: $execTime)
  }
`;

const queries = {
  CREATE_DATA,
  UPDATE_R,
  UPDATE_TIME,
}

export default queries;