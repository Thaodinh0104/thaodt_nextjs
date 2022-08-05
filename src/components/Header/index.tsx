import { device } from '@styles/device';
import Link from 'next/link';
import React, { useState } from 'react';
import { SPMenu } from './SpMenu';
import {
  HeaderComponent,
  HeaderLogo,
  HeaderMenu,
  HeaderToggler,
  NavStyle
} from './styles';

const navigations_pc = [
  {
    name: 'BRAND',
    href: '/mission_and_vision'
  },
  {
    name: 'DESIGN PHILOSOPHY',
    href: '/design_philosophy'
  },
  // {
  //   name: "DESIGN ELEMENT",
  //   href: "/design_element"
  // },
  {
    name: 'RESOURCE',
    href: '/resource',
    submenu: []
  },
  {
    name: 'TERM',
    href: '/terms'
  }
];

export const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <HeaderComponent className="header">
      <HeaderLogo>
        <Link href="/">
          <a>
            <picture>
              <source
                media={`${device.laptop}`}
                srcSet="/assets/images/logo.svg"
              />
              <img
                src="/assets/images/logo-blue.svg"
                alt="ecforce brand book"
              />
            </picture>
          </a>
        </Link>
      </HeaderLogo>
      <HeaderToggler
        onClick={() => setToggleMenu(!toggleMenu)}
        className={toggleMenu != false ? 'show' : ''}
      >
        <i></i>
        <i></i>
      </HeaderToggler>
      <NavStyle className={(toggleMenu != false ? 'show' : '') + ' nav-menu'}>
        <HeaderMenu className="menu-pc">
          {navigations_pc.map(nav => {
            return (
              <li key={nav.name}>
                <Link href={nav.href}>
                  <a>{nav.name}</a>
                </Link>
              </li>
            );
          })}
        </HeaderMenu>
        <SPMenu />
      </NavStyle>
    </HeaderComponent>
  );
};
