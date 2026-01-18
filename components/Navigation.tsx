import React, { useState, useEffect } from 'react';

interface NavigationProps {
  currentPage: 'home' | 'contact' | 'article';
  onNavigate: (page: 'home' | 'contact' | 'article') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['À propos', 'Portfolio', 'Services', 'Journal', 'Contact'];

  const handleNavClick = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    const target = item.toLowerCase().replace(' ', '-');
    
    if (item === 'Contact') {
      onNavigate('contact');
      window.scrollTo(0, 0);
    } else {
      if (currentPage !== 'home') {
        onNavigate('home');
        // Wait for render then scroll
        setTimeout(() => {
           document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
         document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('home'); window.scrollTo(0,0); }}
          className="flex items-center gap-4 group"
        >
          <img 
            src="image_2.jpg" 
            alt="Monogramme AC" 
            className="h-14 w-14 object-contain mix-blend-screen brightness-100 group-hover:brightness-110 transition-all duration-300"
          />
          <span className={`font-script text-2xl text-luxury-white ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            Cassiopée
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleNavClick(e, item)}
              className={`font-sans text-xs uppercase tracking-[0.25em] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300 ${
                ((item === 'Contact' && currentPage === 'contact') || (item === 'Journal' && currentPage === 'article')) 
                ? 'text-white after:w-full' 
                : 'text-luxury-silver hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon (Placeholder) */}
        <div className="md:hidden text-white cursor-pointer">
           <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white ml-auto"></span>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;