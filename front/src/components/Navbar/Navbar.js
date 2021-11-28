import React from "react";
import CLUB from "../CLUB/club";
import { Link } from "react-router-dom";

// Css
import classes from "./Navbar.module.css";

// router

const Navbar = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.navbar_head}>
          <div className={classes.navbar_logo}>
            <h2 className={classes.logo}>
              <span className="scam">SCAM</span>
              <br />
              <span className={classes.first_letter}>S</span>tudent
              <span className={classes.first_letter}>C</span>lub
              <span className={classes.first_letter}>A</span>nd
              <span className={classes.first_letter}>A</span>ctivity
              <span className={classes.first_letter}>M</span>nagment
            </h2>
          </div>
          <div className={classes.navbar_buttons}>
            <Link to="" activeClassName="active">
              Login
            </Link>
            <Link to="">SignUp</Link>
          </div>
        </div>
        <div className={classes.navbar_underline}></div>
        <div className={classes.navbar_body}>
          <ul className={classes.navbar_links}>
            <li className={`${classes.navbar_link} ${classes.active}`}>
              <Link exact to="./">
                Home
              </Link>
            </li>
            <li className={classes.navbar_link}>
              <Link to="./">About</Link>
            </li>
            <li className={classes.navbar_link}>
              <Link to="../CLUB/club">Club</Link>
            </li>
            <li className={classes.navbar_link}>
              <Link to="./">Live Updates</Link>
            </li>
            <li className={classes.navbar_link}>
              <Link to="./">Contact</Link>
            </li>
            <li className={classes.navbar_link}>
              <Link to="./">New-Club</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
