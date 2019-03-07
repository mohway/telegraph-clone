import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navigation.css";

import Posts from "../Posts/Posts";
import PostForm from "../PostForm/PostForm";

export class Navigation extends Component {
  render() {
    return (
      <Router>
        <div id="navigation">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/">Telegraph</Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/posts/">Posts</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/">Add Post</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>Register</Nav.Link>
            </Nav>
          </Navbar>
          <Route path="/" exact component={PostForm} />
          <Route path="/posts/" component={Posts} />
        </div>
      </Router>
    );
  }
}

export default Navigation;
