import React, { useState } from 'react';
import { Zap, X } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const SkillsForm = () => {
  const { resumeData, updateSkills } = useResume();
  const [technicalInput, setTechnicalInput] = useState('');
  const [softInput, setSoftInput] = useState('');

  const handleAddTechnicalSkill = (e) => {
    if (e.key === 'Enter' && technicalInput.trim()) {
      e.preventDefault();
      if (!resumeData.skills.technical.includes(technicalInput.trim())) {
        updateSkills('technical', [...resumeData.skills.technical, technicalInput.trim()]);
      }
      setTechnicalInput('');
    }
  };

  const handleAddSoftSkill = (e) => {
    if (e.key === 'Enter' && softInput.trim()) {
      e.preventDefault();
      if (!resumeData.skills.soft.includes(softInput.trim())) {
        updateSkills('soft', [...resumeData.skills.soft, softInput.trim()]);
      }
      setSoftInput('');
    }
  };

  const handleRemoveTechnicalSkill = (skill) => {
    updateSkills('technical', resumeData.skills.technical.filter(s => s !== skill));
  };

  const handleRemoveSoftSkill = (skill) => {
    updateSkills('soft', resumeData.skills.soft.filter(s => s !== skill));
  };

  const suggestedTechnicalSkills = [
    'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Git',
    'HTML/CSS', 'TypeScript', 'AWS', 'Docker', 'MongoDB', 'REST APIs'
  ];

  const suggestedSoftSkills = [
    'Communication', 'Leadership', 'Teamwork', 'Problem Solving',
    'Time Management', 'Adaptability', 'Critical Thinking', 'Creativity'
  ];

  const addSuggestedSkill = (skill, type) => {
    if (type === 'technical' && !resumeData.skills.technical.includes(skill)) {
      updateSkills('technical', [...resumeData.skills.technical, skill]);
    } else if (type === 'soft' && !resumeData.skills.soft.includes(skill)) {
      updateSkills('soft', [...resumeData.skills.soft, skill]);
    }
  };

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
        <p className="text-gray-600">Showcase your technical and soft skills</p>
      </div>

      {/* Technical Skills */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          <Zap className="w-5 h-5 inline mr-2 text-primary" />
          Technical Skills
        </h3>
        
        <div>
          <label className="label">Add Technical Skills (Press Enter to add)</label>
          <input
            type="text"
            className="input-field"
            placeholder="e.g., JavaScript, Python, React..."
            value={technicalInput}
            onChange={(e) => setTechnicalInput(e.target.value)}
            onKeyDown={handleAddTechnicalSkill}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {resumeData.skills.technical.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
            >
              {skill}
              <button
                onClick={() => handleRemoveTechnicalSkill(skill)}
                className="hover:text-blue-900"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>

        {resumeData.skills.technical.length === 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Quick add popular skills:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedTechnicalSkills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => addSuggestedSkill(skill, 'technical')}
                  className="bg-gray-100 hover:bg-blue-100 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  + {skill}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Soft Skills */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          <Zap className="w-5 h-5 inline mr-2 text-purple-600" />
          Soft Skills
        </h3>
        
        <div>
          <label className="label">Add Soft Skills (Press Enter to add)</label>
          <input
            type="text"
            className="input-field"
            placeholder="e.g., Leadership, Communication..."
            value={softInput}
            onChange={(e) => setSoftInput(e.target.value)}
            onKeyDown={handleAddSoftSkill}
          />
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {resumeData.skills.soft.map((skill, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
            >
              {skill}
              <button
                onClick={() => handleRemoveSoftSkill(skill)}
                className="hover:text-purple-900"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>

        {resumeData.skills.soft.length === 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Quick add popular skills:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedSoftSkills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => addSuggestedSkill(skill, 'soft')}
                  className="bg-gray-100 hover:bg-purple-100 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  + {skill}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>💡 Tip:</strong> Include 5-10 relevant technical skills and 3-5 soft skills. 
          Tailor skills to match the job you're applying for!
        </p>
      </div>
    </div>
  );
};

export default SkillsForm;

