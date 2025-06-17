import { useEffect, useState } from 'react';
import { Search, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'Home',
    'About Us',
    'Gallery',
    'Menu',
    'Contact Us',
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cafebeige shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 p-[10px] min-h-[80px]">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/ila-Logo-svg.svg" alt="Ila Cafe Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((label) => (
            <a
              key={label}
              href= {label === 'Menu' ? '/menu' : '#'}
              className="relative text-gray-700 font-medium text-sm after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cafebrown after:transition-all after:duration-300 hover:after:w-full hover:text-cafegreen"
            >
              {label}
            </a>
          ))}
          <button className="hover:text-cafegreen">
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-textbrown hover:text-cafegreen"
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 bg-cafebeige transition-all duration-300">
          {navLinks.map((label) => (
            <a
              key={label}
              href="#"
              className="block py-2 text-textbrown font-medium text-sm border-b border-cafebrown hover:text-cafegreen"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <button className="mt-4 flex items-center gap-1 text-textbrown hover:text-cafegreen">
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>
      )}
    </header>
  );
}
