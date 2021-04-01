import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Post from '../modules/dashboard/views/post';
import ViewSinglePost from '../modules/dashboard/views/viewSinglePost'
import NotFound from '../modules/dashboard/views/notFound';
export const history = createBrowserHistory()


const Navigator = () => {

  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from='/' to='/posts' />
        <Route exact path='/posts' render={props => <Post {...props} />} />
        <Route exact path='/posts/:id/comment' render={props => <ViewSinglePost {...props} />} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Router>
  )
};

export default Navigator;