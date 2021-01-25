import React from 'react';
import './App.css';
import { Films } from './Films/Films';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Film } from './Film/Film';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/film/:filmId">
          <Film />
        </Route>
        <Route path="/" >
          <Films />
        </Route>
      </Switch>
    </Router>
  )
}
