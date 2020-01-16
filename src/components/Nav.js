import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="logo navbar-brand" href="/">
        getFinance
      </a>

      <span className="navbar-text">
        {/* <a className="mr-4" href="/">
          getLoans
        </a>
        <a href="/">getInvestments</a> */}
      </span>
    </nav>
  );
}

export default NavBar;
