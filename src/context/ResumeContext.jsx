import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

export const ResumeProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      portfolio: '',
    },
    summary: '',
    experience: [],
    education: [],
    skills: {
      technical: [],
      soft: [],
    },
    certifications: [],
    projects: [],
  });

  const [aiSuggestions, setAiSuggestions] = useState({
    summary: '',
    experienceImprovements: {},
    missingDetails: [],
    score: null,
  });

  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  const updateSummary = (summary) => {
    setResumeData(prev => ({
      ...prev,
      summary,
    }));
  };

  const addExperience = (experience) => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, experience],
    }));
  };

  const updateExperience = (index, experience) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => i === index ? experience : exp),
    }));
  };

  const removeExperience = (index) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const addEducation = (education) => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, education],
    }));
  };

  const updateEducation = (index, education) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => i === index ? education : edu),
    }));
  };

  const removeEducation = (index) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const updateSkills = (type, skills) => {
    setResumeData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: skills,
      },
    }));
  };

  const addProject = (project) => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, project],
    }));
  };

  const addCertification = (certification) => {
    setResumeData(prev => ({
      ...prev,
      certifications: [...prev.certifications, certification],
    }));
  };

  const value = {
    currentStep,
    setCurrentStep,
    selectedTemplate,
    setSelectedTemplate,
    resumeData,
    setResumeData,
    aiSuggestions,
    setAiSuggestions,
    updatePersonalInfo,
    updateSummary,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    updateSkills,
    addProject,
    addCertification,
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};

