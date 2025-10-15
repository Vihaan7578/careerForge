import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Type } from 'lucide-react';

const TypographyTemplate = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto" id="resume-template">
      {/* Header */}
      <div className="border-b-4 border-yellow-600 pb-4 mb-6">
        <div className="flex items-start gap-6">
          {/* Profile Image */}
          {personalInfo.profileImage && (
            <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-yellow-600 flex-shrink-0 shadow-lg">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.fullName || 'Profile'}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Name and Contact */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight" style={{ fontFamily: 'serif' }}>
              {personalInfo.fullName || 'Your Name'}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {personalInfo.email && (
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle', fontFamily: 'serif' }}>{personalInfo.email}</span>
                </span>
              )}
              {personalInfo.phone && (
                <span className="inline-flex items-center gap-1">
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle', fontFamily: 'serif' }}>{personalInfo.phone}</span>
                </span>
              )}
              {personalInfo.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle', fontFamily: 'serif' }}>{personalInfo.location}</span>
                </span>
              )}
              {personalInfo.linkedin && (
                <span className="inline-flex items-center gap-1">
                  <Linkedin className="w-4 h-4 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle', fontFamily: 'serif' }}>{personalInfo.linkedin}</span>
                </span>
              )}
              {personalInfo.portfolio && (
                <span className="inline-flex items-center gap-1">
                  <Globe className="w-4 h-4 flex-shrink-0" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle', fontFamily: 'serif' }}>{personalInfo.portfolio}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-yellow-800 mb-2 flex items-center gap-2" style={{ fontFamily: 'serif' }}>
            <Type className="w-6 h-6" />
            ABOUT ME
          </h2>
          <p className="text-gray-700 leading-relaxed text-base" style={{ fontFamily: 'serif', fontSize: '1.1rem' }}>{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-yellow-800 mb-3 flex items-center gap-2" style={{ fontFamily: 'serif' }}>
            <Type className="w-6 h-6" />
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>{exp.title}</h3>
                    <p className="text-gray-700 font-medium" style={{ fontFamily: 'serif' }}>{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-sm text-gray-600 whitespace-nowrap" style={{ fontFamily: 'serif' }}>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm" style={{ fontFamily: 'serif' }}>
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
          <h2 className="text-2xl font-bold text-yellow-800 mb-3 flex items-center gap-2" style={{ fontFamily: 'serif' }}>
            <Type className="w-6 h-6" />
            EDUCATION
          </h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p className="text-gray-700" style={{ fontFamily: 'serif' }}>{edu.school}</p>
                    {edu.location && <p className="text-sm text-gray-600" style={{ fontFamily: 'serif' }}>{edu.location}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-600" style={{ fontFamily: 'serif' }}>
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
          <h2 className="text-2xl font-bold text-yellow-800 mb-3 flex items-center gap-2" style={{ fontFamily: 'serif' }}>
            <Type className="w-6 h-6" />
            SKILLS & COMPETENCIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.technical.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>Technical Skills</h4>
                <p className="text-gray-700 text-sm" style={{ fontFamily: 'serif' }}>{skills.technical.join(', ')}</p>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'serif' }}>Professional Skills</h4>
                <p className="text-gray-700 text-sm" style={{ fontFamily: 'serif' }}>{skills.soft.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TypographyTemplate;
