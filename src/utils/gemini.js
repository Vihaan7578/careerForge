import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyDMAZOl9YU5OICIuWsWVSSosUvQljJRlhs';
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateProfessionalSummary = async (resumeData) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Create a compelling professional summary for a resume based on the following information:
    
Name: ${resumeData.personalInfo.fullName}
Experience: ${resumeData.experience.map(exp => `${exp.title} at ${exp.company}`).join(', ')}
Skills: ${[...resumeData.skills.technical, ...resumeData.skills.soft].join(', ')}
Education: ${resumeData.education.map(edu => `${edu.degree} in ${edu.field}`).join(', ')}

Requirements:
- Write in first person perspective
- Be concise (2-4 sentences, max 100 words)
- Highlight key strengths and value proposition
- Be professional and impactful
- Focus on achievements and expertise

Generate ONLY the summary text, no additional commentary.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();
  } catch (error) {
    console.error('Error generating summary:', error);
    throw new Error('Failed to generate professional summary');
  }
};

export const improveBulletPoint = async (originalText, jobTitle) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Improve this resume bullet point for a ${jobTitle} position:

Original: "${originalText}"

Requirements:
- Start with a strong action verb
- Include quantifiable metrics or impact where possible
- Be specific and results-oriented
- Keep it concise (under 150 characters)
- Make it more impactful and professional

Generate ONLY the improved bullet point, no additional commentary.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();
  } catch (error) {
    console.error('Error improving bullet point:', error);
    throw new Error('Failed to improve bullet point');
  }
};

export const generateResumeScore = async (resumeData) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Analyze this resume and provide a score from 0-100 with specific feedback:

Personal Info: ${JSON.stringify(resumeData.personalInfo)}
Summary: ${resumeData.summary || 'None'}
Experience: ${resumeData.experience.length} entries
Education: ${resumeData.education.length} entries
Skills: ${[...resumeData.skills.technical, ...resumeData.skills.soft].length} skills
Projects: ${resumeData.projects?.length || 0} projects
Certifications: ${resumeData.certifications?.length || 0} certifications

Evaluate based on:
1. Completeness (25 points)
2. Impact & Metrics (25 points)
3. Clarity & Organization (25 points)
4. Professional Presentation (25 points)

Provide response in this exact JSON format:
{
  "score": <number 0-100>,
  "breakdown": {
    "completeness": <number 0-25>,
    "impact": <number 0-25>,
    "clarity": <number 0-25>,
    "presentation": <number 0-25>
  },
  "strengths": ["strength 1", "strength 2"],
  "improvements": ["improvement 1", "improvement 2", "improvement 3"]
}

ONLY return valid JSON, no additional text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();
    
    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Error generating resume score:', error);
    // Return a default score if AI fails
    return {
      score: 65,
      breakdown: {
        completeness: 15,
        impact: 15,
        clarity: 18,
        presentation: 17
      },
      strengths: ['Good basic structure', 'Clear contact information'],
      improvements: ['Add more quantifiable achievements', 'Include a professional summary', 'Expand on technical skills']
    };
  }
};

export const suggestMissingDetails = async (resumeData) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Analyze this resume and suggest what's missing or could be improved:

Summary: ${resumeData.summary ? 'Present' : 'Missing'}
Experience Entries: ${resumeData.experience.length}
Education Entries: ${resumeData.education.length}
Skills: ${[...resumeData.skills.technical, ...resumeData.skills.soft].join(', ')}
Projects: ${resumeData.projects?.length || 0}
Certifications: ${resumeData.certifications?.length || 0}

Provide 3-5 specific, actionable suggestions for improvement.
Format as a JSON array of strings: ["suggestion 1", "suggestion 2", ...]

ONLY return valid JSON array, no additional text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();
    
    // Extract JSON from response
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Error suggesting missing details:', error);
    return [
      'Add a professional summary at the top',
      'Include quantifiable achievements in experience',
      'Add relevant projects to showcase your work',
      'Consider adding certifications if you have any'
    ];
  }
};

export const generateJobDescriptionMatch = async (resumeData, jobDescription) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `Compare this resume with the job description and provide tailored suggestions:

Resume Summary: ${resumeData.summary}
Resume Skills: ${[...resumeData.skills.technical, ...resumeData.skills.soft].join(', ')}

Job Description:
${jobDescription}

Provide:
1. Match percentage (0-100)
2. Missing keywords that should be added
3. Specific improvements to better match the job

Format as JSON:
{
  "matchPercentage": <number>,
  "missingKeywords": ["keyword1", "keyword2"],
  "suggestions": ["suggestion1", "suggestion2"]
}

ONLY return valid JSON, no additional text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();
    
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Error matching job description:', error);
    return {
      matchPercentage: 70,
      missingKeywords: [],
      suggestions: ['Tailor your experience to match the job requirements']
    };
  }
};

