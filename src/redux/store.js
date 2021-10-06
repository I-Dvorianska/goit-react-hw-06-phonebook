import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contactReducer";
const state = {
  contacts: {
    items: [],
    filter: "",
  },
};

const store = createStore(contactsReducer, composeWithDevTools());
export default store;
