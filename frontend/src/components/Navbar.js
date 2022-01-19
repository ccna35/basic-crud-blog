import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <h1>
            <FontAwesomeIcon icon={faBook} />
            MAXIMUS
          </h1>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/add-post">
              <li>Create Post</li>
            </Link>
            <Link to="/signup">
              <li>Sign up</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
