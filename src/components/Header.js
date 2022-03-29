import React from "react";

import "./Header.css";

//images
import user from "../images/user-icon.png";

//icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = (props) => {
  return (
    <header className={props.black && "black"}>
      <div className="header--navbar pointer">
        <div className="header--logo pointer">
          <a href="/">
            <img
              className="pointer"
              src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            />
          </a>
        </div>
        <span className="pointer">Home</span>
        <span className="pointer">TV Shows</span>
        <span className="pointer">Movies</span>
        <span className="pointer">New & Popular</span>
        <span className="pointer">My List</span>
      </div>

      <div className="header--user">
        <span>
          <SearchIcon className="pointer" style={{ fontSize: "35px" }} />
        </span>
        <span className="pointer">Kids</span>
        <span>
          <NotificationsIcon className="pointer" style={{ fontSize: "35px" }} />
        </span>

        <a href="/">
          <img className="pointer" src={user} />
        </a>

        <span className="header--dropdown-arrow pointer">
          <ArrowDropDownIcon />
        </span>
      </div>
    </header>
  );
};

export default Header;
