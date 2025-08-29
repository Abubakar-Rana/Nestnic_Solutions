import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Technologies", path: "/technologies" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-spring glow-effect">
              <span className="text-primary-foreground font-bold text-xl">
                <img
                  src="/favicon.png"   // replace with your logo path
                  alt="Website Logo"
                  className="h-10 w-auto"
                />
              </span>

            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
              Nestnic Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-smooth hover:text-primary story-link ${isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Button variant="hero" size="sm" className="animate-pulse-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-4 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-smooth hover:text-primary px-2 py-1 animate-fade-in animate-delay-${index * 100} ${isActive(item.path)
                      ? "text-primary bg-primary/10 rounded-md"
                      : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="hero" size="sm" className="mt-4 w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;