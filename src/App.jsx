import React, { useState } from 'react';
import { ResumeProvider, useResume } from './context/ResumeContext';
import Landing from './components/Landing';
import PersonalInfoForm from './components/forms/PersonalInfoForm';
import ExperienceForm from './components/forms/ExperienceForm';
import EducationForm from './components/forms/EducationForm';
import SkillsForm from './components/forms/SkillsForm';
import ResumePreview from './components/ResumePreview';
import AISuggestions from './components/AISuggestions';
import { ChevronLeft, ChevronRight, Download, Sparkles, FileText } from 'lucide-react';
import { generateProfessionalSummary } from './utils/gemini';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const steps = [
  { id: 0, title: 'Personal Info', component: PersonalInfoForm },
  { id: 1, title: 'Experience', component: ExperienceForm },
  { id: 2, title: 'Education', component: EducationForm },
  { id: 3, title: 'Skills', component: SkillsForm },
];

const BuilderContent = () => {
  const { currentStep, setCurrentStep, resumeData, updateSummary, selectedTemplate, setSelectedTemplate } = useResume();
  const [showBuilder, setShowBuilder] = useState(false);
  const [generatingSummary, setGeneratingSummary] = useState(false);
  const [downloadingPDF, setDownloadingPDF] = useState(false);

  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerateSummary = async () => {
    setGeneratingSummary(true);
    try {
      const summary = await generateProfessionalSummary(resumeData);
      updateSummary(summary);
      alert('Professional summary generated! Scroll down to see it in the preview.');
    } catch (error) {
      console.error('Error generating summary:', error);
      alert('Failed to generate summary. Please try again.');
    } finally {
      setGeneratingSummary(false);
    }
  };

  const handleDownloadPDF = async () => {
    setDownloadingPDF(true);
    try {
      const element = document.getElementById('resume-template');
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`${resumeData.personalInfo.fullName || 'Resume'}_Resume.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setDownloadingPDF(false);
    }
  };

  if (!showBuilder) {
    return <Landing onGetStarted={() => setShowBuilder(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold gradient-text">AI Resume Builder</h1>
                <p className="text-xs text-gray-500">Step {currentStep + 1} of {steps.length}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleGenerateSummary}
                disabled={generatingSummary}
                className="btn-secondary text-sm hidden sm:block"
              >
                {generatingSummary ? (
                  <>
                    <span className="animate-spin inline-block mr-2">⚡</span>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    Generate Summary
                  </>
                )}
              </button>
              <button
                onClick={handleDownloadPDF}
                disabled={downloadingPDF}
                className="btn-primary text-sm"
              >
                {downloadingPDF ? (
                  <>
                    <span className="animate-spin inline-block mr-2">⚡</span>
                    Creating PDF...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 inline mr-2" />
                    Download PDF
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`text-xs sm:text-sm font-medium ${
                    index === currentStep
                      ? 'text-primary'
                      : index < currentStep
                      ? 'text-green-600'
                      : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <CurrentStepComponent />

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`btn-secondary ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronLeft className="w-5 h-5 inline mr-2" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                  className={`btn-primary ${currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Next
                  <ChevronRight className="w-5 h-5 inline ml-2" />
                </button>
              </div>
            </div>

            {/* Template Selector */}
            <div className="card mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Choose Template</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedTemplate('modern')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    selectedTemplate === 'modern'
                      ? 'border-primary bg-blue-50'
                      : 'border-gray-300 hover:border-primary'
                  }`}
                >
                  <div className="font-semibold text-gray-900">Modern</div>
                  <div className="text-xs text-gray-600 mt-1">Clean & Professional</div>
                </button>
                <button
                  onClick={() => setSelectedTemplate('classic')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    selectedTemplate === 'classic'
                      ? 'border-primary bg-blue-50'
                      : 'border-gray-300 hover:border-primary'
                  }`}
                >
                  <div className="font-semibold text-gray-900">Classic</div>
                  <div className="text-xs text-gray-600 mt-1">Traditional & Elegant</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Preview & AI */}
          <div className="lg:col-span-1 space-y-6">
            <ResumePreview />
            <AISuggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <ResumeProvider>
      <BuilderContent />
    </ResumeProvider>
  );
}

export default App;

