import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { getAllSampleResumes, templateInfo } from '../utils/sampleData';
import TemplatePreviewModal from './TemplatePreviewModal';

const TemplateShowcase = ({ onUseTemplate }) => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sampleResumes = getAllSampleResumes();

  // Get unique categories
  const categories = ['All', ...new Set(Object.values(templateInfo).map(info => info.category))];

  // Filter resumes by category
  const filteredResumes = selectedCategory === 'All' 
    ? sampleResumes 
    : sampleResumes.filter(resume => 
        templateInfo[resume.template]?.category === selectedCategory
      );

  const handlePreviewClick = (resume) => {
    setSelectedResume(resume);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedResume(null);
  };

  const handleUseTemplate = (templateName) => {
    setIsModalOpen(false);
    onUseTemplate(templateName);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 px-6 py-3 rounded-full mb-6">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-semibold">17 Professional Templates</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Explore Our <span className="gradient-text">Resume Templates</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose from our collection of professionally designed templates. Click any template to preview in detail and start building your resume instantly.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredResumes.map((resume) => {
          const info = templateInfo[resume.template];
          return (
            <div
              key={resume.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              onClick={() => handlePreviewClick(resume)}
            >
              {/* Template Thumbnail */}
              <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
                
                {/* Photo Placeholder - Fades out on hover */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-center p-4">
                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${info.color} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                      {resume.name.charAt(0)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{resume.name}</h3>
                    <p className="text-sm text-gray-600 font-medium">{resume.profession}</p>
                  </div>
                </div>
                
                {/* Preview Button - Fades in on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transform scale-95 group-hover:scale-100 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePreviewClick(resume);
                    }}
                  >
                    <Eye className="w-5 h-5" />
                    Preview Template
                  </button>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {info.name}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${info.color} text-white font-medium`}>
                    {info.category}
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-500 space-x-2">
                  <span>✨ {resume.data.experience.length} Experiences</span>
                  <span>•</span>
                  <span>🎓 {resume.data.education.length} Education</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredResumes.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-600">Try selecting a different category</p>
        </div>
      )}

      {/* Preview Modal */}
      <TemplatePreviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        resume={selectedResume}
        onUseTemplate={handleUseTemplate}
      />
    </div>
  );
};

export default TemplateShowcase;

