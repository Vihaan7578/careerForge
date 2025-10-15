import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, User } from 'lucide-react';

const SplitColumnTemplate = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;

  return (
    <div className="bg-white p-8 shadow-lg max-w-4xl mx-auto" id="resume-template">
      <div className="grid grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-1 bg-gradient-to-b from-blue-50 to-purple-50 p-6 rounded-lg">
          {/* Profile Image */}
          {personalInfo.profileImage ? (
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-400 mx-auto mb-4 shadow-lg">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.fullName || 'Profile'}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
          )}

          <h1 className="text-xl font-bold text-gray-900 text-center mb-4">
            {personalInfo.fullName || 'Your Name'}
          </h1>

          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            {personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-blue-600" />
                <span className="text-gray-700">{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-blue-600" />
                <span className="text-gray-700">{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-blue-600" />
                <span className="text-gray-700">{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 flex-shrink-0 text-blue-600" />
                <span className="text-gray-700">{personalInfo.linkedin}</span>
              </div>
            )}
            {personalInfo.portfolio && (
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 flex-shrink-0 text-blue-600" />
                <span className="text-gray-700">{personalInfo.portfolio}</span>
              </div>
            )}
          </div>

          {/* Skills */}
          {(skills.technical.length > 0 || skills.soft.length > 0) && (
            <div className="mt-6">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">SKILLS</h3>
              <div className="space-y-2">
                {skills.technical.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-blue-800 mb-1">Technical</h4>
                    <div className="flex flex-wrap gap-1">
                      {skills.technical.slice(0, 6).map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {skills.soft.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-purple-800 mb-1">Soft Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {skills.soft.slice(0, 6).map((skill, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
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

        {/* Main Content */}
        <div className="col-span-2 pl-6">
          {/* About Me */}
          {summary && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">ABOUT ME</h2>
              <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">EXPERIENCE</h2>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index}>
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
              <h2 className="text-xl font-bold text-gray-900 mb-3">EDUCATION</h2>
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
                        {edu.gpa && <p>Score: {edu.gpa}%</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplitColumnTemplate;
