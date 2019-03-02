import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import "./styles/PostForm.css";

export class PostForm extends Component {
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
            <Form.Control placeholder="Title" />
            <Button variant="outline-dark">Post</Button>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="1" placeholder="Text" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default PostForm;
