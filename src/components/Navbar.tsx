import "../styles/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  username: string | undefined;
  proPic: string | undefined;
}

function Navbar(props: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-user-img-wrapper">
        <img src={props.proPic} alt={props.username} />
      </div>
      <div
        className="nav-username"
        onMouseOver={() => {
          setShowDropdown(true);
        }}
        onMouseLeave={() => {
          setShowDropdown(false);
        }}
      >
        {props.username}
      </div>
      {showDropdown && (
        <div
          className="dropdown"
          onMouseOver={() => {
            setShowDropdown(true);
          }}
          onMouseLeave={() => {
            setShowDropdown(false);
          }}
        >
          <Link to={`/`}>Logout</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
