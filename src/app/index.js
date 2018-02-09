import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory, withRouter} from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import GoogleApiWrapper from './components/map/Map';
import SignIn from './components/authentification/signIn/SignIn';
import reducers from './reducers';
import './components/bundle.scss';
import CreateNewUser from "./components/authentification/signIn/CreateNewUser";
import {requireAuthentication} from "./components/authentification/routeChecker/RouteChecker";

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={SignIn}>
            <Route path="/signup" component={CreateNewUser} />;
        </Route>
        <Route path="/legume" component={requireAuthentication(App)}>
            <IndexRoute component={requireAuthentication(Home)} />;
            <Route path="/about" component={requireAuthentication(About)} />;
            <Route path="/map" component={requireAuthentication(GoogleApiWrapper)} />
        </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'));
