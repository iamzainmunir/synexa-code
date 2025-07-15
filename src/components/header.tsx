"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants/nav-items";
import { ModeToggle } from "./toogle-theme-btn";

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = React.useState<
    string | null
  >(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop dropdown handlers
  const handleMouseEnter = (itemPath: string) => {
    setOpenDropdown(itemPath);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Mobile dropdown handler
  const handleMobileDropdownClick = (itemPath: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === itemPath ? null : itemPath);
  };

  // Close mobile menu and dropdowns
  const handleLinkClick = () => {
    setMenuState(false);
    setMobileOpenDropdown(null);
  };

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-lg font-semibold text-muted-foreground hover:text-accent-foreground">
                {navItems.map((item, index) => {
                  const hasSubmenu = item.subItems && item.subItems.length > 0;
                  const isOpen = openDropdown === item.path;

                  return (
                    <li key={index} className="relative">
                      {!hasSubmenu ? (
                        <Link
                          href={item.path}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          <span>{item.title}</span>
                        </Link>
                      ) : (
                        <div
                          className="relative"
                          onMouseEnter={() => handleMouseEnter(item.path)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <button className="text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150">
                            <span>{item.title}</span>
                            <ChevronDown
                              className={cn(
                                "size-4 transition-transform duration-200",
                                isOpen && "rotate-180"
                              )}
                            />
                          </button>

                          {/* Desktop Dropdown */}
                          <div
                            className={cn(
                              "absolute top-full divide-y bg-background/50 max-w-4xl  backdrop-blur-lg  left-0  w-[220px] rounded-md border  shadow-lg transition-all duration-200 ease-in-out origin-top",
                              isOpen
                                ? "opacity-100 scale-100 translate-y-0"
                                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                            )}
                          >
                            <div className="py-2 divide-y">
                              {item.subItems?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.path}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent-foreground hover:bg-muted transition-colors duration-150"
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

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {navItems.map((item, index) => {
                    const hasSubmenu =
                      item.subItems && item.subItems.length > 0;
                    const isOpen = mobileOpenDropdown === item.path;

                    return (
                      <li key={index}>
                        {!hasSubmenu ? (
                          <Link
                            href={item.path}
                            onClick={handleLinkClick}
                            className="text-muted-foreground hover:text-accent-foreground block duration-150"
                          >
                            <span>{item.title}</span>
                          </Link>
                        ) : (
                          <div>
                            <button
                              onClick={() =>
                                handleMobileDropdownClick(item.path)
                              }
                              className="text-muted-foreground hover:text-accent-foreground flex items-center justify-between w-full duration-150"
                            >
                              <span>{item.title}</span>
                              <ChevronDown
                                className={cn(
                                  "size-4 transition-transform duration-200",
                                  isOpen && "rotate-180"
                                )}
                              />
                            </button>

                            {/* Mobile Dropdown */}
                            <div
                              className={cn(
                                "overflow-hidden transition-all duration-300 ease-in-out",
                                isOpen
                                  ? "max-h-96 opacity-100 mt-3"
                                  : "max-h-0 opacity-0"
                              )}
                            >
                              <div className="ml-4 space-y-3">
                                {item.subItems?.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.path}
                                    onClick={handleLinkClick}
                                    className="block text-sm text-muted-foreground hover:text-accent-foreground duration-150"
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
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <ModeToggle />

                <Button
                  asChild
                  size="sm"
                  className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
                >
                  <Link href="#">
                    <span>Get Started</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
