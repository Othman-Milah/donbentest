import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img
          src={process.env.PUBLIC_URL + "AidHubLogo-removebg-preview.png"}
          alt="AIDHUB LOGO"
          className="navbar__left__logo"
        />
      </div>
      <div className="navbar__right">
        <div className="navbar__right__calltoaction">
          <button>Beneficiary</button>
          {/* <button>Donor</button> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
