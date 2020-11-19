import './app.styles.css';

import { Button } from '@material-ui/core';
import React from 'react';

export const App = (): JSX.Element => {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
};
