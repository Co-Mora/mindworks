import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()


const Navigator = () => {

  return (
    <BrowserRouter history= {history}>
    <Switch>
    <Redirect exact from = '/' to = '/dashboard' />
      // <Route exact path='/dashboard' render={props => <Analytics {...props} />} />
      <Route exact path = '*' component = { NotFound } />
        </Switch>
    </BrowserRouter>
  )
};

export default Navigator;