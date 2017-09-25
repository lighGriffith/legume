import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9i462e2_P2GcacWCo4mCgbXqTgS6xb6A"></script>
import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import GoogleApiWrapper from './components/map/Map'

import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);
const datas=JSON.parse("{\n" +
    "  \"user\": [\n" +
    "    {\n" +
    "      \"name\": \"quentin\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"name\": \"quentin1\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"name\": \"quentin2\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"name\": \"quentin3\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"name\": \"quentin4\"\n" +
    "    }\n" +
    "  ]\n" +
    "}");

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />;
        <Route path="/about" component={About} />;
          <Route path="/map" component={GoogleApiWrapper } user={datas} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
