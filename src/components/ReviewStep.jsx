import React, { useState } from 'react';
import { CheckCircle, Edit2, Download, Sparkles } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
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
import { generateAboutMe } from '../utils/ai';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ReviewStep = ({ onEdit }) => {
  const { resumeData, selectedTemplate, setSelectedTemplate, updateSummary } = useResume();
  const [generatingSummary, setGeneratingSummary] = useState(false);
  const [downloadingPDF, setDownloadingPDF] = useState(false);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate data={resumeData} />;
      case 'classic':
        return <ClassicTemplate data={resumeData} />;
      case 'executive':
        return <ExecutiveTemplate data={resumeData} />;
      case 'tech':
        return <TechTemplate data={resumeData} />;
      case 'creative':
        return <CreativeTemplate data={resumeData} />;
      case 'ats':
        return <AtsStandardTemplate data={resumeData} />;
      case 'geometric':
        return <GeometricTemplate data={resumeData} />;
      case 'healthcare':
        return <HealthcareTemplate data={resumeData} />;
      case 'academic':
        return <AcademicTemplate data={resumeData} />;
      case 'pastel':
        return <PastelTemplate data={resumeData} />;
      case 'gradient':
        return <GradientTemplate data={resumeData} />;
      case 'typography':
        return <TypographyTemplate data={resumeData} />;
      case 'split-column':
        return <SplitColumnTemplate data={resumeData} />;
      case 'timeline':
        return <TimelineTemplate data={resumeData} />;
      case 'card':
        return <CardTemplate data={resumeData} />;
      case 'compact':
        return <CompactTemplate data={resumeData} />;
      case 'visual-skills':
        return <VisualSkillsTemplate data={resumeData} />;
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  const handleGenerateAboutMe = async () => {
    setGeneratingSummary(true);
    try {
      const aboutMe = await generateAboutMe(resumeData);
      updateSummary(aboutMe);
    } catch (error) {
      console.error('Error generating About Me:', error);
      alert('Failed to generate About Me. Please try again or write one manually.');
    } finally {
      setGeneratingSummary(false);
    }
  };

  const handleDownloadPDF = async () => {
    setDownloadingPDF(true);
    try {
      const element = document.getElementById('resume-template');
      
      // Get the actual rendered dimensions of the element
      const rect = element.getBoundingClientRect();
      const actualWidth = rect.width;
      const actualHeight = rect.height;
      
      // Capture the resume as canvas at the exact preview size
      const canvas = await html2canvas(element, {
        scale: 2, // For quality
        useCORS: true,
        logging: false,
        width: actualWidth,
        height: actualHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Convert pixels to mm (assuming 96 DPI standard)
      // 1 inch = 25.4mm, 96 pixels = 1 inch
      const pixelsToMm = 25.4 / 96;
      const pdfWidth = actualWidth * pixelsToMm;
      const pdfHeight = actualHeight * pixelsToMm;
      
      // Create PDF with exact preview dimensions
      const pdf = new jsPDF({
        orientation: pdfHeight > pdfWidth ? 'portrait' : 'landscape',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
      });

      // Add image to fill entire PDF perfectly
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Save with user's name
      pdf.save(`${resumeData.personalInfo.fullName || 'Resume'}_Resume.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setDownloadingPDF(false);
    }
  };

  const completionStats = {
    personalInfo: resumeData.personalInfo.fullName && resumeData.personalInfo.email && resumeData.personalInfo.phone,
    summary: !!resumeData.summary,
    experience: resumeData.experience.length > 0,
    education: resumeData.education.length > 0,
    skills: (resumeData.skills.technical.length + resumeData.skills.soft.length) > 0,
  };

  const completionPercentage = Math.round(
    (Object.values(completionStats).filter(Boolean).length / Object.keys(completionStats).length) * 100
  );

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Review & Generate</h2>
        <p className="text-gray-600">Your resume is ready! Choose a template and download as PDF.</p>
      </div>

      {/* Completion Status */}
      <div className="card bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Resume Completeness</h3>
          <span className="text-3xl font-bold text-primary">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className={`flex items-center gap-2 ${completionStats.personalInfo ? 'text-green-600' : 'text-gray-400'}`}>
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Personal Info</span>
          </div>
          <div className={`flex items-center gap-2 ${completionStats.experience ? 'text-green-600' : 'text-gray-400'}`}>
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Experience</span>
          </div>
          <div className={`flex items-center gap-2 ${completionStats.education ? 'text-green-600' : 'text-gray-400'}`}>
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Education</span>
          </div>
          <div className={`flex items-center gap-2 ${completionStats.skills ? 'text-green-600' : 'text-gray-400'}`}>
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Skills</span>
          </div>
          <div className={`flex items-center gap-2 ${completionStats.summary ? 'text-green-600' : 'text-gray-400'}`}>
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Summary</span>
          </div>
        </div>
      </div>

      {/* AI Summary Generation */}
      {!resumeData.summary && (
        <div className="card bg-purple-50 border border-purple-200">
          <div className="flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-purple-600 mt-1" />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">Generate About Me with AI</h3>
              <p className="text-sm text-gray-600 mb-4">
                Let AI create a warm, personal "About Me" section that blends your achievements with your personality.
              </p>
              <button
                onClick={handleGenerateAboutMe}
                disabled={generatingSummary}
                className="btn-primary text-sm"
              >
                {generatingSummary ? (
                  <>
                    <span className="animate-spin inline-block mr-2">⚡</span>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    Generate About Me with AI
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Template Selection */}
      <div className="card">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Choose Your Template</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <button
            onClick={() => setSelectedTemplate('modern')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'modern'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Modern</div>
            <div className="text-xs text-gray-600">Clean & Professional</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('classic')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'classic'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Classic</div>
            <div className="text-xs text-gray-600">Traditional & Elegant</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('executive')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'executive'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Executive</div>
            <div className="text-xs text-gray-600">Corporate & Sophisticated</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('tech')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'tech'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Tech</div>
            <div className="text-xs text-gray-600">Technical & Modern</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('creative')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'creative'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Creative</div>
            <div className="text-xs text-gray-600">Artistic & Visual</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('ats')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'ats'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">ATS</div>
            <div className="text-xs text-gray-600">Job Application Ready</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('geometric')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'geometric'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Geometric</div>
            <div className="text-xs text-gray-600">Modern Shapes & Design</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('healthcare')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'healthcare'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Healthcare</div>
            <div className="text-xs text-gray-600">Medical Professional</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('academic')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'academic'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Academic</div>
            <div className="text-xs text-gray-600">Scholarly & Research</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('pastel')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'pastel'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Pastel</div>
            <div className="text-xs text-gray-600">Soft & Aesthetic</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('gradient')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'gradient'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Gradient</div>
            <div className="text-xs text-gray-600">Colorful & Modern</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('typography')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'typography'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Typography</div>
            <div className="text-xs text-gray-600">Font-Focused Design</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('split-column')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'split-column'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Split Column</div>
            <div className="text-xs text-gray-600">Sidebar Layout</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('timeline')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'timeline'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Timeline</div>
            <div className="text-xs text-gray-600">Visual Progression</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('card')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'card'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Card</div>
            <div className="text-xs text-gray-600">Modern Card Layout</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('compact')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'compact'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Compact</div>
            <div className="text-xs text-gray-600">Space Efficient</div>
          </button>
          <button
            onClick={() => setSelectedTemplate('visual-skills')}
            className={`p-3 border-2 rounded-lg transition-all ${
              selectedTemplate === 'visual-skills'
                ? 'border-primary bg-blue-50 shadow-lg'
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <div className="font-semibold text-gray-900 mb-1">Visual Skills</div>
            <div className="text-xs text-gray-600">Progress Bars & Charts</div>
          </button>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="card">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Preview</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-xl bg-white">
          <div id="resume-preview-container">
            {renderTemplate()}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDownloadPDF}
          disabled={downloadingPDF}
          className="btn-primary flex-1 text-lg py-4"
        >
          {downloadingPDF ? (
            <>
              <span className="animate-spin inline-block mr-2">⚡</span>
              Creating PDF...
            </>
          ) : (
            <>
              <Download className="w-5 h-5 inline mr-2" />
              Download PDF
            </>
          )}
        </button>
        <button
          onClick={onEdit}
          className="btn-secondary flex-1 text-lg py-4"
        >
          <Edit2 className="w-5 h-5 inline mr-2" />
          Edit Information
        </button>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <strong>✅ Ready!</strong> Your resume looks great! Click "Download PDF" to get your professional resume.
        </p>
      </div>
    </div>
  );
};

export default ReviewStep;

