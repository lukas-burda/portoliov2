// src/components/navbar/Navbar.tsx
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  FaCode,
  FaHome,
  FaLayerGroup,
  FaUser,
  FaBrain,
} from "react-icons/fa";
import type { NavLinkItem } from "../../interfaces/navbar/NavLinkItems";
import NavLink from "../../components/NavLink/NavLink";



export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Renomeado

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const baseNavLinkClasses = "flex space-x-2 items-center";
  const navIconSize = 20;

  const navLinkList: NavLinkItem[] = [
    {
      href: "#home",
      text: "Início",
      className: baseNavLinkClasses,
      children: <FaHome size={navIconSize} title="Home" />,
    },
    {
      href: "#about",
      text: "Sobre mim",
      className: baseNavLinkClasses,
      children: <FaUser size={navIconSize} title="About" />,
    },

    {
      text: "Portfólio",
      className: baseNavLinkClasses,
      children: <FaLayerGroup size={navIconSize} title="Portfolio" />,
      subLinks: [
        {
          href: "#competences",
          text: "Competências",
          children: <FaBrain size={navIconSize * 0.8} title="Competences" />,
        },
        {
          href: "#projects",
          text: "Projetos",
          children: <FaCode size={navIconSize * 0.8} title="Projects" />,
        },
      ],
    },
  ];

  return (
    <nav className="backdrop-blur-lg py-4 px-4 sm:px-8 fixed top-0 left-0 w-full ">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <h1 className="font-bold font-mono text-2xl sm:text-3xl text-white tracking-wide">
            <a
              href="/"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Lukas Burda
            </a>
          </h1>
          {/* <LottieCustomView
            src={spaceManLottieFile}
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover transition-all duration-300"
          /> */}
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded-md p-1"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <div className='className="w-8 h-8'>
                <IoClose />
              </div>
            ) : (
              <div className='className="w-8 h-8'>
                <IoMenu />
              </div>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <NavLink list={navLinkList} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
        sm:hidden
        ${isMobileMenuOpen ? "block" : "hidden"}
        mt-2
        backdrop-blur-lg 
        rounded-md
        py-2
        transition-all duration-300 ease-in-out
      `}
      >
        <NavLink
          list={navLinkList}
          isMobileMenuOpen={isMobileMenuOpen}
          onLinkClick={closeMenu}
        />
      </div>
    </nav>
  );
};