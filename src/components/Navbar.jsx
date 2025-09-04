import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadResume = () => {
    // Here you can add logic for downloading resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume
    link.download = 'resume.pdf';
    link.click();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Kovalev Maksim</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a href="mailto:kovalev_mk@tuta.io" className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200">
                <i className="fas fa-envelope text-gray-500"></i>
                <span>kovalev_mk@tuta.io</span>
              </a>
              
              <a href="https://github.com/teasec4" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200">
                <i className="fab fa-github text-gray-500"></i>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/maksim-kovalev-a12b35378/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200">
                <i className="fab fa-linkedin text-gray-500"></i>
                <span>LinkedIn</span>
              </a>
            </div>
            
            <button 
              onClick={handleDownloadResume} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md flex items-center space-x-2"
            >
              <i className="fas fa-download"></i>
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="space-y-2">
            <a href="mailto:kovalev_mk@tuta.io" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">
              <i className="fas fa-envelope text-gray-500 w-5"></i>
              <span>kovalev_mk@tuta.io</span>
            </a>
            <a href="https://github.com/teasec4" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">
              <i className="fab fa-github text-gray-500 w-5"></i>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/maksim-kovalev-a12b35378/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">
              <i className="fab fa-linkedin text-gray-500 w-5"></i>
              <span>LinkedIn</span>
            </a>
            <button 
              onClick={handleDownloadResume} 
              className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm"
            >
              <i className="fas fa-download"></i>
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
