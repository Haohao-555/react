/*
 * @Date: 2022-11-13 14:43:42
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \react-app-ts\src\App.tsx
 */
import React from 'react';

import styles from './App.module.css';
import { Header, Footer } from './components';
function App() {
  return (
    <div className={styles.App}>
       <Header />
       <Footer />
    </div>
  );
}

export default App;
