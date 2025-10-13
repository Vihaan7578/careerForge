import React from 'react';
import { useResume } from '../context/ResumeContext';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';

const ResumePreview = () => {
  const { resumeData, selectedTemplate } = useResume();

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate data={resumeData} />;
      case 'classic':
        return <ClassicTemplate data={resumeData} />;
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return (
    <div className="sticky top-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Live Preview</h3>
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-xl bg-white">
        <div className="transform scale-90 origin-top">
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;

