import { ADD_POST } from "./types";

export const addPost = post => dispatch => {
  console.log("hi?");
  dispatch({
    type: ADD_POST,
    payload: post
  });
};
