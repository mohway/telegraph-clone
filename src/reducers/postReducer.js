import { ADD_POST, EDIT_POST, DELETE_POST } from "../actions/types";

const initialState = {
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => {
          return post.id !== action.payload;
        })
      };
    default:
      return state;
  }
}
