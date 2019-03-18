import React, { Component } from 'react';
//import { Provider } from 'react-redux';
import Template from './Template';
//import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
  //    <Provider store={store}>
  <Template/>
//      </Provider>
    );
  }
}

export default App;
