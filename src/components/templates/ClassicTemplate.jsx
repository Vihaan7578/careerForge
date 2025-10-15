import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const ClassicTemplate = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white p-8 shadow-lg" id="resume-template">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        {/* Profile Image - Centered Circle */}
        {personalInfo.profileImage && (
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800 mx-auto mb-4 shadow-lg">
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.fullName || 'Profile'}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700">
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

      {/* About Me */}
      {summary && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2">
            About Me
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-xs text-gray-600">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  {exp.company} | {exp.location}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs ml-2">
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
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
            Education
          </h2>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <div key={index} className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {edu.school} {edu.location && `| ${edu.location}`}
                  </p>
                </div>
                <div className="text-right text-xs text-gray-600">
                  <p>{edu.graduationDate}</p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <div className="text-sm">
            {skills.technical.length > 0 && (
              <p className="mb-1">
                <span className="font-semibold text-gray-900">Technical: </span>
                <span className="text-gray-700">{skills.technical.join(', ')}</span>
              </p>
            )}
            {skills.soft.length > 0 && (
              <p>
                <span className="font-semibold text-gray-900">Soft Skills: </span>
                <span className="text-gray-700">{skills.soft.join(', ')}</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;

