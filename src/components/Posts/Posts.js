import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "../Post/Post";

import "./Posts.css";

export class Posts extends Component {
  render() {
    console.log(this.props.posts);

    const getPosts =
      this.props.posts.length !== 0 ? (
        this.props.posts.map(post => <Post post={post} key={post.id} />)
      ) : (
        <h1>No posts here yet.</h1>
      );

    return <div className="container posts">{getPosts}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.byId
  };
};

export default connect(
  mapStateToProps,
  null
)(Posts);
