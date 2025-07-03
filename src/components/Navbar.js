import { useEffect, useState } from 'react';
import { Search, Menu as MenuIcon, X } from "lucide-react";
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from "lucide-react";

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

  const navLinks = ['Menu'];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 p-[10px] ${
        isScrolled ? 'shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 p-[10px] min-h-[80px] relative">

        {/* Left: Menu Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((label) => (
            <Link
              key={label}
              to={label === 'Menu' ? '/menu' : '#'}
              className="flex items-center gap-1 relative text-gray-700 font-medium text-sm after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cafebrown after:transition-all after:duration-300 hover:after:w-full hover:text-cafegreen"
            >
              {label === 'Menu' && <UtensilsCrossed size={18} />}
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/">
            <img src="/ila-Logo-svg.svg" alt="Ila Cafe Logo" className="h-20 w-auto" />
          </Link>
        </div>

        {/* Right: Search + CTA */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Link to="/anniversaryLot" className="bg-cafebrown text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition">
            Join Anniversary Lot
          </Link>
          <button className="hover:text-cafegreen text-textbrown">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden ml-auto">
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
            <Link
              key={label}
              to={label === 'Menu' ? '/menu' : '#'}
              className="block py-2 text-textbrown font-medium text-sm border-b border-cafebrown hover:text-cafegreen"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/anniversaryLot"
            className="block mt-4 text-textbrown font-medium hover:text-cafegreen"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Anniversary Lot
          </Link>
          <button className="mt-4 flex items-center gap-1 text-textbrown hover:text-cafegreen">
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>
      )}
    </header>
  );
}
