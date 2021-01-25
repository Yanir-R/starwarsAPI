import React from 'react';
import './App.css';
import Films from './Films/Films';
import { Switch, Route, Router } from "react-router-dom";
import Film from './Film/Film';




const App: React.FC = () => {
  return (
    <Switch>
        <Route path="/film/:filmId">
          <Film />
        </Route>
      <Route path="/">
          <Films />
        </Route>
    </Switch>
  )
}








export default App;
