import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Messages from './Messages';
import About from './About';
import Navbar from './Navbar';
import Login from './Login';

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>
  ),
  document.getElementById('root')
);
