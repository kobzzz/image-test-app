import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage, HistoryPage } from './containers';
import { Header, NotFound } from './components';

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <Header />
      <div className='app__wrapper'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/history' component={HistoryPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
