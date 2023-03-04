import React from "react";
import Logo from "../Assets/LogoVA.png";
import menu from "../Assets/menu.png";
import Bitmap from "../Assets/Bitmap.png";
import wink from "../Assets/wink.png";
import arrow from "../Assets/arrow-right.png";

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
        <div class="flex flex-col items-center py-10 text-center">
          <div id="sec-a" className=" max-w-4xl">
            <div class="flex justify-center pb-5">
              <h1 className=" font-light fontmain">
                Yay! You’re finally here!
              </h1>
              <img class="pl-2" src={Bitmap} alt="Smiley Emoji" />
            </div>
            <div class="py-5">
              <h1 className=" font-light fontmain">
                Look what we’ve got... a blank canvas. What would you like to
                create with it?
              </h1>
            </div>
            <div class="py-5">
              <h1 className=" font-light fontmain">Not sure yet?</h1>
            </div>
            <div class="flex justify-center pt-5">
              <h1 className=" font-light fontmain">
                Check out these cool projects.
              </h1>
              <img class="pl-2" src={wink} alt="Winking Emoji" />
            </div>
          </div>
          <div id="sec-button" className="pt-16">
            <img src={arrow} alt="Arrow Pointing Right" />
          </div>
        </div>
      </div>

      {/* Footer */}

      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Homepage;
