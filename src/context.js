import React, { Component } from "react";
// import PropTypes from 'prop-types'

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "henery johns",
        email: "henery59@gmail.com",
        phone: "12345"
      },
      {
        id: 2,
        name: "babaanoosh",
        email: "hentilover59@gmail.com",
        phone: "12345"
      },
      {
        id: 3,
        name: "analfister",
        email: "analfister59@gmail.com",
        phone: "12345"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
