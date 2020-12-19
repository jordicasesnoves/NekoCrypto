import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Routes, RouteType } from '../../routes';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="">
        <Switch>
          {Routes.map((route: RouteType) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
