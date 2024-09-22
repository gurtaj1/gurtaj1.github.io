"use client";

import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";

import { useState, useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";

type NavLinkProps = {
  to: string;
  children: string | JSX.Element;
  onClick?: () => void;
};

function NavLink(props: NavLinkProps) {
  const { to, children, onClick } = props;

  return (
    <Link
      href={to}
      className="block md:inline-block px-4 py-2 text-white hover:text-[#ffcc00] transition duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getCookie("darkMode") ?? "false");

  useEffect(() => {
    console.log({ darkMode });

    if (typeof window !== "undefined") {
      if (darkMode === "true") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    console.log({ darkMode, cookie: getCookie("darkMode") });

    setDarkMode(darkMode === "true" ? "false" : "true");
    setCookie("darkMode", darkMode === "true" ? "false" : "true");
  };
  return (
    <header className="bg-[#660066] shadow-2xl fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/#home"
          className="text-xl font-bold text-white hover:text-[#ffcc00]"
        >
          GURTAJ KANG
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/#portfolio">Portfolio</NavLink>
          <NavLink to="/#about">About</NavLink>
          <NavLink to="https://github.com/gurtaj1/CV">CV</NavLink>
          <NavLink to="https://github.com/gurtaj1">GitHub</NavLink>
          <NavLink to="https://shocking-plume-3b8.notion.site/Studies-287132b5647b436aa12c801307961eeb">
            Studies
          </NavLink>
          <NavLink to="https://gurtaj1.github.io/blog">Blog</NavLink>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-[#ffcc00] dark:bg-[#660066] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#660066] focus:ring-[#ffcc00] dark:focus:ring-offset-black dark:focus:ring-[#660066]"
            aria-label="Toggle dark mode"
          >
            {darkMode === "true" ? (
              <Sun size={20} className="text-[#ffcc00]" />
            ) : (
              <Moon size={20} className="text-[#660066]" />
            )}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full bg-[#ffcc00] dark:bg-[#660066] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#660066] focus:ring-[#ffcc00] dark:focus:ring-offset-black dark:focus:ring-[#660066]"
            aria-label="Toggle dark mode"
          >
            {darkMode === "true" ? (
              <Sun size={20} className="text-[#ffcc00]" />
            ) : (
              <Moon size={20} className="text-[#660066]" />
            )}
          </button>
          <button
            className="focus:outline-none text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-[#660066] py-2">
          <NavLink to="/#portfolio" onClick={toggleMenu}>
            Portfolio
          </NavLink>
          <NavLink to="/#about" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="https://github.com/gurtaj1/CV" onClick={toggleMenu}>
            CV
          </NavLink>
          <NavLink to="https://github.com/gurtaj1" onClick={toggleMenu}>
            GitHub
          </NavLink>
          <NavLink
            to="https://shocking-plume-3b8.notion.site/Studies-287132b5647b436aa12c801307961eeb"
            onClick={toggleMenu}
          >
            Studies
          </NavLink>
          <NavLink to="https://gurtaj1.github.io/blog" onClick={toggleMenu}>
            Blog
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default NavBar;
