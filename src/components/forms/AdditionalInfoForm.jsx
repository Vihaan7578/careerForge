import React, { useState } from 'react';
import { Plus, Trash2, Award, Languages, Heart, MapPin } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const AdditionalInfoForm = () => {
  const { resumeData, addProject, addCertification } = useResume();

  // Additional sections that can be added
  const [customSections, setCustomSections] = useState([]);
  const [currentSection, setCurrentSection] = useState({
    title: '',
    content: '',
    type: 'achievement', // achievement, language, interest, volunteer, etc.
  });
  const [isAddingSection, setIsAddingSection] = useState(false);

  const sectionTypes = [
    { value: 'achievement', label: 'Achievement/Award', icon: Award },
    { value: 'language', label: 'Languages', icon: Languages },
    { value: 'interest', label: 'Interests/Hobbies', icon: Heart },
    { value: 'volunteer', label: 'Volunteer Work', icon: Heart },
    { value: 'publication', label: 'Publications', icon: Award },
    { value: 'reference', label: 'References', icon: Award },
    { value: 'custom', label: 'Custom Section', icon: Plus },
  ];

  const handleSaveSection = () => {
    if (currentSection.title && currentSection.content) {
      const sectionData = {
        id: Date.now(),
        ...currentSection,
      };

      setCustomSections([...customSections, sectionData]);
      setCurrentSection({
        title: '',
        content: '',
        type: 'achievement',
      });
      setIsAddingSection(false);
    }
  };

  const handleRemoveSection = (sectionId) => {
    setCustomSections(customSections.filter(section => section.id !== sectionId));
  };

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Additional Information</h2>
        <p className="text-gray-600">Add any other relevant information to make your resume stand out</p>
      </div>

      {/* Existing Additional Sections */}
      <div className="space-y-4">
        {customSections.map((section) => {
          const IconComponent = sectionTypes.find(type => type.value === section.type)?.icon || Award;
          return (
            <div key={section.id} className="card bg-purple-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className="w-5 h-5 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <p className="text-gray-700">{section.content}</p>
                </div>
                <button
                  onClick={() => handleRemoveSection(section.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add New Section */}
      {!isAddingSection ? (
        <button
          onClick={() => setIsAddingSection(true)}
          className="btn-primary w-full"
        >
          <Plus className="w-5 h-5 inline mr-2" />
          Add Additional Section
        </button>
      ) : (
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="label">Section Type</label>
              <select
                className="input-field"
                value={currentSection.type}
                onChange={(e) => setCurrentSection({ ...currentSection, type: e.target.value })}
              >
                {sectionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">Section Title *</label>
              <input
                type="text"
                className="input-field"
                placeholder="e.g., Awards, Languages, Interests..."
                value={currentSection.title}
                onChange={(e) => setCurrentSection({ ...currentSection, title: e.target.value })}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="label">Content *</label>
            <textarea
              className="input-field resize-none"
              rows="4"
              placeholder={
                currentSection.type === 'achievement' ? 'Describe your achievements, awards, or recognition...' :
                currentSection.type === 'language' ? 'List languages you speak and proficiency levels...' :
                currentSection.type === 'interest' ? 'Share your hobbies, interests, or personal activities...' :
                currentSection.type === 'volunteer' ? 'Describe your volunteer work and community involvement...' :
                currentSection.type === 'publication' ? 'List your publications, articles, or research papers...' :
                currentSection.type === 'reference' ? 'Provide reference contact information...' :
                'Add your content here...'
              }
              value={currentSection.content}
              onChange={(e) => setCurrentSection({ ...currentSection, content: e.target.value })}
            />
          </div>

          <div className="flex gap-3">
            <button onClick={handleSaveSection} className="btn-primary flex-1">
              Save Section
            </button>
            <button
              onClick={() => {
                setIsAddingSection(false);
                setCurrentSection({
                  title: '',
                  content: '',
                  type: 'achievement',
                });
              }}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <p className="text-sm text-purple-800">
          <strong>💡 Tip:</strong> Use this section for awards, languages, volunteer work, publications, references, or any other relevant information that doesn't fit in the standard categories. Add 1-3 sections to personalize your resume.
        </p>
      </div>
    </div>
  );
};

export default AdditionalInfoForm;
