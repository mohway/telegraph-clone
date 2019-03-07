import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import "./Posts.css";
import { Card, Button } from "react-bootstrap";

import { deletePost } from "../../actions/postActions";

export class Posts extends Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    console.log("hello");
  }

  handleDelete(id, e) {
    console.log(id);
    this.props.deletePost(id);
  }

  render() {
    console.log(this.props.posts.posts);

    const getPosts = this.props.posts.posts.map(post => (
      <Card>
        <Card.Body>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
          <div className="pull-right">
            <Button
              variant="outline-primary"
              onClick={() => this.handleEdit(post.id)}
            >
              Edit
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => this.handleDelete(post.id)}
            >
              Delete
            </Button>
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
  { deletePost }
)(Posts);
