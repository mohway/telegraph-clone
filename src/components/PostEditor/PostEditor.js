import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { addPost, editPost } from "../../actions/postActions";
import uuid from "uuid";

import "./PostEditor.css";

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      id: "",
      editing: props.editing || false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAutoExpansion = this.handleAutoExpansion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Directs any input in the forms into the state
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    const { title, body, id } = this.state;
    if (this.state.editing) {
      this.props.handler({ title, body, id });
    } else {
      const post = { title, body, id: uuid() };

      this.props.addPost(post);
      this.setState({ title: "", body: "" });
    }
  }

  // Automatically vertically expands textarea form
  handleAutoExpansion(field) {
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

  // Expand the form on mount, add listener for textarea input
  componentDidMount() {
    if (this.state.editing) {
      this.setState(
        {
          title: this.props.post.title,
          body: this.props.post.body,
          id: this.props.post.id
        },
        () => {
          this.handleAutoExpansion(document.getElementById("text"));
        }
      );
    }

    document.addEventListener(
      "input",
      event => {
        if (event.target.tagName.toLowerCase() !== "textarea") return;
        this.handleAutoExpansion(event.target);
      },
      false
    );
  }

  render() {
    const { title, body } = this.state;

    return (
      <Form className="container">
        <Form.Group className="inline-title-submit">
          <Form.Control
            placeholder="title"
            id="title"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
          <Button
            variant="outline-dark"
            id="submit"
            disabled={this.state.title === "" || this.state.body === ""}
            onClick={this.handleSubmit}
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
  {
    addPost,
    editPost
  }
)(PostEditor);
