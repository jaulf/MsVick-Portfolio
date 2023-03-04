import React from "react";
import Logo from "../Assets/LogoVA.png";
import menu from "../Assets/menu.png";

function Homepage() {
  return (
    <div id="page-container">
      {/* Here is the Navbar */}
      <div id="navbar" class="flex justify-between items-center py-10 px-14">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <img src={menu} alt="Hamburger Menu Icon" />
        </div>
      </div>

      {/* Here is body section */}
      <div id="body">
        
      </div>
    </div>
  );
}

export default Homepage;
