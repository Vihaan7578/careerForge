import React, { useState } from 'react';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const EducationForm = () => {
  const { resumeData, addEducation, removeEducation } = useResume();
  const [currentEdu, setCurrentEdu] = useState({
    degree: '',
    field: '',
    school: '',
    location: '',
    graduationDate: '',
    gpa: '',
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleSaveEducation = () => {
    if (currentEdu.degree && currentEdu.school) {
      addEducation(currentEdu);
      setCurrentEdu({
        degree: '',
        field: '',
        school: '',
        location: '',
        graduationDate: '',
        gpa: '',
      });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Education</h2>
        <p className="text-gray-600">Add your educational background</p>
      </div>

      {/* Existing Education */}
      <div className="space-y-4">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="card bg-gray-50">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {edu.degree} {edu.field && `in ${edu.field}`}
                </h3>
                <p className="text-gray-700">{edu.school}</p>
                {edu.location && <p className="text-sm text-gray-500">{edu.location}</p>}
                <p className="text-sm text-gray-500">
                  Graduated: {edu.graduationDate}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </p>
              </div>
              <button
                onClick={() => removeEducation(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Education */}
      {!isAdding ? (
        <button
          onClick={() => setIsAdding(true)}
          className="btn-primary w-full"
        >
          <Plus className="w-5 h-5 inline mr-2" />
          Add Education
        </button>
      ) : (
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Degree *</label>
              <select
                className="input-field"
                value={currentEdu.degree}
                onChange={(e) => setCurrentEdu({ ...currentEdu, degree: e.target.value })}
              >
                <option value="">Select degree</option>
                <option value="High School Diploma">High School Diploma</option>
                <option value="Associate's Degree">Associate's Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Ph.D.">Ph.D.</option>
                <option value="Certificate">Certificate</option>
              </select>
            </div>

            <div>
              <label className="label">Field of Study</label>
              <input
                type="text"
                className="input-field"
                placeholder="Computer Science"
                value={currentEdu.field}
                onChange={(e) => setCurrentEdu({ ...currentEdu, field: e.target.value })}
              />
            </div>

            <div>
              <label className="label">School/University *</label>
              <input
                type="text"
                className="input-field"
                placeholder="MIT"
                value={currentEdu.school}
                onChange={(e) => setCurrentEdu({ ...currentEdu, school: e.target.value })}
              />
            </div>

            <div>
              <label className="label">Location</label>
              <input
                type="text"
                className="input-field"
                placeholder="Cambridge, MA"
                value={currentEdu.location}
                onChange={(e) => setCurrentEdu({ ...currentEdu, location: e.target.value })}
              />
            </div>

            <div>
              <label className="label">Graduation Date</label>
              <input
                type="month"
                className="input-field"
                value={currentEdu.graduationDate}
                onChange={(e) => setCurrentEdu({ ...currentEdu, graduationDate: e.target.value })}
              />
            </div>

            <div>
              <label className="label">GPA (Optional)</label>
              <input
                type="text"
                className="input-field"
                placeholder="3.8/4.0"
                value={currentEdu.gpa}
                onChange={(e) => setCurrentEdu({ ...currentEdu, gpa: e.target.value })}
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button onClick={handleSaveEducation} className="btn-primary flex-1">
              Save Education
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setCurrentEdu({
                  degree: '',
                  field: '',
                  school: '',
                  location: '',
                  graduationDate: '',
                  gpa: '',
                });
              }}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <strong>💡 Tip:</strong> Only include GPA if it's above 3.5. List education in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default EducationForm;

