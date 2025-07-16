// src/components/navbar/NavLink.tsx
import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import type { NavLinkItem } from "../../interfaces/navbar/NavLinkItems";

interface NavLinkProps {
  list: NavLinkItem[];
  isMobileMenuOpen?: boolean; // Renomeado para maior clareza
  onLinkClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  list,
  isMobileMenuOpen = false,
  onLinkClick,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (text: string) => {
    setOpenDropdown(openDropdown === text ? null : text);
  };

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setOpenDropdown(null); // Fecha qualquer dropdown ativo
  };

  return (
    // Este ul agora controla a direção dos itens principais (coluna em mobile, linha em desktop)
    <ul
      className={`
      flex ${
        isMobileMenuOpen ? "flex-col" : "hidden"
      } items-center space-y-4 // Mobile: coluna, espaçamento vertical, visibilidade
      sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 // Desktop: linha, espaçamento horizontal, sempre visível
      text-lg sm:text-base // Ajuste do tamanho da fonte
      sm:w-auto // Ocupa a largura total em mobile, automática em desktop
      ${
        isMobileMenuOpen ? "block" : "hidden"
      } // Finaliza visibilidade para mobile
      sm:block // Garante visibilidade em desktop
    `}
    >
      {list.map((item) => (
        <li
          key={item.text}
          className="relative group  sm:w-auto text-center sm:text-left"
        >
          {/* Largura total em mobile, auto em desktop */}
          {item.subLinks ? (
            // Item com Dropdown
            <>
              <button
                onClick={() => handleDropdownToggle(item.text)}
                className={`
                  flex items-center justify-center sm:justify-start gap-2 font-bold px-3 py-2 rounded-md
                  text-white hover:text-cyan-400 transition-colors duration-300
                  ${item.className || ""}
                `}
                aria-expanded={openDropdown === item.text}
              >
                {item.children}
                <span>{item.text}</span>
                {openDropdown === item.text ? (
                  <div className="ml-1">
                    <IoChevronUp />
                  </div>
                ) : (
                  <div className="ml-1">
                    <IoChevronDown />
                  </div>
                )}
              </button>
              {/* Dropdown Content */}
              <ul
                className={`
                ${openDropdown === item.text ? "block" : "hidden"}
                sm:absolute sm:top-full sm:left-1/2 sm:-translate-x-1/2 // Posição para desktop
                mt-2 sm:mt-0 p-3 sm:p-4
                bg-gray-950 backdrop-blur-lg  rounded-md shadow-lg
                sm:group-hover:block sm:hover:block
                flex flex-col space-y-2 // Sublinks sempre em coluna
              `}
              >
                {item.subLinks.map((subLink) => (
                  <li key={subLink.text}>
                    <a
                      href={subLink.href}
                      onClick={handleLinkClick}
                      className={`
                        flex items-center gap-2 px-3 py-2 rounded-md
                        text-neutral-200 bg-gray-950 backdrop-blur-lg  hover:text-cyan-300 transition-all duration-200
                        w-full // Garante que o sublink ocupe a largura total do dropdown
                      `}
                    >
                      {subLink.children}
                      <span>{subLink.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            // Item de Link Normal
            <a
              href={item.href}
              onClick={handleLinkClick}
              className={`
                flex items-center justify-center sm:justify-start gap-2 font-bold px-3 py-2 rounded-md
                text-white hover:text-cyan-400 transition-colors duration-300 w-full
                ${item.className || ""}
              `}
            >
              {item.children}
              <span>{item.text}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLink;