import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  // THIS FORMAT IS USED FOR INITLIZASTION
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: "henery johns",
  //         email: "henery59@gmail.com",
  //         phone: "12345"
  //       },
  //       {
  //         id: 2,
  //         name: "babaanoosh",
  //         email: "hentilover59@gmail.com",
  //         phone: "12345"
  //       },
  //       {
  //         id: 3,
  //         name: "analfister",
  //         email: "analfister59@gmail.com",
  //         phone: "12345"
  //       }
  //     ]
  //   };
  // }

  //  MOVED TO ACTIONS
  // deleteContact = id => {
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter(contact => contact.id !== id);
  //   this.setState({
  //     contacts: newContacts
  //   });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                // <h1>{contact.name}</h1> we want to bring our contact from our compoenent
                // this is for each property
                // <Contact
                //   key={contact.id}
                //   name={contact.name}
                //   email={contact.email}
                //   phone={contact.email}
                // />

                <Contact
                  key={contact.id}
                  contact={contact}
                  // onDeleteClickHandler={this.deleteContact.bind(
                  //   this,
                  //   contact.id
                  // )}
                /> // contact is expecting all the stuff
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
    //  ^^^ this is using Context
    // const { contacts } = this.state;
    // return (
    //   <React.Fragment>
    //     {contacts.map(contact => (
    //       // <h1>{contact.name}</h1> we want to bring our contact from our compoenent
    //       // this is for each property
    //       // <Contact
    //       //   key={contact.id}
    //       //   name={contact.name}
    //       //   email={contact.email}
    //       //   phone={contact.email}
    //       // />

    //       <Contact
    //         key={contact.id}
    //         contact={contact}
    //         onDeleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       /> // contact is expecting all the stuff
    //     ))}
    //   </React.Fragment>
    // );
  }
}
export default Contacts;
