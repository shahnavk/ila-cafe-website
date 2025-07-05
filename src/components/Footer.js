import React from 'react';
import { Instagram, Phone } from 'lucide-react';


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cafebeige text-textbrown px-6 py-8 mt-0 border-t border-cafebrown text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* Contact Info */}
        <div>
          <p className="font-semibold">© {year} Ila Café & Desserts</p>
          <p>125–131 Westminster Bridge Road, London SE1 7HJ</p>
          <p>Phone: <a href="tel:02080770054" className="hover:text-cafegreen transition">020 8077 0054</a></p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a
            href="https://instagram.com/ilacafedesserts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cafegreen transition"
          >
            <Instagram size={18} />
            Instagram
          </a>
          <a
  href="https://wa.me/442080770054"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-cafegreen transition"
>
  <i className="fab fa-whatsapp text-lg" />
  WhatsApp
</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
