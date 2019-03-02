import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";
import PropTypes from "prop-types";

import "./PostForm.css";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const post = {
      title: document.getElementById("title").value,
      body: document.getElementById("text").value
    };
    console.log(post);

    this.props.addPost(post);
  }

  render() {
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
            <Form.Control placeholder="Title" id="title" />
            <Button variant="outline-dark" onClick={this.handleClick}>
              Post
            </Button>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" id="text" rows="1" placeholder="Text" />
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
