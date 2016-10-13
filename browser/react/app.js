'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import AlbumContainer from './containers/AlbumContainer';
import ArtistsContainer from './containers/ArtistsContainer';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer} >
        <IndexRedirect to="/albums" />
        <Route path='/albums' component={AlbumsContainer} />
        <Route path='/artists' component={ArtistsContainer} />
        <Route path='/albums/:albumId' component={AlbumContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);