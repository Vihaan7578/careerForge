import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const ModernTemplate = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white p-8 shadow-lg" id="resume-template">
      {/* Header */}
      <div className="border-b-4 border-primary pb-4 mb-6">
        <div className="flex items-start gap-6">
          {/* Profile Image */}
          {personalInfo.profileImage && (
            <div className="w-24 h-24 rounded-lg overflow-hidden border-4 border-primary flex-shrink-0 shadow-lg">
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
          <h2 className="text-xl font-bold text-primary mb-2">ABOUT ME</h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-primary mb-3">EXPERIENCE</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-gray-700">{exp.company} • {exp.location}</p>
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
          <h2 className="text-xl font-bold text-primary mb-3">EDUCATION</h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index}>
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
                    {edu.gpa && <p>GPA: {edu.gpa}</p>}
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
          <h2 className="text-xl font-bold text-primary mb-3">SKILLS</h2>
          {skills.technical.length > 0 && (
            <div className="mb-2">
              <span className="font-semibold text-gray-900">Technical: </span>
              <span className="text-gray-700">{skills.technical.join(' • ')}</span>
            </div>
          )}
          {skills.soft.length > 0 && (
            <div>
              <span className="font-semibold text-gray-900">Soft Skills: </span>
              <span className="text-gray-700">{skills.soft.join(' • ')}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;

