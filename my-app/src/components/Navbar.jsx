import React from 'react'

const Navbar = () => {
  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    // Add a small delay to ensure the page is fully loaded
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.log(`Element with id '${sectionId}' not found`);
      }
    }, 100);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  };

  return (
    <div>
      <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div 
              className="flex-shrink-0 text-white font-bold text-xl cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              Stream<font color="#fb923c">Live</font>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 text-white font-medium">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="hover:text-orange-400 transition"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="hover:text-orange-400 transition"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="hover:text-orange-400 transition"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-orange-400 transition"
              >
                Contact
              </button>
            </div>

            {/* CTA Button - Alternative approach */}
            <div className="hidden md:block">
              <a 
                href="#joinsection"
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md text-white font-semibold hover:from-pink-500 hover:to-orange-500 transition-all inline-block"
              >
                Live Now
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                id="menu-toggle" 
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className="md:hidden hidden px-4 pb-4">
          <button 
            onClick={() => {scrollToSection('hero'); toggleMobileMenu();}} 
            className="block py-2 text-white hover:text-orange-400 w-full text-left"
          >
            Home
          </button>
          <button 
            onClick={() => {scrollToSection('features'); toggleMobileMenu();}} 
            className="block py-2 text-white hover:text-orange-400 w-full text-left"
          >
            Features
          </button>
          <button 
            onClick={() => {scrollToSection('pricing'); toggleMobileMenu();}} 
            className="block py-2 text-white hover:text-orange-400 w-full text-left"
          >
            Pricing
          </button>
          <button 
            onClick={() => {scrollToSection('contact'); toggleMobileMenu();}} 
            className="block py-2 text-white hover:text-orange-400 w-full text-left"
          >
            Contact
          </button>
          {/* Fixed mobile Live Now button - Alternative approach */}
          <a 
            href="#joinsection"
            onClick={toggleMobileMenu}
            className="block mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-md text-center hover:from-pink-500 hover:to-orange-500 transition-all w-full"
          >
            Live Now
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar