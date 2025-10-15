import React from 'react';
import { X, Check } from 'lucide-react';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import ExecutiveTemplate from './templates/ExecutiveTemplate';
import TechTemplate from './templates/TechTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import AtsStandardTemplate from './templates/AtsStandardTemplate';
import GeometricTemplate from './templates/GeometricTemplate';
import HealthcareTemplate from './templates/HealthcareTemplate';
import AcademicTemplate from './templates/AcademicTemplate';
import PastelTemplate from './templates/PastelTemplate';
import GradientTemplate from './templates/GradientTemplate';
import TypographyTemplate from './templates/TypographyTemplate';
import SplitColumnTemplate from './templates/SplitColumnTemplate';
import TimelineTemplate from './templates/TimelineTemplate';
import CardTemplate from './templates/CardTemplate';
import CompactTemplate from './templates/CompactTemplate';
import VisualSkillsTemplate from './templates/VisualSkillsTemplate';

const TemplatePreviewModal = ({ isOpen, onClose, resume, onUseTemplate }) => {
  if (!isOpen || !resume) return null;

  const renderTemplate = () => {
    const templateProps = { data: resume.data };
    
    switch (resume.template) {
      case 'modern':
        return <ModernTemplate {...templateProps} />;
      case 'classic':
        return <ClassicTemplate {...templateProps} />;
      case 'executive':
        return <ExecutiveTemplate {...templateProps} />;
      case 'tech':
        return <TechTemplate {...templateProps} />;
      case 'creative':
        return <CreativeTemplate {...templateProps} />;
      case 'ats-standard':
        return <AtsStandardTemplate {...templateProps} />;
      case 'geometric':
        return <GeometricTemplate {...templateProps} />;
      case 'healthcare':
        return <HealthcareTemplate {...templateProps} />;
      case 'academic':
        return <AcademicTemplate {...templateProps} />;
      case 'pastel':
        return <PastelTemplate {...templateProps} />;
      case 'gradient':
        return <GradientTemplate {...templateProps} />;
      case 'typography':
        return <TypographyTemplate {...templateProps} />;
      case 'split-column':
        return <SplitColumnTemplate {...templateProps} />;
      case 'timeline':
        return <TimelineTemplate {...templateProps} />;
      case 'card':
        return <CardTemplate {...templateProps} />;
      case 'compact':
        return <CompactTemplate {...templateProps} />;
      case 'visual-skills':
        return <VisualSkillsTemplate {...templateProps} />;
      default:
        return <ModernTemplate {...templateProps} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-t-xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{resume.name}</h2>
            <p className="text-sm opacity-90">{resume.profession}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            aria-label="Close preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Preview Content */}
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] p-6 bg-gray-50">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {renderTemplate()}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 rounded-b-xl flex items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p className="font-semibold">💡 Like this template?</p>
            <p className="text-xs">Click "Use This Template" to start with this design</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => onUseTemplate(resume.template)}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold flex items-center gap-2 shadow-lg"
            >
              <Check className="w-5 h-5" />
              Use This Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewModal;

