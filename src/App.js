import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navigation />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
