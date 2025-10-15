// Main App Component - This is where everything starts!
// Think of this as the conductor of an orchestra - it manages what page you see and when

import React, { useState } from 'react'; // React hooks - useState lets us track things that change
import { ResumeProvider, useResume } from './context/ResumeContext'; // This gives us access to all the resume data anywhere in the app
import Landing from './components/Landing'; // The homepage you first see
import ExamplesPage from './components/ExamplesPage'; // The page with all 17 template examples
import PersonalInfoForm from './components/forms/PersonalInfoForm'; // Form for name, email, phone, etc.
import ExperienceForm from './components/forms/ExperienceForm'; // Form for your job history
import EducationForm from './components/forms/EducationForm'; // Form for your education
import SkillsForm from './components/forms/SkillsForm'; // Form for your skills (both technical and soft)
import ProjectsForm from './components/forms/ProjectsForm'; // Form for projects and certifications
import AdditionalInfoForm from './components/forms/AdditionalInfoForm'; // Form for awards, languages, etc.
import ReviewStep from './components/ReviewStep'; // The final step where you review and download
import AISuggestions from './components/AISuggestions'; // The sidebar that shows AI tips and scores
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react'; // Icons we use throughout the app

// This array defines all the steps in the resume building process
// Each step has an id, a title (shown in progress bar), and which component to render
const steps = [
  { id: 0, title: 'Personal Info', component: PersonalInfoForm },
  { id: 1, title: 'Experience', component: ExperienceForm },
  { id: 2, title: 'Education', component: EducationForm },
  { id: 3, title: 'Skills', component: SkillsForm },
  { id: 4, title: 'Projects & Certifications', component: ProjectsForm },
  { id: 5, title: 'Additional Information', component: AdditionalInfoForm },
  { id: 6, title: 'Review & Download', component: ReviewStep },
];

// BuilderContent - The actual app logic lives here
// This component decides what to show based on where the user is in their journey
const BuilderContent = () => {
  // Get access to the resume context (shared data across all components)
  const { currentStep, setCurrentStep, setSelectedTemplate } = useResume();
  
  // Track which "page" we're on - landing, examples browsing, or the actual builder
  // Starts with 'landing' so you see the homepage first
  const [currentView, setCurrentView] = useState('landing');

  // Figure out which form component to show based on the current step
  const CurrentStepComponent = steps[currentStep].component;
  
  // Check if we're on the last step (Review & Download)
  // We need to know this because the layout is different on the review step
  const isReviewStep = currentStep === steps.length - 1;

  // Function to move to the next step
  // Only works if we're not already on the last step (can't go past the end!)
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to go back to the previous step
  // Only works if we're not on the first step (can't go before the start!)
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // When user clicks "Edit" from the review page, take them back to step 1
  // They can then navigate to whichever step they want to edit
  const handleEditFromReview = () => {
    setCurrentStep(0);
  };

  // This function runs when someone picks a template from the Examples page
  // It does three things: saves which template they picked, switches to builder view, and starts at step 1
  const handleUseTemplate = (templateName) => {
    setSelectedTemplate(templateName); // Remember which template they chose
    setCurrentView('builder'); // Switch from examples page to the builder
    setCurrentStep(0); // Start them at the first step (Personal Info)
  };

  // If currentView is 'landing', show the landing page
  // This is what you see when you first load the app
  if (currentView === 'landing') {
    return (
      <Landing 
        onGetStarted={() => setCurrentView('builder')} // When they click "Build My Resume Now"
        onSeeExamples={() => setCurrentView('examples')} // When they click "See Examples"
      />
    );
  }

  // If currentView is 'examples', show the examples browsing page
  // This lets them see all 17 templates with sample data
  if (currentView === 'examples') {
    return (
      <ExamplesPage 
        onBack={() => setCurrentView('landing')} // When they click "Back to Home"
        onUseTemplate={handleUseTemplate} // When they click "Use This Template"
      />
    );
  }

  // If we're not on landing or examples, show the resume builder
  // This is the actual form where users fill in their information
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Sticks to the top as you scroll */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and step counter */}
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold gradient-text">CareerForge</h1>
                {/* Show which step they're on (e.g., "Step 2 of 7") */}
                <p className="text-xs text-gray-500">Step {currentStep + 1} of {steps.length}</p>
              </div>
            </div>
            {/* Right side - Show current step name (hidden on small screens to save space) */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 hidden sm:block">
                {isReviewStep ? 'Review & Download' : `Step ${currentStep + 1} of ${steps.length}`}
              </span>
            </div>
          </div>

          {/* Progress Bar - Shows how far along they are */}
          <div className="mt-4">
            {/* Step titles - You can click these to jump to any step */}
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  // Color coding: blue if current step, green if completed, gray if not reached yet
                  className={`text-xs sm:text-sm font-medium ${
                    index === currentStep
                      ? 'text-primary' // Blue for current step
                      : index < currentStep
                      ? 'text-green-600' // Green for completed steps
                      : 'text-gray-400' // Gray for future steps
                  }`}
                >
                  {step.title}
                </button>
              ))}
            </div>
            {/* The actual progress bar that fills up as you progress */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                // Calculate percentage: (current step + 1) / total steps * 100
                // The +1 is because steps are 0-indexed but we want step 1 to show some progress
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area - This is where the forms and sidebar live */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isReviewStep ? (
          /* Review Step gets special treatment - full width, no sidebar */
          <div className="max-w-5xl mx-auto">
            <CurrentStepComponent onEdit={handleEditFromReview} />
          </div>
        ) : (
          /* All other steps - Split screen with form on left, AI tips on right */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Takes up 2/3 of the width on large screens */}
            <div className="lg:col-span-2">
              <div className="card">
                {/* This renders whichever form component matches the current step */}
                <CurrentStepComponent />

                {/* Navigation Buttons - Back and Next */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 0} // Can't go back from step 1
                    // If disabled, make it look faded and change cursor to "not-allowed"
                    className={`btn-secondary ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <ChevronLeft className="w-5 h-5 inline mr-2" />
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="btn-primary"
                  >
                    {/* Change button text on the second-to-last step */}
                    {currentStep === steps.length - 2 ? 'Review & Generate' : 'Next'}
                    <ChevronRight className="w-5 h-5 inline ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Takes up 1/3 of the width, shows AI suggestions */}
            <div className="lg:col-span-1">
              <AISuggestions />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// The actual App component that gets rendered
// We wrap everything in ResumeProvider so all components can access the resume data
// Think of ResumeProvider as a data warehouse that everyone can access
function App() {
  return (
    <ResumeProvider>
      <BuilderContent />
    </ResumeProvider>
  );
}

export default App;
