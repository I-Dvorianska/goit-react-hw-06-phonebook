import { ADD, DELETE, FILTER } from "actionsTypes";
import { combineReducers } from "redux";

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      return state.filter((contact) => {
        return contact.id !== action.payload;
      });

    default:
      return state;
  }
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER:
      return (state = action.payload);

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactsReducer;
