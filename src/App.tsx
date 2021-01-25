import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Films from './Films/Films';
import { Switch, Route } from "react-router-dom";
import Film from './Film/Film';


const queryClient = new QueryClient()

const App: React.FC = () => {
  return (

    <Switch>
      <QueryClientProvider client={queryClient}>
        <Route path="/film/:filmId">
          <Film />
        </Route>
        <Route path="/">
          <Films />
        </Route>
      </QueryClientProvider>
    </Switch>
  )
}








export default App;
