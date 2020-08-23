import React from "react";
import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton, Menu, MenuItem } from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function Header({ setdrawer }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [headerSlider, setheaderSlider] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const setheader = (open) => {
    console.log(open);
    setheaderSlider(open);
    setdrawer(headerSlider);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="Header">
      <div className="header__left">
        <IconButton onClick={() => setheader(!headerSlider)}>
          {!headerSlider ? (
            <ChevronLeftIcon className="header__icon" />
          ) : (
            <ChevronRightIcon className="header__icon" />
          )}
        </IconButton>
        <h1>{window.location.pathname.slice(1)}</h1>
      </div>
      <IconButton
        color="inherit"
        size="medium"
        className="header__iconbutton"
        onClick={handleClick}
      >
        <AccountCircleIcon className="header__icon" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className="header__menu">
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} className="header__menu">
          My account
        </MenuItem>
        <MenuItem onClick={handleClose} className="header__menu">
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
