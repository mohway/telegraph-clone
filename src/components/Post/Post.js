import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Form } from "react-bootstrap";

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

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.post.title,
      body: props.post.body,
      id: props.post.id
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.autoExpand = this.autoExpand.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  autoExpand(field) {
    field.style.height = "inherit";
    const computed = window.getComputedStyle(field);

    const height =
      parseInt(computed.getPropertyValue("border-top-width"), 10) +
      parseInt(computed.getPropertyValue("padding-top"), 10) +
      field.scrollHeight +
      parseInt(computed.getPropertyValue("padding-bottom"), 10) +
      parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    field.style.height = height + "px";
  }

  componentDidMount() {
    this.autoExpand(document.getElementById("text"));
  }

  render() {
    const { title, body, id } = this.state;

    document.addEventListener(
      "input",
      event => {
        if (event.target.tagName.toLowerCase() !== "textarea") return;
        this.autoExpand(event.target);
      },
      false
    );

    return (
      <div>
        <Form>
          <Form.Group className="inline-title-submit">
            <Form.Control
              placeholder="Title"
              id="title"
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />
            <Button
              variant="outline-dark"
              onClick={() => this.props.handler({ title, body, id })}
            >
              Submit
            </Button>
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              id="text"
              name="body"
              rows="1"
              placeholder="Text"
              value={body}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

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
    console.log(this.state);
  }

  handleConfirm(post) {
    console.log("hello");
    this.props.editPost(post);
    this.setState({ edit: false });
  }

  handleDelete(id) {
    console.log(id);
    this.props.deletePost(id);
  }

  render() {
    const { post } = this.props;
    console.log(post);
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
            <EditForm post={post} handler={this.handleConfirm} />
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
