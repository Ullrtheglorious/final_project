import React from "react";
import { Link } from "react-router-dom";
import "../css/signin.css";

class Signup extends React.Component {
  componentDidMount() {
    // ------    put on page load js here ------ //
  }
  render() {
    return (
      // -------- Start HTML here -------- //

      <div className="col-md-6">
        <div id="logbox">
          <form id="signup" method="post" action="/signup">
            <h1>Account login</h1>
            <input
              name="user[email]"
              type="email"
              placeholder="enter your email"
              class="input pass"
            />
            <input
              name="user[password]"
              type="password"
              placeholder="enter your password"
              required="required"
              class="input pass"
            />
            <input type="submit" value="Sign in" className="inputButton" />
            <div className="text-center">
              <a href="# " id=" ">
                create an account
              </a>{" "}
              -{" "}
              <a href="# " id=" ">
                forgot password
              </a>
            </div>
          </form>
        </div>
      </div>
      // ------ End HTML here -------------- //
    );
  }
}

export default Signup;
