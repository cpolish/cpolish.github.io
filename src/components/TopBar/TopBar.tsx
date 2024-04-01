import "./TopBar.css";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { JSX } from "react";
import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";


const NAV_LINKS = [
  {
    icon: faGithubSquare,
    href: "https://github.com/cpolish",
  },
  {
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/chris-polak-8389261a9/",
  },
];


export default function TopBar(): JSX.Element {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => setSidebarActive(!sidebarActive);

  return (
    <>
      <div className="top-bar">
        <span className="sidebar-menu-toggle-button">
          <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
        </span>
        <div className="top-bar-right">
          {NAV_LINKS.map((navLink) => {
            return (
              <a className="top-bar-icon" href={navLink.href}>
                <FontAwesomeIcon icon={navLink.icon} />
              </a>
            );
          })}
        </div>
      </div>
      <Sidebar sidebarActive={sidebarActive} toggleSidebar={toggleSidebar} />
    </>
  );
}
