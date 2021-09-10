import React from "react";
import GadjianLogo from "../../assets/images/GADJIAN.png";
import "./Topbar.css";

function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand">
          <img src={GadjianLogo} alt="logo" className="gajian-logo" />
        </div>
        <div className="navbar-nav">
          <h5>Halo, <span>Gadjian User</span></h5>
        </div>
        <div className="profile-section">
          <div className="circle">Photo</div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
