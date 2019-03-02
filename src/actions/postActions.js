import { ADD_POST } from "../constants/action-types";

export const addPost = post => dispatch => {
  dispatch({
    type: ADD_POST,
    payload: post
  });
};
