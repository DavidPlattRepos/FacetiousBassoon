import React from 'react';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
// Layouts
import MainNavBar from './containers/main-navbar';
// import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './containers/home';
import DashboardContainer from './containers/dashboard-container';
import NewChallengeContainer from './containers/new-challenge-container';
import BrowseContainer from './containers/user-browse-container';
import OpenCVContainer from './containers/openCV-container';
// import WidgetListContainer from './components/containers/widget-list-container';
// import TodoListContainer from './components/containers/todo-list-container';
// import StaticContainer from './components/containers/static-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainNavBar}>
      <Route path='/' component={Home}/>
      <Route path='/browseChallenges' component={BrowseContainer}/>
      <Route path='/dashboard' component={DashboardContainer}/>
      <Route path='/pictureDifferences' component={OpenCVContainer}/>
      <Route path='/newChallenge' component={NewChallengeContainer}/>
    </Route>
  </Router>
);