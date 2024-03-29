"use client"
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from ".././public/Logo.png";
import menu from ".././public/menu.png";
import h1 from ".././public/h1.jpg";
import h2 from ".././public/h2.jpg";
import h3 from ".././public/h3.jpg";
import nav1 from ".././public/close-circle.png";
import nav2 from ".././public/personalcard.png";
import nav3 from ".././public/path-square.png";
import nav4 from ".././public/pen-tool.png";
import nav5 from ".././public/profile-2user.png";
import nav6 from ".././public/sms-edit.png";


function Navbar() {
  useEffect(() => {
    document.getElementById("sidebar").style.display = "none";
  })

  const popuphandler = () => {
    const popup = document.getElementById("sidebar");

    if (popup.style.display == "none") {
      popup.style.display = "flex";
    } else {
      popup.style.display = "none";
    }
  };

  return (
    <>
    <div className="w-full">
      <div className="bodyCon">
      <nav id="sidebar" className="z-50 hidden sidebar justify-end items-end overflow-hidden">
        <div
          id="sidebar-container"
          className="gap-16 overflow-scroll lg:overflow-hidden py-10 px-5 lg:p-10 flex flex-col"
        >
          <div className="flex justify-end items-end">
            <Image
              className="h-16 w-auto" 
              src={nav1}
              onClick={popuphandler}
              alt="Close Circle Icon"
              quality={100}
              priority
            />
          </div>

          <div className=" flex justify-start items-start flex-col gap-16">
            <Link href="/about" onClick={popuphandler} className="flex items-center gap-4">
              <Image
                className="h-16 w-auto"
                src={nav2}
                alt="Personal Card Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">About</p>
            </Link>
            <Link href="/portfolio" onClick={popuphandler} className="flex items-center gap-4">
              <Image
                className="h-16 w-auto"
                src={nav3}
                alt="Path Square Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">Portfolio</p>
            </Link>
            <Link href="/studio" onClick={popuphandler} className="flex items-center gap-4">
              <Image
                className="h-16 w-auto"
                src={nav4}
                alt="Pen Tool Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">Studio</p>
            </Link>
            <Link href="/community" onClick={popuphandler} className="flex items-center gap-4">
              <Image
                className="h-16 w-auto"
                src={nav5}
                alt="Profile Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">Community</p>
            </Link>
            <Link href="/contact" onClick={popuphandler} className="flex items-center gap-4">
              <Image
                className="h-16 w-auto"
                src={nav6}
                alt="SMS Icon"
                quality={100}
                priority
              />
              <p className="sidebar-text">Contact</p>
            </Link>
          </div>
        </div>
      </nav>

      <header className="w-full bgbl z-40 fixed top-0 left-0 right-0">
        {/* Navbar for Desktop */}
        <nav className="flex lg:py-10 md:px-16 pb-5 pt-14 justify-between px-5 naav lg:px-28">
          <Link href="/">
            <Image
              className="lg:h-16 h-8 w-auto"
              src={logo}
              alt="MsVick Logo"
              quality={100}
              priority
            />
          </Link>
          <div className=" cursor-pointer">
            <Image
              onClick={popuphandler}
              className="lg:h-16 h-8 w-auto"
              src={menu}
              alt="Hamburger Menu"
              quality={100}
              priority
            />
          </div>
        </nav>
      </header>
      </div></div>
    </>
  )
}

export default Navbar