import { device } from '@styles/device';
import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 56px;
  padding-left: var(--spacing-24);
  padding-right: var(--spacing-24);
  border-bottom: 1px solid #e2e4eb;
  background-color: var(--white);
  position: sticky;
  top: 0;
  z-index: 1020;
  @media ${device.laptop} {
    height: 90px;
    padding-left: var(--spacing-40);
    padding-right: var(--spacing-40);
  }
`;
export const HeaderLogo = styled.div`
  margin-right: 0;
  z-index: 1;
  @media ${device.laptop} {
    margin-right: 48px;
    width: 152px;
  }
`;
export const HeaderToggler = styled.div`
  margin-left: auto;
  display: block;
  z-index: 1;
  cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }
  i {
    width: 24px;
    height: 1px;
    background-color: var(--black);
    display: block;
    margin-bottom: 9px;
    transition: 0.2s;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &.show {
    i:first-child {
      transform: rotate(-45deg) translate(-2px, 2px);
    }
    i:last-child {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  }
`;
export const NavStyle = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding-top: 56px;
  @media ${device.laptop} {
    transform: unset;
    display: block;
    opacity: 1;
    visibility: visible;
    height: auto;
    position: relative;
    left: auto;
    top: auto;
    padding: 0;
    width: auto;
  }
  &.show {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  &.menu-pc {
    display: none;
  }
  @media ${device.laptop} {
    align-items: center;
    flex-direction: unset;
    padding: 0;
    display: none;
    &.menu-pc {
      display: flex;
    }
  }

  & li {
    padding-right: var(--spacing-40);

    &:last-child {
      padding-right: 0;
    }
    p {
      position: relative;
      &::after {
        content: '';
        display: inline-block;
        transform: rotate(270deg);
        position: absolute;
        top: 20.5px;
        right: 0;
        height: 13px;
        width: 13px;
        line-height: 42px;
        background: url(/assets/images/icon-pulldown.svg) no-repeat center;
      }
    }
    p,
    a {
      font-family: 'Noto Sans JP';
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 24px;
      letter-spacing: 0.08em;
      color: #000000;
      padding: 16px 0;
      display: block;
      text-decoration: unset;
      transition: 0.3s all;
      cursor: pointer;
      @media ${device.laptop} {
        color: inherit;
        text-decoration: none;
        font-family: 'Avenir Next R';
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 2px;
      }
    }
    ul {
      overflow: hidden;
      transition: 0.3s height;
    }
  }
`;

export const SpMenuList = styled.ul`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  &.menu-pc {
    display: none;
  }
  @media ${device.laptop} {
    &.menu-sp {
      display: none;
    }
  }
  & li {
    &:last-child {
      padding-right: 0;
    }
    p {
      position: relative;
      &::after {
        content: '';
        display: inline-block;
        transform: rotate(270deg);
        position: absolute;
        top: 20.5px;
        right: 0;
        height: 13px;
        width: 13px;
        line-height: 42px;
        background: url(/assets/images/icon-pulldown.svg) no-repeat center;
      }
    }
    p,
    a {
      font-family: 'Noto Sans JP';
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 24px;
      letter-spacing: 0.08em;
      color: #000000;
      padding: 16px 0;
      display: block;
      text-decoration: unset;
      transition: 0.3s all;
      cursor: pointer;
      @media ${device.laptop} {
        color: inherit;
        text-decoration: none;
        font-family: 'Avenir Next R';
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 2px;
      }
    }
    ul {
      overflow: hidden;
      transition: 0.3s height;
    }

    .submenu {
      padding-left: 21px;
      height: 0;
      overflow: hidden;
      transition: 0.3s height;
      ul {
        visibility: hidden;
        pointer-events: none;
      }
      li {
        a,
        p {
          font-size: 16px;
          padding: 8px 0;
        }
      }
    }
    &.current-menu,
    &.parrent-menu-active,
    &:hover,
    &.active {
      & > a,
      & > p {
        color: var(--blue-500);
      }
    }
    &.parrent-menu-active,
    &.active {
      & > p::after {
        transform: rotate(0);
      }
      .submenu {
        ul {
          visibility: visible;
          pointer-events: auto;
        }
      }
    }
  }
`;
