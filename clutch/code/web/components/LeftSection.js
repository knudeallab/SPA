import React, { useState } from 'react';

import styles from 'styles/LeftSection.module.css';

const LeftSection = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles['left-section']}>
      <div className={styles['tab-wrapper']}>
        {
          activeTab === 0
          ? (
            <div className={styles.row} onClick={() => setActiveTab(0)}>
              <div className={styles.label}>Simulation</div>
              <img src='/icon/circle-arrow.png' className={styles['icon']} />
            </div>
          )
          : <div className={styles.label} onClick={() => setActiveTab(0)}>Simulation</div>
        }
        {
          activeTab === 1
          ? (
            <div className={styles.row} onClick={() => setActiveTab(1)}>
              <div className={styles.label}>Ranking</div>
              <img src='/icon/circle-arrow.png' className={styles['icon']} />
            </div>
          )
          : <div className={styles.label} onClick={() => setActiveTab(1)}>Ranking</div>
        }
      </div>
      <div className={styles['logo']}>SPA Framework</div>
    </div>
  )
}

export default LeftSection;