import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Отслеживаем состояние мобильного меню
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Слушаем изменения размера окна
    window.addEventListener('resize', handleResize);
    
    // Проверяем состояние при загрузке
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Отслеживаем скролл для изменения цвета кнопки
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const shouldBeScrolled = scrollTop > 100;
      setIsScrolled(shouldBeScrolled);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    // Добавляем слушатель на все возможные элементы
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.documentElement.addEventListener('scroll', handleScroll, { passive: true });
    document.body.addEventListener('scroll', handleScroll, { passive: true });
    
    // Также попробуем добавить на main контейнер
    const mainElement = document.querySelector('.main-content');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    // Проверяем начальное состояние
    updateScrollState();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      document.documentElement.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('scroll', handleScroll);
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen relative">
      {/* Projects Button - Adaptive Position */}
      <Link 
        to="/" 
        className={`fixed top-20 left-4 md:left-4 lg:left-8 xl:left-16 z-40 
              inline-flex items-center space-x-2 px-3 py-2 rounded-lg 
              transition-all duration-300 shadow-sm hover:shadow-md 
              bg-white/20 backdrop-blur-md text-white hover:bg-white/30 
              ${isMobileMenuOpen ? 'hidden' : 'block'}`}
      >
        <i className="fas fa-arrow-left text-sm"></i>
        <span className="font-medium text-sm">Projects</span>
      </Link>
      
      {/* Hero Section */}
      <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
            <img 
              src={`${import.meta.env.BASE_URL}images/profile.png`} 
              alt="Maksim Kovalev"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}images/placeholder.png`; }}
            />
          </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Maksim Kovalev</h1>
        <p className="text-xl text-white mb-6">iOS & macOS Developer</p>
        <div className="flex justify-center space-x-4">
          <a 
            href="mailto:kovalev_mk@tuta.io" 
            className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <i className="fas fa-envelope"></i>
            <span>Get in Touch</span>
          </a>
          <a 
            href="https://github.com/teasec4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* About Me */}
        <div className="rounded-2xl shadow-lg border border-white/20 
                bg-white/10 backdrop-blur-md 
                hover:bg-white/20 transition-all duration-300 p-8 text-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <i className="fas fa-user text-blue-500 mr-3"></i>
            About Me
          </h2>
          <p className="text-white leading-relaxed mb-4">
            Passionate iOS and macOS developer with a strong focus on creating intuitive, 
            user-friendly applications. I specialize in SwiftUI, SwiftData, and modern 
            Apple development frameworks.
          </p>
          <p className="text-white leading-relaxed">
            With experience in both mobile and desktop development, I enjoy building 
            applications that seamlessly integrate with the Apple ecosystem and provide 
            exceptional user experiences.
          </p>
        </div>

        {/* Experience */}
        <div className="rounded-2xl shadow-lg border border-white/20 
                bg-white/10 backdrop-blur-md 
                hover:bg-white/20 transition-all duration-300 p-8 text-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <i className="fas fa-briefcase text-green-500 mr-3"></i>
            Experience
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">iOS Developer</h3>
              <p className="text-white text-sm">2023 - Present</p>
              <p className="text-white text-sm mt-1">
                Developing native iOS applications using SwiftUI, SwiftData, and modern Apple frameworks.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900">macOS Developer</h3>
              <p className="text-white text-sm">2023 - Present</p>
              <p className="text-white text-sm mt-1">
                Creating desktop applications with AppKit integration and system-level features.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Interests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Technical Skills */}
        <div className="rounded-2xl shadow-lg border border-white/20 
                bg-white/10 backdrop-blur-md 
                hover:bg-white/20 transition-all duration-300 p-8 text-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <i className="fas fa-code text-purple-500 mr-3"></i>
            Technical Skills
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">iOS Development</h3>
              <div className="flex flex-wrap gap-2">
                {['SwiftUI', 'SwiftData', 'Combine', 'URLSession', 'Core Data', 'UserNotifications'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">macOS Development</h3>
              <div className="flex flex-wrap gap-2">
                {['AppKit', 'SwiftUI', 'CloudKit', 'Menu Bar Integration', 'Keyboard Shortcuts'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Other Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Git', 'Xcode', 'Figma'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="rounded-2xl shadow-lg border border-white/20 
                bg-white/10 backdrop-blur-md 
                hover:bg-white/20 transition-all duration-300 p-8 text-white">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <i className="fas fa-heart text-red-500 mr-3"></i>
            Interests
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <i className="fas fa-mobile-alt text-blue-500"></i>
              <span className="text-white">Mobile App Development</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-desktop text-green-500"></i>
              <span className="text-white">Desktop Applications</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-palette text-purple-500"></i>
              <span className="text-white">UI/UX Design</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-chart-line text-orange-500"></i>
              <span className="text-white">Data Visualization</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-cogs text-gray-500"></i>
              <span className="text-white">System Integration</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-rocket text-pink-500"></i>
              <span className="text-white">Innovation & Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="rounded-2xl shadow-lg border border-white/20 
                bg-white/10 backdrop-blur-md 
                hover:bg-white/20 transition-all duration-300 p-8 text-white text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Development Philosophy</h2>
        <p className="text-lg text- leading-relaxed max-w-3xl mx-auto">
          "I believe in creating applications that not only function flawlessly but also provide 
          delightful user experiences. Every line of code should serve a purpose, and every 
          feature should enhance the user's workflow."
        </p>
      </div>
    </div>
  );
};

export default About;
