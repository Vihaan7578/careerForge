import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import TemplateShowcase from './TemplateShowcase';

const ExamplesPage = ({ onBack, onUseTemplate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </button>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold gradient-text">CareerForge Examples</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold">17 Professional Resume Examples</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Explore <span className="gradient-text">Resume Templates</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our collection of professionally designed resume templates. Each example showcases a different profession with realistic data. Click any template to preview it in detail, then use it to start building your own resume.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold gradient-text mb-2">17</div>
            <p className="text-gray-600 font-medium">Professional Templates</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold gradient-text mb-2">6</div>
            <p className="text-gray-600 font-medium">Template Categories</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-4xl font-bold gradient-text mb-2">15+</div>
            <p className="text-gray-600 font-medium">Different Professions</p>
          </div>
        </div>
      </div>

      {/* Template Showcase */}
      <TemplateShowcase onUseTemplate={onUseTemplate} />

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Found Your Perfect Template?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Click "Use This Template" on any example to start building your professional resume
          </p>
          <button
            onClick={onBack}
            className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;

