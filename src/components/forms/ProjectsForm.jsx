import React, { useState } from 'react';
import { FolderOpen, Plus, Trash2, Calendar, ExternalLink } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const ProjectsForm = () => {
  const { resumeData, addProject, addCertification } = useResume();
  const [currentProject, setCurrentProject] = useState({
    name: '',
    description: '',
    technologies: '',
    startDate: '',
    endDate: '',
    current: false,
    url: '',
    github: '',
    issuer: '',
    date: '',
    credentialId: '',
    type: 'project',
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleSaveProject = () => {
    if (currentProject.name && currentProject.description) {
      if (currentProject.type === 'certification') {
        // Save as certification
        const certData = {
          name: currentProject.name,
          description: currentProject.description,
          issuer: currentProject.issuer,
          date: currentProject.date,
          credentialId: currentProject.credentialId,
          url: currentProject.url,
        };
        addCertification(certData);
      } else {
        // Save as project
        const projectData = {
          ...currentProject,
          technologies: currentProject.technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
        };
        addProject(projectData);
      }

      setCurrentProject({
        name: '',
        description: '',
        technologies: '',
        startDate: '',
        endDate: '',
        current: false,
        url: '',
        github: '',
        issuer: '',
        date: '',
        credentialId: '',
        type: 'project',
      });
      setIsAdding(false);
    }
  };

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects & Certifications</h2>
        <p className="text-gray-600">Showcase your projects and professional certifications</p>
      </div>

      {/* Existing Projects & Certifications */}
      <div className="space-y-4">
        {resumeData.projects.map((project, index) => (
          <div key={index} className="card bg-gray-50">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                <p className="text-gray-700 mt-1">{project.description}</p>
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span>{project.startDate} - {project.current ? 'Present' : project.endDate}</span>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {resumeData.certifications.map((cert, index) => (
          <div key={`cert-${index}`} className="card bg-green-50">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                <p className="text-gray-700 mt-1">{cert.description}</p>
                {cert.issuer && <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>}
                {cert.date && <p className="text-sm text-gray-600">Date: {cert.date}</p>}
                {cert.credentialId && <p className="text-sm text-gray-600">Credential ID: {cert.credentialId}</p>}
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1 mt-2">
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Project/Certification Tabs */}
      {!isAdding ? (
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setIsAdding(true)}
            className="btn-primary"
          >
            <Plus className="w-5 h-5 inline mr-2" />
            Add Project
          </button>
          <button
            onClick={() => {
              setCurrentProject({
                name: '',
                description: '',
                technologies: '',
                startDate: '',
                endDate: '',
                current: false,
                url: '',
                github: '',
                type: 'certification'
              });
              setIsAdding(true);
            }}
            className="btn-secondary"
          >
            <Plus className="w-5 h-5 inline mr-2" />
            Add Certification
          </button>
        </div>
      ) : (
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="label">Name *</label>
              <input
                type="text"
                className="input-field"
                placeholder="Project Name or Certification Title"
                value={currentProject.name}
                onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })}
              />
            </div>

            <div>
              <label className="label">Type</label>
              <select
                className="input-field"
                value={currentProject.type || 'project'}
                onChange={(e) => setCurrentProject({ ...currentProject, type: e.target.value })}
              >
                <option value="project">Project</option>
                <option value="certification">Certification</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="label">Description *</label>
            <textarea
              className="input-field resize-none"
              rows="3"
              placeholder={currentProject.type === 'certification' ? "Certification description, skills learned, relevance..." : "Project description, your role, technologies used..."}
              value={currentProject.description}
              onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
            />
          </div>

          {currentProject.type === 'project' && (
            <>
              <div className="mb-4">
                <label className="label">Technologies Used (comma-separated)</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="React, Node.js, MongoDB, AWS..."
                  value={currentProject.technologies}
                  onChange={(e) => setCurrentProject({ ...currentProject, technologies: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="label">Start Date</label>
                  <input
                    type="month"
                    className="input-field"
                    value={currentProject.startDate}
                    onChange={(e) => setCurrentProject({ ...currentProject, startDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="label">End Date</label>
                  <input
                    type="month"
                    className="input-field"
                    value={currentProject.endDate}
                    onChange={(e) => setCurrentProject({ ...currentProject, endDate: e.target.value })}
                    disabled={currentProject.current}
                  />
                  <label className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={currentProject.current}
                      onChange={(e) => setCurrentProject({ ...currentProject, current: e.target.checked })}
                    />
                    <span className="text-sm">Currently working on this</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Live Demo URL (Optional)</label>
                  <input
                    type="url"
                    className="input-field"
                    placeholder="https://your-project-demo.com"
                    value={currentProject.url}
                    onChange={(e) => setCurrentProject({ ...currentProject, url: e.target.value })}
                  />
                </div>

                <div>
                  <label className="label">GitHub Repository (Optional)</label>
                  <input
                    type="url"
                    className="input-field"
                    placeholder="https://github.com/username/project"
                    value={currentProject.github}
                    onChange={(e) => setCurrentProject({ ...currentProject, github: e.target.value })}
                  />
                </div>
              </div>
            </>
          )}

          {currentProject.type === 'certification' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">Issuing Organization</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Google, Microsoft, AWS, etc."
                  value={currentProject.issuer || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, issuer: e.target.value })}
                />
              </div>

              <div>
                <label className="label">Issue Date</label>
                <input
                  type="month"
                  className="input-field"
                  value={currentProject.date || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, date: e.target.value })}
                />
              </div>

              <div>
                <label className="label">Credential ID (Optional)</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="ABC123XYZ"
                  value={currentProject.credentialId || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, credentialId: e.target.value })}
                />
              </div>

              <div>
                <label className="label">Certificate URL (Optional)</label>
                <input
                  type="url"
                  className="input-field"
                  placeholder="https://verify.certification.com"
                  value={currentProject.url || ''}
                  onChange={(e) => setCurrentProject({ ...currentProject, url: e.target.value })}
                />
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button onClick={handleSaveProject} className="btn-primary flex-1">
              Save {currentProject.type === 'certification' ? 'Certification' : 'Project'}
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setCurrentProject({
                  name: '',
                  description: '',
                  technologies: '',
                  startDate: '',
                  endDate: '',
                  current: false,
                  url: '',
                  github: '',
                });
              }}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>💡 Tip:</strong> Projects show your practical skills, certifications demonstrate formal qualifications.
          Include 2-4 relevant projects or certifications to strengthen your resume.
        </p>
      </div>
    </div>
  );
};

export default ProjectsForm;
