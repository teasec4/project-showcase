import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

// Скелетон компонент для загрузки картинки
const ImageSkeleton = () => (
  <div className="w-full aspect-[16/10] sm:aspect-[4/3] bg-gray-200 rounded-2xl animate-pulse relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-gray-400 rounded-full animate-pulse"></div>
    </div>
  </div>
);

// Компонент для iOS бейджа
const IOSBadge = ({ version, isMac = false }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${isMac ? 'bg-gray-800 text-white' : 'bg-black text-white'}`}>
    <i className={`fab ${isMac ? 'fa-apple' : 'fa-apple'} text-white`}></i>
    <span>{isMac ? 'macOS' : 'iOS'} {version}+</span>
  </div>
);

const ProjectShowcase = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const currentProject = projects[currentProjectIndex];

  // Сброс состояния загрузки при смене проекта
  useEffect(() => {
    setIsImageLoading(true);
  }, [currentProjectIndex]);

  // Предзагрузка следующей картинки для плавного перехода
  useEffect(() => {
    const nextIndex = (currentProjectIndex + 1) % projects.length;
    const nextProject = projects[nextIndex];
    const img = new Image();
    img.src = nextProject.imageUrl;
  }, [currentProjectIndex]);

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentProjectIndex((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentProjectIndex((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // // Автоматическое переключение слайдов (опционально)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isTransitioning) {
  //       nextProject();
  //     }
  //   }, 15000); // 15 секунд

  //   return () => clearInterval(interval);
  // }, [isTransitioning]); // Убрали currentProjectIndex из зависимостей


  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 min-h-screen flex flex-col">
      {/* Мобильная версия */}
      <div className="lg:hidden pb-20">
        {/* Заголовок */}
        <div className="text-center p-4 max-w-3xl mx-auto transition-opacity duration-300">
          <h2 className={`text-2xl font-semibold text-gray-900 mb-3 tracking-tight transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {currentProject.title}
          </h2>
          <p className={`text-base text-white leading-relaxed transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {currentProject.description}
          </p>
        </div>

        {/* Картинка */}
        <div className="mb-4 transition-opacity duration-300">
          <div className="w-full max-w-sm mx-auto">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200/70 shadow-xl group">
              {isImageLoading && <ImageSkeleton />}
              <img
                key={`project-${currentProject.id}-${currentProjectIndex}`}
                src={currentProject.imageUrl}
                alt={`${currentProject.title} – preview`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsImageLoading(false)}
                onError={(e) => { 
                  e.currentTarget.src = "/images/placeholder.png"; 
                  setIsImageLoading(false);
                }}
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="backdrop-blur-md  rounded-2xl shadow-lg  p-4 mb-6 transition-opacity duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
            <IOSBadge version={currentProject.iosVersion || '18'} isMac={currentProject.isMac} />
          </div>
          <ul className="space-y-3">
            {currentProject.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <i className="fas fa-check text-green-500 mt-1 flex-shrink-0 text-sm"></i>
                <span className="text-white text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <a 
              href={currentProject.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-black transition-all duration-200 shadow-sm hover:shadow-md text-sm"
            >
              <i className="fab fa-github"></i>
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        {/* Navigation - подняли выше */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <button 
            onClick={prevProject} 
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isTransitioning}
          >
            <i className="fas fa-chevron-left"></i>
            <span className="font-medium text-sm">Previous</span>
          </button>

          <div className="flex items-center space-x-2 text-base font-semibold text-gray-700">
            <span className="text-blue-500">{currentProjectIndex + 1}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{projects.length}</span>
          </div>

          <button 
            onClick={nextProject} 
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isTransitioning}
          >
            <span className="font-medium text-sm">Next</span>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Плавающие кнопки навигации для мобильных - всегда видимые */}
      <div className="lg:hidden fixed bottom-6  left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex flex-col items-center gap-3">
          <Link
            to={`/project/${currentProject.id}`}
            className="inline-flex items-center gap-1.5 rounded-md 
                       bg-blue-600/90 backdrop-blur-md px-3 py-1.5 text-sm text-white font-medium 
                       shadow-sm hover:bg-blue-500/50 hover:backdrop-blur-lg 
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 
                       transition-all duration-300"
          >
                      <span>View Project Details</span>
                      <i className="fas fa-arrow-right text-sm"></i>
                    </Link>
          </div>
        <div className="flex items-center space-x-4 bg-white/30 backdrop-blur-md  rounded-full px-4 py-3 shadow-lg">
          <button 
            onClick={prevProject} 
            className="flex items-center justify-center bg-white/50 backdrop-blur-md w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isTransitioning}
          >
            <i className="fas fa-chevron-left text-gray-600"></i>
          </button>

          <div className="flex items-center bg-white/70 backdrop-blur-md space-x-2 text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
            <span className="text-blue-500">{currentProjectIndex + 1}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{projects.length}</span>
          </div>

          <button 
            onClick={nextProject} 
            className="flex items-center justify-center bg-white/50 backdrop-blur-md w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isTransitioning}
          >
            <i className="fas fa-chevron-right text-gray-600"></i>
          </button>
        </div>
      </div>


      {/* Десктопная версия */}
      <div className="hidden lg:block">
        {/* Заголовок с фиксированной высотой */}
        <div className="text-center p-6 lg:p-8 max-w-3xl mx-auto transition-opacity duration-300 h-52 flex flex-col justify-center">
          <h2 className={`text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 tracking-tight transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {currentProject.title}
          </h2>
          <p className={`text-lg text-white/90 leading-relaxed transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {currentProject.description}
          </p>
        </div>

        {/* Основной контент с фиксированной высотой */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 max-w-7xl mx-auto w-full transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          {/* Left side - project information */}
          <div className="p-6 rounded-xl shadow-lg 
  bg-black/30 backdrop-blur-md 
  hover:bg-black/80 text-white transition duration-300 p-6 lg:p-8 min-h-[520px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Key Features</h3>
              <IOSBadge version={currentProject.iosVersion || '18'} isMac={currentProject.isMac} />
            </div>
            <ul className="space-y-4 flex-grow">
              {currentProject.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <i className="fas fa-check text-green-500 mt-1 flex-shrink-0"></i>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white-100">
            <a
              href={currentProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 
                        bg-blue-600 text-white px-6 py-3 rounded-lg font-medium 
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                        transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <i className="fab fa-github"></i>
              <span>View on GitHub</span>
            </a>
            </div>
          </div>

          {/* Right side - project screenshot */}
          <div className="flex items-start justify-center min-h-[520px] pt-8">
            <div className="w-full max-w-lg flex flex-col items-center">
              {/* Карточка с оверлеем */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group transition-all duration-500 hover:bg-white/20">
                {isImageLoading && <ImageSkeleton />}
                <img
                  key={`project-${currentProject.id}-${currentProjectIndex}`}
                  src={currentProject.imageUrl}
                  alt={`${currentProject.title} – preview`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:scale-[1.03] ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setIsImageLoading(false)}
                  onError={(e) => { 
                    e.currentTarget.src = "/images/placeholder.png"; 
                    setIsImageLoading(false);
                  }}
                />
                {/* gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* hover CTA */}
                <div className="absolute inset-x-4 bottom-4 flex flex-col items-center gap-2 opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white/90 text-lg font-semibold drop-shadow">
                    {currentProject.title}
                  </h3>
                  <Link
                    to={`/project/${currentProject.id}`}
                    className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white/20 backdrop-blur-md px-4 py-2 text-white font-medium hover:bg-white/30 hover:backdrop-blur-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all duration-300"
                  >
                    <span>View Details</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              {/* кнопка под карточкой (для мобилок/тача) */}
              <div className="mt-4 flex justify-center">
                <Link
                  to={`/project/${currentProject.id}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                >
                  <span>View Project Details</span>
                  <i className="fas fa-arrow-right text-sm"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project navigation */}
        <div className="flex items-center justify-center space-x-8 max-w-7xl mx-auto w-full">
          <button
            onClick={prevProject}
            className="flex items-center space-x-2 px-4 py-2 rounded-full 
             bg-white/20 backdrop-blur-md text-white 
             hover:bg-white/30 hover:text-blue-400 
             transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            disabled={isTransitioning}
          >
            <i className="fas fa-chevron-left text-lg"></i>
            <span className="font-medium">Previous</span>
          </button>

          <div className="flex items-center space-x-2 text-lg font-semibold bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full shadow">
            <span className="text-blue-400">{currentProjectIndex + 1}</span>
            <span className="text-white/60">/</span>
            <span className="text-blue-200">{projects.length}</span>
          </div>

          <button
            onClick={nextProject}
            className="flex items-center space-x-2 px-4 py-2 rounded-full 
             bg-white/20 backdrop-blur-md text-white 
             hover:bg-white/30 hover:text-blue-400 
             transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            disabled={isTransitioning}
          >
            <span className="font-medium">Next</span>
            <i className="fas fa-chevron-right text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
