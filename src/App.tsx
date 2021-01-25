import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Films from './Films/Films';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import Film from './Film/Film';


const queryClient = new QueryClient()

 const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
         <Switch>
          <Route path="/film/:filmId">
            <Film />
          </Route>
          <Route path="/">
            <Films />
          </Route>
        </Switch>
    </QueryClientProvider> 
  )
}


 

 



export default App;
