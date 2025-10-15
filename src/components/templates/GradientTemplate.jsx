import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Zap } from 'lucide-react';

const GradientTemplate = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto" id="resume-template">
      {/* Header */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-lg -z-10 opacity-10"></div>

        <div className="relative p-6 rounded-lg">
          <div className="flex items-start gap-6">
            {/* Profile Image */}
            {personalInfo.profileImage && (
              <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-purple-400 flex-shrink-0 shadow-lg">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName || 'Profile'}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Name and Contact */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.fullName || 'Your Name'}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                {personalInfo.email && (
                  <span className="inline-flex items-center gap-1">
                    <Mail className="w-4 h-4 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                    <span style={{ verticalAlign: 'middle' }}>{personalInfo.email}</span>
                  </span>
                )}
                {personalInfo.phone && (
                  <span className="inline-flex items-center gap-1">
                    <Phone className="w-4 h-4 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                    <span style={{ verticalAlign: 'middle' }}>{personalInfo.phone}</span>
                  </span>
                )}
                {personalInfo.location && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-4 h-4 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                    <span style={{ verticalAlign: 'middle' }}>{personalInfo.location}</span>
                  </span>
                )}
                {personalInfo.linkedin && (
                  <span className="inline-flex items-center gap-1">
                    <Linkedin className="w-4 h-4 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                    <span style={{ verticalAlign: 'middle' }}>{personalInfo.linkedin}</span>
                  </span>
                )}
                {personalInfo.portfolio && (
                  <span className="inline-flex items-center gap-1">
                    <Globe className="w-4 h-4 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                    <span style={{ verticalAlign: 'middle' }}>{personalInfo.portfolio}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      {summary && (
        <div className="mb-6">
          <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg p-4 border-l-4 border-blue-400">
            <h2 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              ABOUT ME
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-400">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-700 font-medium">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
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
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            EDUCATION
          </h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-l-4 border-blue-400">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p className="text-gray-700">{edu.school}</p>
                    {edu.location && <p className="text-sm text-gray-600">{edu.location}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-600">
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
        <div className="mb-6">
          <h2 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            SKILLS & COMPETENCIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.technical.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span key={index} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Professional Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <span key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GradientTemplate;
