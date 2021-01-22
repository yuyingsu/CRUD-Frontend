import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer } from '../containers';
import AddCampus from '../views/AddCampus';
import AddStudent from '../views/AddStudent';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
      <Route path="/campus/add" component = {AddCampus} />
      <Route path="/student/add" component = {AddStudent} />
    </Switch>
  )
}

export default RoutesView;
