import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const CompactTemplate = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white p-6 shadow-lg max-w-4xl mx-auto" id="resume-template">
      {/* Header */}
      <div className="border-b-4 border-red-600 pb-3 mb-4">
        <div className="flex items-start gap-4">
          {/* Profile Image */}
          {personalInfo.profileImage && (
            <div className="w-20 h-20 rounded-lg overflow-hidden border-4 border-red-600 flex-shrink-0 shadow-lg">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.fullName || 'Profile'}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Name and Contact */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              {personalInfo.fullName || 'Your Name'}
            </h1>
            <div className="flex flex-wrap gap-3 text-xs text-gray-600">
              {personalInfo.email && (
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-3 h-3 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle' }}>{personalInfo.email}</span>
                </span>
              )}
              {personalInfo.phone && (
                <span className="inline-flex items-center gap-1">
                  <Phone className="w-3 h-3 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle' }}>{personalInfo.phone}</span>
                </span>
              )}
              {personalInfo.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle' }}>{personalInfo.location}</span>
                </span>
              )}
              {personalInfo.linkedin && (
                <span className="inline-flex items-center gap-1">
                  <Linkedin className="w-3 h-3 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle' }}>{personalInfo.linkedin}</span>
                </span>
              )}
              {personalInfo.portfolio && (
                <span className="inline-flex items-center gap-1">
                  <Globe className="w-3 h-3 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle' }}>{personalInfo.portfolio}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      {summary && (
        <div className="mb-4">
          <h2 className="text-lg font-bold text-red-800 mb-1">ABOUT ME</h2>
          <p className="text-gray-700 leading-relaxed text-xs">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-bold text-red-800 mb-2">EXPERIENCE</h2>
          <div className="space-y-3">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-700 text-xs font-medium">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-xs text-gray-600 whitespace-nowrap">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-bold text-red-800 mb-2">EDUCATION</h2>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p className="text-gray-700 text-xs">{edu.school}</p>
                    {edu.location && <p className="text-xs text-gray-600">{edu.location}</p>}
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>{edu.graduationDate}</p>
                    {edu.gpa && <p>Score: {edu.gpa}%</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <div className="mb-4">
          <h2 className="text-lg font-bold text-red-800 mb-2">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {skills.technical.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Technical</h4>
                <p className="text-gray-700 text-xs">{skills.technical.join(', ')}</p>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Soft Skills</h4>
                <p className="text-gray-700 text-xs">{skills.soft.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompactTemplate;
