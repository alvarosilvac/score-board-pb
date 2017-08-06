import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'; 
import HomepageComponent from './components/home/HomepageComponent';
import SingleGameComponent from './components/game/single/SingleGameComponent';
import SplitDeckComponent from './components/game/split-deck/SplitDeckComponent';


ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={HomepageComponent}/>
      <Route path='/game/single' component={SingleGameComponent}/>
      <Route path='/game/split-deck' component={SplitDeckComponent}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
