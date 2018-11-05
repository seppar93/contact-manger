import React, { Component } from "react";
import Contact from "./components/Contacts";
import Header from "./components/Header";
// import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacts from "./components/Contacts";

class App extends Component {
  render() {
    // we can put any type of JS we want here

    // how react looks
    // return createElement(
    //   "div",
    //   {className="App"},
    //   React.createElement("h1", null, "The App Component")
    // )
    return (
      // you can return only one div

      <div className="App">
        <Header /> {/* we added a default prop */}
        <div className="container">
          <Contacts />{" "}
          {/* we are looping through our state in Contacts and rendering it here   */}
          {/* <Contact name="John Doe" email="jdo@gmail.com" phone="123456" /> HARD COded
          <Contact
            name="babaganoosh man"
            email="babag@gmail.com"
            phone="98765"
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
