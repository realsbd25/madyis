"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={200}
            height={60}
          />
            {/* <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-xl transition-transform group-hover:scale-110">
              M
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              MADYIS
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 lg:px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-accent/10"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="sm" className="font-medium">
                Watch Demo
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="font-medium bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-in slide-in-from-top-5 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 space-y-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <Button variant="outline" className="w-full font-medium">
                    Watch Demo
                  </Button>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <Button className="w-full font-medium bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
