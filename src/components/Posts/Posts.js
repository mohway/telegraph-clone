import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import "./Posts.css";
import { Card } from "react-bootstrap";

export class Posts extends Component {
  render() {
    console.log(this.props.posts.posts);

    const getPosts = this.props.posts.posts.map(post => (
      <Card>
        <Card.Body>
          <div key={uuid()}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Card.Body>
      </Card>
    ));

    const content =
      getPosts.length === 0 ? <h1>No posts here yet.</h1> : getPosts;

    return <div className="container posts">{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  null
)(Posts);
