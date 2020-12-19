import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';

import { Routes, RouteType } from '../../routes';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="bg-gray-100">
        <Header />
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
