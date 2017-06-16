import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import App from './App';
import Marvel from './containers/Marvel';
import Refactoring from './containers/Refactoring';
import Questions from './containers/Questions';

const router = (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/marvel" component={Marvel}/>
      <Route path="/refactoring" component={Refactoring}/>
      <Route path="/questions" component={Questions}/>
    </div>
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
