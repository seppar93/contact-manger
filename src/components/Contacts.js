import React, { Component } from "react";
import Contact from "./Contact";

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
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          // <h1>{contact.name}</h1> we want to bring our contact from our compoenent
          // this is for each property
          // <Contact
          //   key={contact.id}
          //   name={contact.name}
          //   email={contact.email}
          //   phone={contact.email}
          // />

          <Contact key={contact.id} contact={contact} /> // contact is expecting all the stuff
        ))}
      </div>
    );
  }
}
export default Contacts;
