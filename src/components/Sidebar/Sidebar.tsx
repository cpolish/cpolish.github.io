import "./Sidebar.css";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { JSX } from "react";
import { useRef } from "react";

import { useDetectOutsideClick } from "../../hooks";


interface SidebarProps {
  sidebarActive: boolean;
  toggleSidebar: () => void;
}


const SIDEBAR_ITEMS = [
  {
    name: "Intro",
    path: "#",
  },
  {
    name: "Featured Projects",
    path: "#featured-projects",
  },
];


export default function Sidebar({ sidebarActive, toggleSidebar }: SidebarProps
                                ): JSX.Element {
  const ref = useRef(null);
  
  useDetectOutsideClick(() => {
    if (sidebarActive) {
      toggleSidebar();
    }
  }, ref);
  
  return (
    <nav ref={ref} className={sidebarActive ? "sidebar-menu active" : "sidebar-menu"}>
      <ul className="sidebar-menu-items">
        <li className="sidebar-menu-toggle" onClick={toggleSidebar}>
          <span className="sidebar-menu-toggle-button">
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </li>
        {SIDEBAR_ITEMS.map((item, index) => {
          return (
            <li key={index} className="sidebar-item" onClick={toggleSidebar}>
              <a href={item.path}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
