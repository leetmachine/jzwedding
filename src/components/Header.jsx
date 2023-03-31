import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import "../styles/header.scss";

const Nav = ({ onClick = () => {} }) => (
  <ul onClick={onClick}>
    <li>
      <a href="/#details">WEDDING DETAILS</a>
    </li>
    <li>
      <a href="/#traveling">TRAVELING</a>
    </li>
    <li>
      <a href="/faqs">FAQ's</a>
    </li>
    {/* <li>
      <a href="/rsvp">RSVP</a>
    </li>
    <li>
      <a href="/registry">REGISTRY</a>
    </li> */}
    <li>
      <a href="#jz">J&Z</a>
    </li>
  </ul>
);

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeMobileHeader(e) {
      console.log("hashchange", e.newURL);
      setIsOpen(false);
    }

    if (isBrowser) {
      window.addEventListener("hashchange", closeMobileHeader);
      return () => window.removeEventListener("hashchange", closeMobileHeader);
    }
  }, []);

  return (
    <div className="mobileHeader">
      <div className="menu">
        <div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars size={"2em"} color="#AA985D" />
          </button>
        </div>
        {isOpen && <Nav onClick={() => setIsOpen(false)} />}
      </div>
    </div>
  );
};

const DesktopHeader = () => {
  return (
    <div className="desktopHeader">
      <Nav />
    </div>
  );
};

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(
    isBrowser ? window.innerWidth > 1000 : false
  );

  useEffect(() => {
    function setDesktop() {
      console.log("innerWidth", window.innerWidth);
      setIsDesktop(window.innerWidth > 1000);
    }

    if (isBrowser) {
      window.addEventListener("resize", setDesktop);
      return () => window.removeEventListener("resize", setDesktop);
    }
  }, []);

  return <header>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</header>;
};

export default Header;
