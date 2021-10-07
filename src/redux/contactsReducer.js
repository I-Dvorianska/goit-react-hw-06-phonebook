import { ADD, DELETE, FILTER } from "./actionsTypes";
import { combineReducers } from "redux";

const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case DELETE:
      return state.filter((contact) => {
        return contact.id !== payload;
      });

    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER:
      return (state = payload);

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactsReducer;
