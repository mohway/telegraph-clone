import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navigation.css";

import Posts from "../Posts/Posts";
import PostEditor from "../PostEditor/PostEditor";

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
              <Nav.Item>
                <Link to="/posts/">Posts</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">Add Post</Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>Register</Nav.Link>
            </Nav>
          </Navbar>
          <Route path="/" exact component={PostEditor} />
          <Route path="/posts/" component={Posts} />
        </div>
      </Router>
    );
  }
}

export default Navigation;
