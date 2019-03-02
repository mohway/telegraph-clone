import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <PostForm />
      </div>
    );
  }
}

export default App;
