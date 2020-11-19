import './app.styles.css';

import React from 'react';

import { Header } from '../header/header.component';
import { Home } from '../home/home.component';

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};
