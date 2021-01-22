import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Campuses from './containers/Campuses';
import { connect } from 'react-redux';
import Students from './containers/Students';
import { fetchCampuses, fetchStudents } from './actions/actions';
import Campus from './containers/Campus';
import Student from './containers/Student';
import NotFound from './components/NotFound';
class App extends Component {
  componentDidMount () {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <div className="App">
       <Router>
          <Home/>
          <div>
            <Switch>
            <Route exact path="/" component={Campuses}/>
            <Route exact path="/campuses" component={Campuses}/>
            <Route exact path="/students" component={Students}/>
            <Route path='/campuses/:id' exact render={({match}) =>  <Campus id={match.params.id} /> } />
            <Route path='/students/:id' exact render={({match}) =>  <Student id={match.params.id} /> } />
            <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses()),
    dispatch(fetchStudents())
  }
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(App);