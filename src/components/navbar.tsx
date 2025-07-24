"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./toogle-theme-btn";
import { NavItemT } from "../types/navItems";
import { navItems } from "@/constants/nav-items";
import { ArrowDown, Menu, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);

      // Close mobile menu when switching to desktop
      if (desktop) {
        setIsMobileMenuOpen(false);
      }

      // Close dropdowns when switching screen sizes
      setOpenDropdown(null);
      setMobileOpenDropdown(null);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Desktop hover handlers
  const handleMouseEnter = (itemPath: string) => {
    if (isDesktop) {
      setOpenDropdown(itemPath);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setOpenDropdown(null);
    }
  };

  // Mobile click handler
  const handleDropdownClick = (itemPath: string) => {
    if (!isDesktop) {
      setMobileOpenDropdown(mobileOpenDropdown === itemPath ? null : itemPath);
    }
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  };

  return (
    <>
      {/* Backdrop blur for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav className="navbar flex items-center justify-between p-4 shadow-md rounded-full mt-8 max-w-[1440px] mx-auto px-6 md:px-10 relative md:sticky md:top-4 md:z-30  bg-opacity-50 backdrop-blur-sm bg-black/10">
        {/* Logo */}
        <div className="logo">
          <Image
            src={"/images/main_logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Nav Items */}
        <div className="nav-items hidden md:block">
          <ul className="flex space-x-6 items-center text-lg md:text-xl">
            {navItems.map((item: NavItemT) => {
              const hasSubmenu = item.subItems && item.subItems.length > 0;
              const isOpen = openDropdown === item.path;

              return (
                <li key={item.title} className="relative">
                  {!hasSubmenu && (
                    <Link
                      href={item.path}
                      className="font-medium  transition-all duration-200 ease-in-out hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  )}

                  {hasSubmenu && (
                    <div
                      onMouseEnter={() => handleMouseEnter(item.path)}
                      onMouseLeave={handleMouseLeave}
                      className="sub-menu"
                    >
                      <DropdownMenu
                        open={isOpen}
                        onOpenChange={(open) =>
                          setOpenDropdown(open ? item.path : null)
                        }
                      >
                        <DropdownMenuTrigger asChild>
                          <Button className="text-lg md:text-xl px-5 py-3 outline-none font-medium transition-all duration-200 ease-in-out">
                            {item.title}
                            <ArrowDown />
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          side="bottom"
                          align="start"
                          className={`w-56 mt-2 z-50 border shadow-lg rounded-md py-4 px-6 bg-white dark:bg-neutral-900
                          transition-all duration-300 ease-in-out origin-top
                          divide-y divide-neutral-200 dark:divide-neutral-800
                          ${
                            isOpen
                              ? "opacity-100 scale-100 translate-y-0"
                              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                          }
                        `}
                        >
                          {item.subItems?.map((subItem) => (
                            <DropdownMenuItem
                              key={subItem.title}
                              className="cursor-pointer  text-base px-2 py-2 hover:bg-muted rounded-sm transition-all duration-200 ease-in-out"
                            >
                              <Link
                                href={subItem.path}
                                className="w-full block"
                              >
                                {subItem.title}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex  items-center space-x-4">
          <ModeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {/* This is now moved to the top of the return statement */}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-neutral-900 shadow-lg z-50 md:hidden
          transition-transform duration-300 ease-in-out transform
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Items */}
            <ul className="space-y-4">
              {navItems.map((item: NavItemT) => {
                const hasSubmenu = item.subItems && item.subItems.length > 0;
                const isOpen = mobileOpenDropdown === item.path;

                return (
                  <li key={item.title}>
                    {!hasSubmenu && (
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className="block py-3 px-4 text-lg font-medium hover:bg-muted rounded-md transition-all duration-200 ease-in-out"
                      >
                        {item.title}
                      </Link>
                    )}

                    {hasSubmenu && (
                      <div>
                        <button
                          onClick={() => handleDropdownClick(item.path)}
                          className="w-full text-left py-3 px-4 text-lg font-medium hover:bg-muted rounded-md transition-all duration-200 ease-in-out flex items-center justify-between"
                        >
                          {item.title}
                          <span
                            className={`transform transition-transform duration-200 ease-in-out ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            ▼
                          </span>
                        </button>

                        {/* Mobile Submenu */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="ml-4 mt-2 space-y-2">
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.path}
                                onClick={handleLinkClick}
                                className="block py-2 px-4 text-base hover:bg-muted rounded-md transition-all duration-200 ease-in-out"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
