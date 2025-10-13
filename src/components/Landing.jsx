import React from 'react';
import { Sparkles, FileText, Zap, Download, Brain, Star } from 'lucide-react';

const Landing = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">AI Resume Builder</span>
            </div>
            <button
              onClick={onGetStarted}
              className="btn-primary"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center fade-in">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
            Create Your Perfect
            <br />
            <span className="gradient-text">Resume in Minutes</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Let AI help you craft a professional resume that stands out. 
            Get intelligent suggestions, beautiful templates, and land your dream job faster.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="btn-primary text-lg px-8 py-4 shadow-2xl"
            >
              Build My Resume Now
              <Zap className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              See Examples
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Free to Use</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">&lt;15min</div>
              <div className="text-gray-600">To Complete</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">AI</div>
              <div className="text-gray-600">Powered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Our AI Resume Builder?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Content</h3>
            <p className="text-gray-600">
              Our AI generates professional summaries and improves your bullet points to make them more impactful.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Beautiful Templates</h3>
            <p className="text-gray-600">
              Choose from professionally designed templates that are ATS-friendly and visually stunning.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Resume Scoring</h3>
            <p className="text-gray-600">
              Get an AI-powered score with detailed feedback on how to improve your resume.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Suggestions</h3>
            <p className="text-gray-600">
              AI identifies missing details and suggests improvements to make your resume complete.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
            <p className="text-gray-600">
              Step-by-step process with auto-save. Create your resume in under 15 minutes.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="card hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Download Instantly</h3>
            <p className="text-gray-600">
              Export your resume as a high-quality PDF ready to send to employers.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Enter Your Details</h3>
            <p className="text-gray-600">Fill in your experience, education, and skills</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">AI Enhancement</h3>
            <p className="text-gray-600">Let AI improve your content and suggest changes</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Choose Template</h3>
            <p className="text-gray-600">Select from beautiful professional templates</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-lg font-bold mb-2">Download</h3>
            <p className="text-gray-600">Export your perfect resume as PDF</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of job seekers who've created professional resumes with AI
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            Start Building Now - It's Free!
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-6 h-6" />
            <span className="text-xl font-bold">AI Resume Builder</span>
          </div>
          <p className="text-gray-400">
            Built with ❤️ for Technovanza Hackathon 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

