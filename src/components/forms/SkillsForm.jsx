import React, { useState } from 'react';
import { Zap, X, Briefcase } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { professionSkills, getSkillsByProfession, getAllProfessions, getProfessionNames, softSkills } from '../../utils/skillsData';

const SkillsForm = () => {
  const { resumeData, updateSkills } = useResume();
  const [selectedProfession, setSelectedProfession] = useState('');
  const [technicalInput, setTechnicalInput] = useState('');
  const [softInput, setSoftInput] = useState('');
  const [showAllProfessions, setShowAllProfessions] = useState(false);

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

  // Get skills for selected profession
  const professionSkillsList = selectedProfession ? getSkillsByProfession(selectedProfession) : [];

  // Get profession names for display
  const professionNames = getProfessionNames();
  const displayProfessions = showAllProfessions ? professionNames : professionNames.slice(0, 6);

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
        <p className="text-gray-600">Select your profession to get relevant skill suggestions</p>
      </div>

      {/* Profession Selection */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          <Briefcase className="w-5 h-5 inline mr-2 text-primary" />
          Choose Your Profession
        </h3>

        <div>
          <label className="label">Select your field or industry</label>
          <select
            className="input-field"
            value={selectedProfession}
            onChange={(e) => setSelectedProfession(e.target.value)}
          >
            <option value="">Select a profession...</option>
            {displayProfessions.map((profession, index) => (
              <option key={index} value={Object.keys(professionSkills)[index]}>
                {profession}
              </option>
            ))}
          </select>
        </div>

        {selectedProfession && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>💡 Tip:</strong> Skills suggestions below are tailored for {professionSkills[selectedProfession]?.name} professionals.
            </p>
          </div>
        )}

        {professionNames.length > 6 && !showAllProfessions && (
          <button
            onClick={() => setShowAllProfessions(true)}
            className="text-primary text-sm mt-2 hover:underline"
          >
            Show all {professionNames.length} professions →
          </button>
        )}
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
            placeholder={`e.g., ${selectedProfession ? 'Patient Care, Medical Diagnosis' : 'JavaScript, Python, React...'}`}
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

        {selectedProfession && professionSkillsList.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">
              {resumeData.skills.technical.length === 0 ? 'Quick add skills:' : 'Add more skills:'}
            </p>
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
              {professionSkillsList
                .filter(skill => !resumeData.skills.technical.includes(skill))
                .slice(0, 20) // Show first 20 relevant skills
                .map((skill, index) => (
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

        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">
            {resumeData.skills.soft.length === 0 ? 'Quick add skills:' : 'Add more skills:'}
          </p>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {softSkills
              .filter(skill => !resumeData.skills.soft.includes(skill))
              .slice(0, 15) // Show first 15 soft skills
              .map((skill, index) => (
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
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <strong>💡 Tip:</strong> Select your profession above to get relevant technical skill suggestions.
          Include 5-10 relevant technical skills and 3-5 soft skills that match your experience and the job you're applying for!
        </p>
      </div>
    </div>
  );
};

export default SkillsForm;

