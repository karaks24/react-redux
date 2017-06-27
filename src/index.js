import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'react-promise';
import {BrowserRouter, Route} from 'react-router-dom';

import reducers from './reducers';
import IndexPosts from './components/index_posts';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path='/' component={IndexPosts}/>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
