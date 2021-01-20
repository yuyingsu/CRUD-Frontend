import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Campuses from './components/Campuses';
import Students from './components/Students';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router basename={window.location.pathname || ''}>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/campuses" component={Campuses}/>
            <Route path="/students" component={Students}>
            </Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
