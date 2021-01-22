import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AllPlayersContainer } from '../containers';
import {AllCampusesContainer, AllStudentsContainer} from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/allcampuses" component={AllCampusesContainer} />
      <Route exact path = "/allstudents" component = {AllStudentsContainer}/>
    </Switch>
  )
}

export default RoutesView;
