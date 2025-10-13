import React, { useState } from 'react';
import { Briefcase, Plus, Trash2, Sparkles } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { improveBulletPoint } from '../../utils/gemini';

const ExperienceForm = () => {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResume();
  const [currentExp, setCurrentExp] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: [''],
  });
  const [isAdding, setIsAdding] = useState(false);
  const [improvingIndex, setImprovingIndex] = useState(null);

  const handleAddDescription = () => {
    setCurrentExp({
      ...currentExp,
      description: [...currentExp.description, ''],
    });
  };

  const handleUpdateDescription = (index, value) => {
    const newDesc = [...currentExp.description];
    newDesc[index] = value;
    setCurrentExp({
      ...currentExp,
      description: newDesc,
    });
  };

  const handleRemoveDescription = (index) => {
    setCurrentExp({
      ...currentExp,
      description: currentExp.description.filter((_, i) => i !== index),
    });
  };

  const handleSaveExperience = () => {
    if (currentExp.title && currentExp.company) {
      addExperience(currentExp);
      setCurrentExp({
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: [''],
      });
      setIsAdding(false);
    }
  };

  const handleImproveWithAI = async (index) => {
    const text = currentExp.description[index];
    if (!text.trim()) return;

    setImprovingIndex(index);
    try {
      const improved = await improveBulletPoint(text, currentExp.title);
      handleUpdateDescription(index, improved);
    } catch (error) {
      console.error('Error improving bullet point:', error);
      alert('Failed to improve bullet point. Please try again.');
    } finally {
      setImprovingIndex(null);
    }
  };

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Work Experience</h2>
        <p className="text-gray-600">Add your professional experience (start with most recent)</p>
      </div>

      {/* Existing Experiences */}
      <div className="space-y-4">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="card bg-gray-50">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-gray-700">{exp.company} • {exp.location}</p>
                <p className="text-sm text-gray-500">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </p>
                <ul className="mt-3 space-y-1">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-700 text-sm">• {desc}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => removeExperience(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Experience */}
      {!isAdding ? (
        <button
          onClick={() => setIsAdding(true)}
          className="btn-primary w-full"
        >
          <Plus className="w-5 h-5 inline mr-2" />
          Add Work Experience
        </button>
      ) : (
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="label">Job Title *</label>
              <input
                type="text"
                className="input-field"
                placeholder="Software Engineer"
                value={currentExp.title}
                onChange={(e) => setCurrentExp({ ...currentExp, title: e.target.value })}
              />
            </div>

            <div>
              <label className="label">Company *</label>
              <input
                type="text"
                className="input-field"
                placeholder="Tech Corp"
                value={currentExp.company}
                onChange={(e) => setCurrentExp({ ...currentExp, company: e.target.value })}
              />
            </div>

            <div>
              <label className="label">Location</label>
              <input
                type="text"
                className="input-field"
                placeholder="San Francisco, CA"
                value={currentExp.location}
                onChange={(e) => setCurrentExp({ ...currentExp, location: e.target.value })}
              />
            </div>

            <div>
              <label className="label">Start Date</label>
              <input
                type="month"
                className="input-field"
                value={currentExp.startDate}
                onChange={(e) => setCurrentExp({ ...currentExp, startDate: e.target.value })}
              />
            </div>

            <div>
              <label className="label">End Date</label>
              <input
                type="month"
                className="input-field"
                value={currentExp.endDate}
                onChange={(e) => setCurrentExp({ ...currentExp, endDate: e.target.value })}
                disabled={currentExp.current}
              />
            </div>

            <div className="flex items-center">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary"
                  checked={currentExp.current}
                  onChange={(e) => setCurrentExp({ ...currentExp, current: e.target.checked })}
                />
                <span className="text-sm text-gray-700">I currently work here</span>
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <label className="label">Job Responsibilities & Achievements</label>
            {currentExp.description.map((desc, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  className="input-field flex-1"
                  placeholder="Led a team of 5 developers to build..."
                  value={desc}
                  onChange={(e) => handleUpdateDescription(index, e.target.value)}
                />
                <button
                  onClick={() => handleImproveWithAI(index)}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                  disabled={improvingIndex === index || !desc.trim()}
                  title="Improve with AI"
                >
                  {improvingIndex === index ? (
                    <span className="animate-spin">⚡</span>
                  ) : (
                    <Sparkles className="w-5 h-5" />
                  )}
                </button>
                {currentExp.description.length > 1 && (
                  <button
                    onClick={() => handleRemoveDescription(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={handleAddDescription}
              className="text-primary hover:text-blue-700 text-sm font-medium"
            >
              + Add another bullet point
            </button>
          </div>

          <div className="flex gap-3 mt-6">
            <button onClick={handleSaveExperience} className="btn-primary flex-1">
              Save Experience
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setCurrentExp({
                  title: '',
                  company: '',
                  location: '',
                  startDate: '',
                  endDate: '',
                  current: false,
                  description: [''],
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
          <strong>✨ AI Tip:</strong> Click the sparkle icon to let AI improve your bullet points!
          Use action verbs and include numbers when possible.
        </p>
      </div>
    </div>
  );
};

export default ExperienceForm;

