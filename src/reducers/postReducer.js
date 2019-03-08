import { ADD_POST, EDIT_POST, DELETE_POST } from "../actions/types";

const initialState = {
  byId: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        byId: [action.payload, ...state.byId]
      };
    case DELETE_POST:
      return {
        ...state,
        byId: state.byId.filter(post => {
          return post.id !== action.payload;
        })
      };
    case EDIT_POST:
      return {
        ...state,
        byId: state.byId.map(post => {
          return post.id === action.payload.id ? action.payload : post;
        })
      };
    default:
      return state;
  }
}
