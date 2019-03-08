import { ADD_POST, EDIT_POST, DELETE_POST } from "../actions/types";

const initialState = {
  byId: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      console.log(action.payload);
      return {
        ...state,
        byId: [...state.byId, action.payload]
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
          console.log(post, action.payload);
          return post.id === action.payload.id ? action.payload : post;
        })
      };
    default:
      return state;
  }
}
