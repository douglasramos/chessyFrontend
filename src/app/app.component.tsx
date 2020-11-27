import './app.styles.css';

import React from 'react';

import { Header } from '../header/header.component';
import { ProjectPage } from '../project-page/project-page.component';

export const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <ProjectPage />
    </div>
  );
};
