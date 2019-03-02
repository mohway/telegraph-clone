import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles/Navigation.css";

export class Navigation extends Component {
  render() {
    return (
      <Router>
        <div id="navigation">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Telegraph</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#posts">
                <Link to="/posts/">Posts</Link>
              </Nav.Link>
              <Nav.Link href="#addpost">
                <Link to="/addpost/">Add Post</Link>
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>

        {/*<Route path="/posts/" component={Posts} />
        <Route path="/addpost" component={PostForm} />*/}
      </Router>
    );
  }
}

export default Navigation;
