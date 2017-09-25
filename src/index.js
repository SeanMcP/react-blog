import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/BaseLayout';
import Feed from './components/Feed';
import Compose from './components/Compose';
import View from './components/View';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Feed}/>
        <Route path='/compose' component={Compose}/>
        <Route path='/view' component={View}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
