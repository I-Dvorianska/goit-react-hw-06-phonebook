import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, getFilterName } from "./actions";

const itemReducer = createReducer([], {
  [addContact.type]: (state, action) => [...state, action.payload],
  [deleteContact.type]: (state, action) => {
    return state.filter((contact) => {
      return contact.id !== action.payload;
    });
  },
});
const filterReducer = createReducer("", {
  [getFilterName.type]: (state, action) => (state = action.payload),
});

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactsReducer;
