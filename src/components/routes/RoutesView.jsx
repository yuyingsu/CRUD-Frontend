import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AllPlayersContainer } from '../containers';
import {AllCampusesContainer, AllStudentsContainer} from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path = "/students" component = {AllStudentsContainer}/>
    </Switch>
  )
}

export default RoutesView;
