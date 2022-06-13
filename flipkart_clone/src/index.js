import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing';
import { Provider } from "react-redux";
import store from './Redux/Store/Store';
import "./styles.scss"

ReactDOM.render(
  <Provider store={store}>
        <Routing />
  </Provider>
  , 
  document.getElementById('root')
);