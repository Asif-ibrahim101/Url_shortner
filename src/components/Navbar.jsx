import React, { useState } from "react";
import Logo from '../../images/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar_container py-2 px-2">

      <header className={`flex justify-center items-center w-full`}>
        <div className="md:w-[1400px] w-[700px] bg-red">
          <div className="relative flex items-center justify-between">
            <div className="max-w-full w-60">
              <a href="/#" className="block w-full py-5">
                <img
                  src={Logo}
                  alt="logo"
                  className="pl-2"
                />
              </a>
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                <button
                  // @click="navbarOpen = !navbarOpen"
                  onClick={() => setOpen(!open)}
                  // :className="navbarOpen && 'navbarTogglerActive' "
                  id="navbarToggler"
                  className={` ${open && "navbarTogglerActive"
                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <MenuIcon fontSize="large"/>
                </button>
                <nav
                  // :className="!navbarOpen && 'hidden' "
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg py-5 md:px-0 px-12 md:bg-white bg-[#4B3F6B] shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"
                    } `}
                >
                  <ul className="block lg:flex">
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Features
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Pricing
                    </ListItem>
                    <ListItem
                      navItemStyles="text-dark hover:text-primary"
                      NavLink="/#"
                    >
                      Resources
                    </ListItem>
                  </ul>
                </nav>
              </div>
              <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
                <a
                  href="/#"
                  className="py-3 text-base font-medium px-7 text-gray-500 hover:text-primary"
                >
                  Login
                </a>

                <a
                  href="/#"
                  className="py-3 text-base font-medium text-white bg-[#2BD0D0] rounded-full bg-primary px-7 hover:bg-opacity-90"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 md:text-gray-500 text-white font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
  );
};
