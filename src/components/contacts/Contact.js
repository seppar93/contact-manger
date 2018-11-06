import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

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
  onDeleteClick = (id, dispatch) => {
    // this.props.onDeleteClickHandler();
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { name, email, phone, id } = this.props.contact; // props are coming from contact
    // const { contact } = this.porps;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div onClick={this.onShowClick} className="card card-body mb-3">
              <h4>
                {" "}
                {name}{" "}
                <i style={{ cursor: "pointer" }} className="fas fa-sort-down" />{" "}
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  {" "}
                </i>
              </h4>
              {showContactInfo ? ( // we have tertiary oprator allowing ous to use onclick when we change the state
                <ul className="list-group">
                  <li className="list-group-item"> Email: {email} </li>
                  <li className="list-group-item"> Phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
      //   <div onClick={this.onShowClick} className="card card-body mb-3">
      //     <h4>
      //       {" "}
      //       {name}{" "}
      //       <i style={{ cursor: "pointer" }} className="fas fa-sort-down" />{" "}
      //       <i
      //         className="fas fa-times"
      //         style={{ cursor: "pointer", float: "right", color: "red" }}
      //         onClick={this.onDeleteClick}
      //       >
      //         {" "}
      //       </i>
      //     </h4>
      //     {showContactInfo ? ( // we have tertiary oprator allowing ous to use onclick when we change the state
      //       <ul className="list-group">
      //         <li className="list-group-item"> Email: {email} </li>
      //         <li className="list-group-item"> Phone: {phone} </li>
      //       </ul>
      //     ) : null}
      //   </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // onDeleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
