import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";

import PostEditor from "../PostEditor/PostEditor";

import "./Post.css";

import { deletePost, editPost } from "../../actions/postActions";

const Display = props => {
  return (
    <div>
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
    </div>
  );
};

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleEdit() {
    this.setState({ edit: true });
  }

  handleConfirm(post) {
    this.props.editPost(post);
    this.setState({ edit: false });
  }

  handleDelete(id) {
    this.props.deletePost(id);
  }

  render() {
    const { post } = this.props;
    return (
      <Card>
        <Card.Body>
          {!this.state.edit ? (
            <div>
              <Display post={post} />
              <div className="pull-right">
                <Button variant="btn-primary" onClick={this.handleEdit}>
                  <i className="fas fa-pen" />
                </Button>
                <Button
                  variant="btn-danger"
                  onClick={() => this.handleDelete(post.id)}
                >
                  <i className="far fa-trash-alt" />
                </Button>
              </div>
            </div>
          ) : (
            <PostEditor
              post={post}
              handler={this.handleConfirm}
              editing={true}
            />
          )}
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.byId
  };
};

export default connect(
  mapStateToProps,
  { deletePost, editPost }
)(Post);
