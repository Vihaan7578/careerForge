import React, { useState, useEffect } from 'react';
import { Sparkles, AlertCircle, TrendingUp, Loader } from 'lucide-react';
import { useResume } from '../context/ResumeContext';
import { generateResumeScore, suggestMissingDetails } from '../utils/ai';

const AISuggestions = () => {
  const { resumeData, aiSuggestions, setAiSuggestions } = useResume();
  const [loading, setLoading] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const analyzeResume = async () => {
    setLoading(true);
    try {
      // First try to get the AI score
      let scoreData;
      try {
        scoreData = await generateResumeScore(resumeData);
      } catch (scoreError) {
        console.error('AI score generation failed:', scoreError);
        // Use contextual fallback based on actual resume data
        const hasPersonalInfo = resumeData.personalInfo.fullName && resumeData.personalInfo.email && resumeData.personalInfo.phone;
        const hasSummary = !!resumeData.summary;
        const hasExperience = resumeData.experience.length > 0;
        const hasEducation = resumeData.education.length > 0;
        const totalSkills = resumeData.skills.technical.length + resumeData.skills.soft.length;

        const completenessScore = (hasPersonalInfo ? 10 : 0) + (hasSummary ? 5 : 0) + (hasExperience ? 5 : 0) + (hasEducation ? 3 : 0) + (totalSkills > 0 ? 2 : 0);
        const impactScore = Math.min(25, resumeData.experience.length * 5);
        const clarityScore = (hasSummary ? 10 : 0) + (hasExperience ? 8 : 0) + (hasEducation ? 7 : 0);
        const presentationScore = (hasPersonalInfo ? 12 : 0) + (hasSummary ? 8 : 0) + (totalSkills > 3 ? 5 : 0);

        scoreData = {
          score: Math.min(100, completenessScore + impactScore + clarityScore + presentationScore),
          breakdown: {
            completeness: completenessScore,
            impact: impactScore,
            clarity: clarityScore,
            presentation: presentationScore,
          },
          strengths: [
            hasPersonalInfo ? 'Complete contact information' : 'Basic structure present',
            hasExperience ? `${resumeData.experience.length} experience ${resumeData.experience.length === 1 ? 'entry' : 'entries'}` : 'Room for experience details',
            totalSkills > 0 ? `${totalSkills} skills listed` : 'Skills section available'
          ].filter(Boolean),
          improvements: [
            !hasPersonalInfo ? 'Add complete contact information' : null,
            !hasSummary ? 'Include a professional summary' : null,
            !hasExperience ? 'Add work experience section' : null,
            totalSkills < 5 ? 'Expand skills section' : null,
            'Add quantifiable achievements'
          ].filter(Boolean).slice(0, 3),
        };
      }

      // Then try to get suggestions
      let suggestions;
      try {
        suggestions = await suggestMissingDetails(resumeData);
      } catch (suggestionsError) {
        console.error('AI suggestions generation failed:', suggestionsError);
        // Use contextual fallback
        const fallbackSuggestions = [];
        if (!resumeData.personalInfo.fullName || !resumeData.personalInfo.email) {
          fallbackSuggestions.push('Complete your contact information');
        }
        if (!resumeData.summary) {
          fallbackSuggestions.push('Add a professional summary');
        }
        if (resumeData.experience.length === 0) {
          fallbackSuggestions.push('Add work experience section');
        }
        if (resumeData.skills.technical.length + resumeData.skills.soft.length < 5) {
          fallbackSuggestions.push('Expand your skills section');
        }
        fallbackSuggestions.push('Add quantifiable achievements to experience');
        suggestions = fallbackSuggestions.slice(0, 5);
      }

      setAiSuggestions({
        ...aiSuggestions,
        score: scoreData,
        missingDetails: suggestions
      });
      setHasAnalyzed(true);
    } catch (error) {
      console.error('Error analyzing resume:', error);
      // Show a more informative error message
      alert('AI analysis temporarily unavailable. Using contextual scoring instead.');
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">
          <Sparkles className="w-5 h-5 inline mr-2 text-purple-600" />
          AI Analysis
        </h3>
        <button
          onClick={analyzeResume}
          disabled={loading}
          className="btn-primary text-sm py-2 px-4"
        >
          {loading ? (
            <>
              <Loader className="w-4 h-4 inline mr-2 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 inline mr-2" />
              {hasAnalyzed ? 'Re-analyze' : 'Analyze Resume'}
            </>
          )}
        </button>
      </div>

      {aiSuggestions.score && (
        <>
          {/* Resume Score */}
          <div className={`card ${getScoreBgColor(aiSuggestions.score.score)}`}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-gray-900">Resume Score</h4>
              <div className={`text-4xl font-bold ${getScoreColor(aiSuggestions.score.score)}`}>
                {aiSuggestions.score.score}/100
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completeness</span>
                <span className="font-semibold">{aiSuggestions.score.breakdown.completeness}/25</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(aiSuggestions.score.breakdown.completeness / 25) * 100}%` }}
                />
              </div>

              <div className="flex justify-between text-sm">
                <span>Impact & Metrics</span>
                <span className="font-semibold">{aiSuggestions.score.breakdown.impact}/25</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(aiSuggestions.score.breakdown.impact / 25) * 100}%` }}
                />
              </div>

              <div className="flex justify-between text-sm">
                <span>Clarity & Organization</span>
                <span className="font-semibold">{aiSuggestions.score.breakdown.clarity}/25</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(aiSuggestions.score.breakdown.clarity / 25) * 100}%` }}
                />
              </div>

              <div className="flex justify-between text-sm">
                <span>Professional Presentation</span>
                <span className="font-semibold">{aiSuggestions.score.breakdown.presentation}/25</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(aiSuggestions.score.breakdown.presentation / 25) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Strengths */}
          {aiSuggestions.score.strengths && aiSuggestions.score.strengths.length > 0 && (
            <div className="card bg-green-50 border border-green-200">
              <h4 className="font-bold text-green-900 mb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Strengths
              </h4>
              <ul className="space-y-1">
                {aiSuggestions.score.strengths.map((strength, index) => (
                  <li key={index} className="text-sm text-green-800">
                    ✓ {strength}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Improvements */}
          {aiSuggestions.score.improvements && aiSuggestions.score.improvements.length > 0 && (
            <div className="card bg-yellow-50 border border-yellow-200">
              <h4 className="font-bold text-yellow-900 mb-2 flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                Areas for Improvement
              </h4>
              <ul className="space-y-1">
                {aiSuggestions.score.improvements.map((improvement, index) => (
                  <li key={index} className="text-sm text-yellow-800">
                    • {improvement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {/* Missing Details */}
      {aiSuggestions.missingDetails && aiSuggestions.missingDetails.length > 0 && (
        <div className="card bg-blue-50 border border-blue-200">
          <h4 className="font-bold text-blue-900 mb-2">💡 Suggestions</h4>
          <ul className="space-y-1">
            {aiSuggestions.missingDetails.map((detail, index) => (
              <li key={index} className="text-sm text-blue-800">
                • {detail}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!hasAnalyzed && !loading && (
        <div className="card bg-purple-50 border border-purple-200 text-center py-8">
          <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-3" />
          <p className="text-purple-900 font-medium mb-2">
            Ready for AI Analysis?
          </p>
          <p className="text-sm text-purple-700">
            Click "Analyze Resume" to get your score and personalized suggestions!
          </p>
        </div>
      )}
    </div>
  );
};

export default AISuggestions;

