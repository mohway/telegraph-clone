import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import PostForm from "./components/PostForm/PostForm";

import store from "./store.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
        </div>
      </Provider>
    );
  }
}

export default App;
