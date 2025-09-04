import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => String(p.id) === id);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-gray-600">Project not found.</p>
        <Link to="/" className="text-blue-600 hover:underline">Back to portfolio</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900">
          <i className="fas fa-arrow-left mr-2"></i>
          Back
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">{project.title}</h1>
      <p className="text-gray-600 text-lg mb-8">{project.description}</p>

      <div className="grid gap-6 md:gap-8">
        {/* Main image */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <img src={project.imageUrl} alt={project.title} className="w-full h-[420px] md:h-[520px] object-cover" />
          <div className="p-4 border-t border-gray-100">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gray-900 text-white px-5 py-3 rounded-lg font-medium hover:bg-black transition-all">
              <i className="fab fa-github"></i>
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        {/* Gallery */}
        {project.galleryImages?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">More screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.galleryImages.map((src, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group">
                  <img src={src} alt={`${project.title} screenshot ${idx+1}`} className="w-full max-h-[700px] bg-gray-50 object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
