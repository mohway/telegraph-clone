import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";
import PropTypes from "prop-types";
import uuid from "uuid";

import "./PostForm.css";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state);
  }

  handleSubmit() {
    const { title, body } = this.state;
    const post = { title, body, id: uuid() };

    this.props.addPost(post);
    this.setState({ title: "", body: "" });
  }

  render() {
    // Handling the automatic expansion of textarea form

    const autoExpand = field => {
      field.style.height = "inherit";
      const computed = window.getComputedStyle(field);

      const height =
        parseInt(computed.getPropertyValue("border-top-width"), 10) +
        parseInt(computed.getPropertyValue("padding-top"), 10) +
        field.scrollHeight +
        parseInt(computed.getPropertyValue("padding-bottom"), 10) +
        parseInt(computed.getPropertyValue("border-bottom-width"), 10);

      field.style.height = height + "px";
    };

    document.addEventListener(
      "input",
      event => {
        if (event.target.tagName.toLowerCase() !== "textarea") return;
        autoExpand(event.target);
      },
      false
    );

    return (
      <div className="container">
        <Form>
          <Form.Group className="inline-title-submit">
            <Form.Control
              placeholder="Title"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
            <Button variant="outline-dark" onClick={this.handleSubmit}>
              Post
            </Button>
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              id="text"
              name="body"
              rows="1"
              placeholder="Text"
              value={this.state.body}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
