import React from 'react';
import Template from './components/Template/Template';
import Login from './components/Login/Login';
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.App}>
      <Login />
    </div>
  );
}

export default App;
