import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from "../Types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: "personal",
        id: "5e2c103888f9237c17812eaf",
        name: "Georgi Ivanov Gonzo Number 1",
        email: "Gonzo@gmail.com",
        phone: "2233-5544-2211",
        user: "5e1c820b868c8443f7ffc02d",
        date: "2020-01-25T09:54:00.620Z"
      },
      {
        type: "personal",
        id: "5e2c102788f9237c17812eae",
        name: "Ivan Zvezdev",
        email: "zvzdev@gmail.com",
        phone: "2233-5544-2211",
        user: "5e1c820b868c8443f7ffc02d",
        date: "2020-01-25T09:53:43.426Z"
      },
      {
        type: "professional",
        id: "5e2c101c88f9237c17812ead",
        name: "Harry Potter",

        user: "5e1c820b868c8443f7ffc02d",
        date: "2020-01-25T09:53:32.655Z"
      },
      {
        type: "personal",
        id: "5e2c0e9b88f9237c17812eac",
        name: "Ted Johnson",
        email: "ted@gmail.com",
        phone: "2233-5544-2211",
        user: "5e1c820b868c8443f7ffc02d",
        date: "2020-01-25T09:47:07.180Z"
      },
      {
        type: "professional",
        id: "5e2c0e5988f9237c17812eab",
        name: "Sara Smith",
        email: "sarah@gmail.com",
        phone: "2233-5544-2211",
        user: "5e1c820b868c8443f7ffc02d",
        date: "2020-01-25T09:46:01.943Z"
      }
    ],
    current: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear  Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        setCurrent,
        clearCurrent,
        addContact,
        deleteContact,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
