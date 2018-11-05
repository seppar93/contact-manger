import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };
  // ^^^ proptypes can also be put into the class
  state = {
    showContactInfo: false
  };
  onShowClick = () => {
    // state is imutable you cant directoly changed it EXAMPLE: showContactInfo: false
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    const { name, email, phone } = this.props.contact; // props are coming from contact
    // const { contact } = this.porps;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {" "}
          {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />{" "}
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item"> Email: {email} </li>
            <li className="list-group-item"> Phone: {phone} </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
