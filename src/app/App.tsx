import React, { useState } from 'react';
import { REACT_URL, VITE_URL } from './constants';
import logo from '../../assets/images/logo.svg';
import styles from './App.module.scss';

export function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((_count) => _count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className={styles.link} href={REACT_URL} target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a className={styles.link} href={VITE_URL} target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}
