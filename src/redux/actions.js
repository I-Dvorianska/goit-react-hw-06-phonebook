import * as actionTypes from "./actionsTypes";
import { v4 as uuidv4 } from "uuid";

export const addContact = (contactName, number) => {
  return {
    type: actionTypes.ADD,
    payload: {
      id: uuidv4(),
      contactName,
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

export const getFilterName = (value) => {
  return {
    type: actionTypes.FILTER,
    payload: value,
  };
};
