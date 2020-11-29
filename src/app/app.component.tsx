import './app.styles.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ApplicationPage } from '../application-page/application-page.component';
import { Header } from '../header/header.component';
import { ProjectPage } from '../project-page/project-page.component';

export const App = (): JSX.Element => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/application">
            <ApplicationPage />
          </Route>
          <Route path="/">
            <ProjectPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
