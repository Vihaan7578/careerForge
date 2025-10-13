import React from 'react';
import { User, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const PersonalInfoForm = () => {
  const { resumeData, updatePersonalInfo } = useResume();
  const { personalInfo } = resumeData;

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Personal Information</h2>
        <p className="text-gray-600">Let's start with your basic contact details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="label">
            <User className="w-4 h-4 inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="John Doe"
            value={personalInfo.fullName}
            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="label">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            className="input-field"
            placeholder="john.doe@example.com"
            value={personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="label">
            <Phone className="w-4 h-4 inline mr-2" />
            Phone Number *
          </label>
          <input
            type="tel"
            className="input-field"
            placeholder="+1 (555) 123-4567"
            value={personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="label">
            <MapPin className="w-4 h-4 inline mr-2" />
            Location *
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="New York, NY"
            value={personalInfo.location}
            onChange={(e) => updatePersonalInfo('location', e.target.value)}
            required
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="label">
            <Linkedin className="w-4 h-4 inline mr-2" />
            LinkedIn Profile (Optional)
          </label>
          <input
            type="url"
            className="input-field"
            placeholder="linkedin.com/in/johndoe"
            value={personalInfo.linkedin}
            onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
          />
        </div>

        {/* Portfolio */}
        <div>
          <label className="label">
            <Globe className="w-4 h-4 inline mr-2" />
            Portfolio/Website (Optional)
          </label>
          <input
            type="url"
            className="input-field"
            placeholder="www.johndoe.com"
            value={personalInfo.portfolio}
            onChange={(e) => updatePersonalInfo('portfolio', e.target.value)}
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>💡 Tip:</strong> Make sure your email and phone number are current. 
          Recruiters need to be able to reach you!
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoForm;

