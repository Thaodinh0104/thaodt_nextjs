import Link from "next/link";
import React, { useState } from "react";
import { SPMenu } from "./SpMenu";
import {
  HeaderComponent,
  HeaderLogo,
  HeaderMenu,
  HeaderToggler,
  NavStyle,
} from "./styles";

const navigations_pc = [
  {
    name: "BRAND",
    href: "/mission_and_vision",
  },
  {
    name: "DESIGN PHILOSOPHY",
    href: "/design_philosophy",
  },
  // {
  //   name: "DESIGN ELEMENT",
  //   href: "/design_element"
  // },
  {
    name: "RESOURCE",
    href: "/resource",
    submenu: [],
  },
  {
    name: "TERM",
    href: "/terms",
  },
];

export const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return <></>;
};
