import React from 'react';
import { User, Mail, Phone, MapPin, Linkedin, Globe, Camera, X } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { formatName, formatLocation } from '../../utils/textUtils';

const PersonalInfoForm = () => {
  const { resumeData, updatePersonalInfo } = useResume();
  const { personalInfo } = resumeData;

  const handleNameBlur = (e) => {
    const formatted = formatName(e.target.value);
    updatePersonalInfo('fullName', formatted);
  };

  const handleLocationBlur = (e) => {
    const formatted = formatLocation(e.target.value);
    updatePersonalInfo('location', formatted);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Image too large! Please use an image under 2MB.');
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file (JPG, PNG, etc.)');
        return;
      }

      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonalInfo('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    updatePersonalInfo('profileImage', '');
  };

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Personal Information</h2>
        <p className="text-gray-600">Let's start with your basic contact details</p>
      </div>

      {/* Profile Picture Upload */}
      <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-dashed border-blue-300">
        <label className="label">
          <Camera className="w-5 h-5 inline mr-2" />
          Profile Picture (Optional)
        </label>
        
        <div className="flex items-center gap-6">
          {/* Image Preview */}
          <div className="relative w-28 h-28 border-4 border-white rounded-xl overflow-hidden bg-gray-100 shadow-lg flex-shrink-0">
            {personalInfo.profileImage ? (
              <>
                <img 
                  src={personalInfo.profileImage} 
                  alt="Profile Preview" 
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <User className="w-14 h-14" />
              </div>
            )}
          </div>
          
          {/* Upload Button */}
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              id="profile-image-upload"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label 
              htmlFor="profile-image-upload"
              className="btn-primary cursor-pointer inline-flex items-center"
            >
              <Camera className="w-4 h-4 mr-2" />
              {personalInfo.profileImage ? 'Change Photo' : 'Upload Photo'}
            </label>
            <p className="text-xs text-gray-600 mt-2">
              📸 Recommended: Square image, at least 200x200px, max 2MB
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Your photo will appear on your resume
            </p>
          </div>
        </div>
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
            placeholder="Rajesh Kumar"
            value={personalInfo.fullName}
            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
            onBlur={handleNameBlur}
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
            placeholder="rajesh.kumar@gmail.com"
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
            placeholder="+91 98765 43210"
            value={personalInfo.phone}
            onChange={(e) => {
              // Allow only numbers, +, spaces, and parentheses
              const value = e.target.value.replace(/[^0-9+\s()-]/g, '');
              updatePersonalInfo('phone', value);
            }}
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
            placeholder="Mumbai, Maharashtra"
            value={personalInfo.location}
            onChange={(e) => updatePersonalInfo('location', e.target.value)}
            onBlur={handleLocationBlur}
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
            placeholder="linkedin.com/in/rajesh-kumar"
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
            placeholder="www.rajeshkumar.dev"
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

