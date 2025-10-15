import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Heart, Stethoscope, Award } from 'lucide-react';

const HealthcareTemplate = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto" id="resume-template">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-4 mb-6">
        <div className="flex items-start gap-6">
          {/* Profile Image */}
          {personalInfo.profileImage && (
            <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-blue-600 flex-shrink-0 shadow-lg">
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

      {/* About Me */}
      {summary && (
        <div className="mb-6">
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
            <h2 className="text-xl font-bold text-blue-800 mb-2 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              PROFESSIONAL PROFILE
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
            <Stethoscope className="w-5 h-5" />
            CLINICAL EXPERIENCE
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-400 pl-4 bg-blue-50 rounded-r-lg p-4">
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
            <Award className="w-5 h-5" />
            EDUCATION & CERTIFICATIONS
          </h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
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
          <h2 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            CLINICAL COMPETENCIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.technical.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Medical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Patient Care Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
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

export default HealthcareTemplate;
