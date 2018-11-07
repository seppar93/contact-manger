import React, { Component } from "react";
// import Contact from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
// import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About.js";

// import AddContactUncontrol from "./components/contacts/AddContactUncontrol.js";

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
      <Provider>
        <Router>
          <div className="App">
            <Header /> {/* we added a default prop */}
            <div className="container">
              {/* <AddContactUncontrol /> */}
              <Switch>
                <Route exact path="/" Component={Contacts} />
                <Route path="/about" Component={About} />
                {/* <AddContact /> */}
              </Switch>
              {/* we are looping through our state in Contacts and rendering it here   */}
              {/* <Contact name="John Doe" email="jdo@gmail.com" phone="123456" /> HARD COded
          <Contact
            name="babaganoosh man"
            email="babag@gmail.com"
            phone="98765"
          /> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
