import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useLayoutEffect, useRef, useState } from 'react';
import { SpMenuList } from './styles';

interface MenuItem {
  name: string;
  slug: string;
  href: string;
  active: boolean;
}

interface Menu extends MenuItem {
  submenu?: MenuItem[];
}
// Set Data for  Submenu Item
const navigations_sp: Menu[] = [
  {
    name: 'BRAND',
    slug: 'brand',
    href: '',
    active: false,
    submenu: [
      {
        name: 'MISSION AND VISION',
        slug: 'mission-and-vision',
        href: '/mission_and_vision',
        active: false
      },
      {
        name: 'BRAND CORE',
        slug: 'brand-core',
        href: '/brand_core',
        active: false
      },
      {
        name: 'HISTORY',
        slug: 'history',
        href: '/history',
        active: false
      }
    ]
  },
  {
    name: 'PHILOSOPHY',
    slug: 'philosophy',
    active: false,
    href: '/design_philosophy'
  },
  {
    name: 'DESIGN ELEMENT',
    slug: 'design-element',
    active: false,
    href: '',
    submenu: [
      {
        name: 'LOGO',
        slug: 'blogorand',
        href: '/logo',
        active: false
      },
      {
        name: 'TYPOGRAPHY',
        slug: 'typography',
        href: '/typography',
        active: false
      },
      {
        name: 'ILLUSTRATION',
        slug: 'ilustration',
        href: '/ilustration',
        active: false
      }
    ]
  },
  {
    name: 'RESOURCE',
    slug: 'resource',
    active: false,
    href: '/resource'
  },
  {
    name: 'TERM',
    slug: 'terms',
    active: false,
    href: '/terms'
  }
];

export const SPMenu: React.FC = () => {
  const elRef = useRef<any>([]);
  const [menus, setMenus] = useState<Menu[]>(navigations_sp);
  const router = useRouter();
  const { pathname } = router;
  // Check if current page has in menu, the menu item will active
  useLayoutEffect(() => {
    // Check if has current link page
    if (pathname) {
      // Read menu data
      const newMenus: Menu[] = menus.map((menu: Menu) => {
        // Update all menu has status active from true to false
        menu.active = false;
        // Check if link of current page= link of menu, the menu will update status from false to true (parent menu)
        if (pathname === menu.href) {
          return {
            ...menu,
            active: true
          };
        }
        // Check if link of current page= link of menu, the menu will update status from false to true (submenu menu)
        if (menu.submenu) {
          const newSubMenu = menu.submenu?.map((sub: MenuItem) => {
            if (pathname === sub.href) {
              menu.active = true;
              return { ...sub, active: true };
            }
            return sub;
          });
          return {
            ...menu,
            submenu: newSubMenu
          };
        }
        return menu;
      });
      setMenus(newMenus);
    }
  }, [pathname]);

  // Event if click to parrent menu item, the submenu will be display
  const onShowSubmenu = (e, menuTarget) => {
    const newMenus: Menu[] = menus.map((menu: Menu) => {
      // Check if menu name item = menu name is activating each mean the menu that you just click
      if (menu.name === menuTarget) {
        // If the menu item actived, the menu will update status active is false
        if (menu.active == true) {
          return {
            ...menu,
            active: false
          };
        }
        // If the menu item didn't active, the menu will update status active is true
        return {
          ...menu,
          active: true
        };
      }
      // if menu name item != menu name is activating, the parent menu and submenu  will update status active is false
      return {
        ...menu,
        active: false,
        submenu: menu.submenu?.map(item => ({
          ...item,
          active: false
        }))
      };
    });
    // Update Menu Data
    setMenus(newMenus);
  };
  // Function render Submenu
  const renderSubMenu = (menu, submenu, index) => (
    <Fragment>
      <p
        className={clsx(menu.active && 'toggle')}
        onClick={e => onShowSubmenu(e, menu.name)}
      >
        {menu.name}
      </p>
      {/* The height of submenu will be added if current menu item has status is true and the height = elRef (useRef) of ul tag inside class submenu  */}
      <div
        className="submenu"
        style={{
          height: `${
            menu.active && elRef?.current[index]?.clientHeight
              ? elRef.current[index].clientHeight
              : '0'
          }px`
        }}
      >
        {/* elRef (useRef) add more element for elRef[], each element is attributes of ul tag in submenu. The purpose of the code is get the height of ul */}
        <ul
          ref={element => {
            elRef.current[index] = element;
          }}
        >
          {submenu.map((subItem, i) => (
            <li
              key={i}
              className={clsx('sub-menu-item', subItem.active && 'active')}
            >
              {renderMenuItem(subItem.href, subItem.name)}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
  // show item menu
  const renderMenuItem = (href, name) => (
    <Link href={href || ''} className="menu-item">
      <a>{name}</a>
    </Link>
  );

  return (
    <SpMenuList className="menu-sp">
      {menus.map((nav, index) => (
        <li
          key={nav.name}
          className={clsx('menu-item', nav.slug, nav.active && 'active')}
        >
          {/* Using renderSubMenu to show submenu and  renderMenuItem to show item menu */}
          {nav.submenu
            ? renderSubMenu(nav, nav.submenu, index)
            : renderMenuItem(nav.href, nav.name)}
        </li>
      ))}
    </SpMenuList>
  );
};
