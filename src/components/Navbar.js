import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Menu as MenuIcon, X, UtensilsCrossed, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', path: '/menu', icon: <UtensilsCrossed size={18} /> },
    { label: 'Contact', path: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md bg-white' : 'bg-transparent'}`}>
      <nav className="flex items-center justify-between px-6 py-3 min-h-[80px] relative">

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map(({ label, path, icon }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-1 relative font-medium text-sm
                 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-cafebrown after:transition-all after:duration-300
                 ${isActive ? 'text-cafegreen after:w-full' : 'text-gray-700 after:w-0 hover:after:w-full hover:text-cafegreen'}`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </div>

        {/* Logo - Centered on md+ only */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link to="/" aria-label="Go to homepage">
            <img src="/ila-Logo-svg.svg" alt="Ila Cafe Logo" className="h-12 sm:h-16 w-auto" />
          </Link>
        </div>

        {/* CTA + Search (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Link to="/anniversaryLot" className="bg-cafebrown text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-cafegreen transition">
            Join Anniversary Lot
          </Link>
          <button className="hover:text-cafegreen text-textbrown" aria-label="Search">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
            className="text-textbrown hover:text-cafegreen"
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden flex flex-col items-center text-center px-6 pb-6 bg-cafebeige/90 backdrop-blur transition-all duration-300 transform ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-2 opacity-0 pointer-events-none'
      }`}>
        {navLinks.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `w-full py-3 border-b border-cafebrown font-medium text-textbrown text-base ${
                isActive ? 'text-cafegreen' : 'hover:text-cafegreen'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
        <Link
          to="/anniversaryLot"
          className="w-full py-3 font-medium text-textbrown hover:text-cafegreen border-b border-cafebrown"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Join Anniversary Lot
        </Link>
        <button
          className="w-full py-3 flex justify-center items-center gap-2 text-textbrown hover:text-cafegreen"
          aria-label="Search"
        >
          <Search size={18} />
          <span>Search</span>
        </button>
      </div>
    </header>
  );
}

