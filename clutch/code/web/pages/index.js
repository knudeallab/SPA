import Head from 'next/head'
import React, { useState } from 'react';
import LeftSection from 'components/LeftSection';
import RightSection from 'components/RightSection';
// import { useQuery } from '@apollo/react-hooks';
// import queries from 'configs/queries';

import styles from '../styles/Home.module.css'

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>SPA | SPA Framework</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.row}>
        <LeftSection activeTab={activeTab} setActiveTab={setActiveTab} />
        <RightSection activeTab={activeTab} />
      </div>
    </div>
  )
}

export default Home;