import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './container/Home';
import Register from './container/Register';
import Login from './container/Login';
import NewsList from './container/NewsList';
import News from './container/News';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' name='Home' component={ Home } />
          <Route path='/register' name='Register' component={ Register } />
          <Route path='/login' name='Login' component={ Login } />
          <Route path='/newsList/:category' name='News list' component={ NewsList } />
          <Route path='/news/:id' name='News' component={ News } />
        </Switch> 
      </Router>
    );
  }
}

export default App