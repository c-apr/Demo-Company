import React from "react";
import "./Sidebar.css";
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="head">
          <p>We tackle interesting topics every day</p>
        </div>
      </div>
      <div className="sidebar__lower">
      <div className="search">
        <div className="sidebar__search">
            <SearchIcon/>
            <input className="sidebar__input" placeholder="Find Courses" type="text" />
        </div>
        </div>
      <div className="boxes">
        <div className="sideBox">
            <div className="sideBox__upperBox"></div>
            <div className="sideBox__lowerBox"></div>
        </div>
        <div className="centerBox">
           <div className="Part">
             <div className="Box"></div>
             <div className="Box"></div>
           </div>
           <div className="Part">
           <div className="Box"></div>
            <div className="Box"></div>
           </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
