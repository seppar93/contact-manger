import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <a href="/" className="navbar-brand">
        {branding}
      </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // <div>
    //   <h1 style={headingStyle}> {branding}</h1>
    // </div>
  );
};
Header.defaultProps = {
  branding: "Contact Manger"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired // prop type
};

const headingStyle = {
  color: "red",
  fontSize: "50px"
};
export default Header;
