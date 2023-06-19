import React from 'react'
import "./Navbar.css";
import SettingsIcon from '@mui/icons-material/Settings';
// import grey from "@material-ui/core/colors/grey";
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap" rel="stylesheet">;

</link>
function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar__left">
      <div className="logo">
        <p>Demo Company</p>
      </div>
      <div className="navigationlist">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Pricing</li>
          <li id='blog'>Blog</li>
        </ul>
      </div>
      </div>

      <div className="nav__option">
        <div className="nav__options"><SettingsIcon  style={{ color: "grey" }}/></div>
        <div className="nav__options"><NotificationImportantIcon style={{ color: "grey" }}/></div>
        <div className="nav__options"><img src={require('../static/Profile.png')}  alt="" /></div>
      </div>
    </div>
  )
}

export default Navbar
