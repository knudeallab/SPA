import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Dropdown from 'components/Dropdown';

import { CLUSTER_BOX_OPTIONS } from 'configs/constants';

import styles from 'styles/RightSection.module.css';
import queries from 'configs/queries';

const RightSection = ({ activeTab }) => {
  const [result, setResult] = useState("Click on Prediction");
  const [cluster, setCluster] = useState('');
  const [scienceAppName, setScienceAppName] = useState('');
  const SCIENCE_APPNAME_BOX_OPTIONS = ["1", "2", "3", "4", "5"];
  const PARAMETERS = [1, 2, 3, 4, 5,6,7];

  const [createData] = useMutation(queries.CREATE_DATA);
  const [updateR] = useMutation(queries.UPDATE_R);
  const [updateTime] = useMutation(queries.UPDATE_TIME);

  const handlePrediction = async() => {
    console.log({
      cluster,
      scienceAppName,
      simulationId: '1',
      jobExecTime: 1.0,
      jobStatus: '1',
      jobData: '1',
    })
    const start = new Date().getTime();
    createData({
      variables: {
        cluster,
        scienceAppName,
        simulationId: '1',
        jobExecTime: 1.0,
        jobStatus: '1',
        jobData: '1',
      }
    })
    const r = await updateR();
    const gap = new Date().getTime() - start;
    console.log(r);
    setResult((gap / 1000).toFixed(3));
    updateTime({
      variables: {
        edisonDataId: "5f42a90b5606dc47f74a336a",
        execTime: Number((gap / 1000).toFixed(3)),
      }
    })
  }

  return (
    <div className={styles['right-section']}>
      <div className={styles['right-section-input-section']}>
        <div className={styles['right-section-dropdown-wrapper']}>
          <div className={styles['right-section-input-label']}>Cluster Box</div>
          <Dropdown data={CLUSTER_BOX_OPTIONS} setValue={setCluster} />
        </div>
        <div className={styles['right-section-dropdown-wrapper']}>
          <div className={styles['right-section-input-label']}>Science App Name Box</div>
          <Dropdown data={SCIENCE_APPNAME_BOX_OPTIONS} setValue={setScienceAppName} />
        </div>
      </div>
      <div className={styles['right-section-btn-wrapper']}>
        <div className={styles['right-section-btn']}>Load</div>
      </div>
      {
        activeTab === 0
          ? (
            <>
              <div className={styles.ttitle}>Prameter Table</div>
              <div className={styles['right-section-simulation-table-section']}>
                <div className={styles.thead}>
                  <div className={styles.th}>Prameter</div>
                  <div className={styles['th-last']}>Value</div>
                </div>
                {
                  PARAMETERS.map((parameter, index) => (
                    <div className={styles.tr}>
                      <div className={styles.td}>aaaaaaaaaa</div>
                      <div className={styles['td-last']}>aaaaaaaaaa</div>
                    </div>
                  ))
                }
              </div>
              <div className={styles['right-section-btn-end-wrapper']}>
                <div className={styles['right-section-btn-end']} onClick={handlePrediction}>Prediction</div>
              </div>
              <div className={styles['right-section-result-section']}>
                <div className={styles['result-label-wrapper']}>
                  <img src='/icon/arrow-right.png' className={styles['icon']} />
                  <div className={styles['result-label']}>RESULT</div>
                </div>
                <div className={styles[`result-value${result === "Click on Prediction" ? '' : '-active'}`]} onClick={result === 'Click on Prediction' ? () => alert('Click on Prediction') : ''}>
                  {result === 'Click on Prediction' ? 'Click on Prediction' : `${result}s`}
                </div>
              </div>
            </>
          )
          : (
            <>
              <div className={styles.ttitle}>Prameter Ranking</div>
              <div className={styles['right-section-ranking-table-section']}>
                <div className={styles.thead}>
                  <div className={styles.th}>Prameter</div>
                  <div className={styles.th}>Value</div>
                  <div className={styles['th-last']}>Count</div>
                </div>
                {
                  PARAMETERS.map((parameter, index) => (
                    <div className={styles.tr}>
                      <div className={styles.td}>aaaaaaaaaa</div>
                      <div className={styles.td}>aaaaaaaaaa</div>
                      <div className={styles['td-last']}>aaaaaaaaaa</div>
                    </div>
                  ))
                }
              </div>
            </>
          )
      }
    </div>
  )
}

export default RightSection;