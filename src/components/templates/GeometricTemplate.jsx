import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Triangle, Square, Circle } from 'lucide-react';

const GeometricTemplate = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto" id="resume-template">
      {/* Header */}
      <div className="relative mb-6">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Triangle className="absolute top-4 right-8 w-16 h-16 text-teal-200 transform rotate-45" />
          <Circle className="absolute bottom-4 left-8 w-12 h-12 text-orange-200" />
          <Square className="absolute top-1/2 right-4 w-8 h-8 text-purple-200 transform rotate-12" />
        </div>

        <div className="relative bg-gradient-to-br from-teal-50 to-orange-50 rounded-lg p-6 border-2 border-teal-200">
          <div className="flex items-start gap-6">
            {/* Profile Image */}
            {personalInfo.profileImage && (
              <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-teal-400 flex-shrink-0 shadow-lg">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName || 'Profile'}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Name and Contact */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
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
          <div className="relative bg-gradient-to-r from-teal-100 to-orange-100 rounded-lg p-4 border-l-4 border-teal-400">
            <div className="absolute top-2 right-2">
              <Circle className="w-6 h-6 text-orange-300" />
            </div>
            <h2 className="text-xl font-bold text-teal-800 mb-2 flex items-center gap-2">
              <Triangle className="w-5 h-5" />
              ABOUT ME
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-teal-800 mb-3 flex items-center gap-2">
            <Square className="w-5 h-5" />
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="relative bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-4 border-l-4 border-orange-400">
                <div className="absolute top-2 right-2">
                  <Triangle className="w-4 h-4 text-purple-300 transform rotate-180" />
                </div>
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
          <h2 className="text-xl font-bold text-teal-800 mb-3 flex items-center gap-2">
            <Circle className="w-5 h-5" />
            EDUCATION
          </h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="relative bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg p-4 border-l-4 border-purple-400">
                <div className="absolute top-2 right-2">
                  <Square className="w-4 h-4 text-teal-300" />
                </div>
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
          <h2 className="text-xl font-bold text-teal-800 mb-3 flex items-center gap-2">
            <Triangle className="w-5 h-5" />
            SKILLS & COMPETENCIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.technical.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span key={index} className="bg-gradient-to-r from-teal-100 to-orange-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Soft Skills</h4>
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

export default GeometricTemplate;
