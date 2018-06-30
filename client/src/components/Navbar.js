import React, { Component } from "react";
import { Link} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authactions";
import "../css/nav.css";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
 titleFromLink(string) {
   switch (string) {
     case "/appointments":
       return "Appointments"
       break;
     case "/profile":
       return "Profile"
       break;
     case "/editProfile":
       return "Edit Profile"
       break;
     case "/about":
       return "Our Mission"
       break;
     case "/homepage":
       return "Home Page"
       break;
     case "/medications":
       return "Medications"
       break;
     case "/overview":
       return "Medical Overview"
       break;
     case "/main":
       return "Login"
       break;
     case "/signup":
       return "Register"
       break;

     default: 
      return "Pill Organizer"
       break;
   }
 }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const {pathname} = this.props.location;
    const authLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link home" to="/homepage">
            Home Page
            </Link>
          <a href="" onClick={this.onLogoutClick.bind(this)} className="nav-link">
            <Link className="nav-link logout" to="/">
              Logout
            </Link>
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <Link className="nav-link signup" to="/signup">
            Sign Up
          </Link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link login" to="/">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm mb-4">
        <div className="container">
          <h3 style={{ color: "white" }}>{this.titleFromLink(pathname)}</h3>
          <div className="topnav">
            <div className="topnav-right">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
            
          {/* </div> */}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);



{/* <Link className="navbar-brand" to="/">
            DevConnector
          </Link> */}
{/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button> */}

{/* <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto"> */}
{/* <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  Developers
                </Link>
              </li> */}
{/* </ul> */ }