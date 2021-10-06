import * as actionTypes from "./actionsTypes";
import { v4 as uuidv4 } from "uuid";

export const addContact = (name, number) => {
  return {
    type: actionTypes.ADD,
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: actionTypes.DELETE,
    payload: id,
  };
};

export const filterContacts = (value) => {
  return {
    type: actionTypes.FILTER,
    payload: value,
  };
};
