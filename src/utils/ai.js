// AI Integration with Groq - The Magic Behind the Scenes
// This file handles all communication with the Groq AI service
// Groq provides free, fast AI (using the Llama 3.3 model) to generate resume content

// API Configuration - Think of these as your login credentials for the AI service
// NOTE: In production, you should use environment variables for the API key
// For now, you'll need to add your own Groq API key here (get one free at console.groq.com)
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || 'YOUR_GROQ_API_KEY_HERE'; // The secret key to access Groq
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'; // Where we send our requests
const MODEL = 'llama-3.3-70b-versatile'; // Which AI model to use (Llama 3.3 is the latest and greatest)

// callGroqAPI - The main function that talks to the AI
// It sends a prompt (question/instruction) and gets back an answer
// responseFormat can be 'text' (plain text) or 'json' (structured data)
async function callGroqAPI(prompt, responseFormat = 'text') {
  try {
    // Send a POST request to Groq's API
    // POST means we're sending data TO the server (as opposed to GET which just asks for data)
    const response = await fetch(GROQ_API_URL, {
      method: 'POST', // We're sending data, not just asking for it
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`, // Prove we have permission to use the API
        'Content-Type': 'application/json', // Tell the server we're sending JSON data
      },
      // The actual data we're sending - converted to a JSON string
      body: JSON.stringify({
        model: MODEL, // Which AI model to use
        messages: [
          {
            role: 'user', // We're the user, asking a question
            content: prompt, // The actual question/instruction we want the AI to answer
          },
        ],
        temperature: 0.7, // How creative the AI should be (0 = boring, 1 = very creative, 0.7 = balanced)
        max_tokens: 1024, // Maximum length of the AI's response (tokens are like word pieces)
      }),
    });

    // If the API request failed (like wrong API key or server error), throw an error
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API error:', response.status, errorText);
      throw new Error(`API request failed: ${response.status}`);
    }

    // Parse the response - convert from JSON string to actual JavaScript object
    const data = await response.json();
    
    // Extract the AI's text response
    // The ?. is "optional chaining" - it won't crash if any part is missing
    // ||  '' means "if it's empty, use an empty string instead"
    const text = data.choices[0]?.message?.content?.trim() || '';

    // If we asked for JSON format, we need to extract and parse it
    if (responseFormat === 'json') {
      // The AI sometimes wraps JSON in markdown code blocks or adds extra text
      // So we need to be smart about finding the actual JSON
      let jsonText = '';

      // Method 1: Look for JSON inside markdown code blocks like ```json { ... } ```
      const codeBlockMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
      if (codeBlockMatch) {
        jsonText = codeBlockMatch[1].trim(); // Get what's between the ```json and ```
      }
      // Method 2: If no code block, look for JSON objects { ... } or arrays [ ... ]
      else {
        const jsonObjectMatch = text.match(/\{[\s\S]*\}/); // Find {...}
        const jsonArrayMatch = text.match(/\[[\s\S]*\]/); // Find [...]

        if (jsonObjectMatch) {
          jsonText = jsonObjectMatch[0]; // Use the object
        } else if (jsonArrayMatch) {
          jsonText = jsonArrayMatch[0]; // Use the array
        } else {
          // Method 3: Maybe the entire response is JSON - check if it starts with { or [
          const possibleJson = text.trim();
          if (possibleJson.startsWith('{') || possibleJson.startsWith('[')) {
            jsonText = possibleJson;
          }
        }
      }

      // If we found something that looks like JSON, try to parse it
      if (jsonText) {
        try {
          return JSON.parse(jsonText); // Convert JSON string to actual JavaScript object
        } catch (parseError) {
          // If parsing failed, log everything so we can debug
          console.error('JSON parse error:', parseError);
          console.error('Raw text:', text);
          console.error('Extracted JSON:', jsonText);
          throw new Error(`Failed to parse AI response as JSON: ${parseError.message}`);
        }
      }

      // If we couldn't find any JSON, that's a problem
      throw new Error('No valid JSON found in AI response');
    }

    // If we just wanted plain text, return it as-is
    return text;
  } catch (error) {
    console.error('Error calling Groq API:', error);
    throw error; // Pass the error up so the calling function knows something went wrong
  }
}

// generateAboutMe - Creates a personalized "About Me" section for the resume
// This is like a brief introduction that captures who you are professionally
export const generateAboutMe = async (resumeData) => {
  try {
    // Build a detailed prompt telling the AI what to write
    // We include all the user's info so the AI can write something personal and specific
    const prompt = `Create a compelling "About Me" section for a resume based on the following information:

Name: ${resumeData.personalInfo.fullName}
Experience: ${resumeData.experience.map(exp => `${exp.title} at ${exp.company}`).join(', ')}
Skills: ${[...resumeData.skills.technical, ...resumeData.skills.soft].join(', ')}
Education: ${resumeData.education.map(edu => `${edu.degree}${edu.field ? ` in ${edu.field}` : ''}`).join(', ')}

Requirements:
- Write in first person with a warm, conversational tone
- Be personal and authentic - blend professional achievements with personality
- Include interests, values, and career aspirations
- Make it engaging and relatable, not stiff or formal
- 3-5 sentences, max 120 words
- Use natural, flowing language (like introducing yourself to someone)
- Show passion and enthusiasm for your field

Generate ONLY the About Me text, no additional commentary or formatting.`;

    // Call the AI and return the text response
    return await callGroqAPI(prompt, 'text');
  } catch (error) {
    console.error('Error generating About Me:', error);
    // If something went wrong, throw a user-friendly error message
    throw new Error('Failed to generate About Me section. Please try again.');
  }
};

// improveBulletPoint - Makes a resume bullet point more professional and impactful
// Takes boring text like "Did customer service" and makes it "Delivered exceptional customer service to 100+ clients daily"
export const improveBulletPoint = async (originalText, jobTitle) => {
  try {
    // Tell the AI to improve the bullet point with specific requirements
    const prompt = `Improve this resume bullet point for a ${jobTitle} position:

Original: "${originalText}"

Requirements:
- Start with a strong action verb
- Include quantifiable metrics or impact where possible
- Be specific and results-oriented
- Keep it concise (under 150 characters)
- Make it more impactful and professional
- Use active voice

Generate ONLY the improved bullet point, no additional commentary, quotes, or formatting.`;

    return await callGroqAPI(prompt, 'text');
  } catch (error) {
    console.error('Error improving bullet point:', error);
    throw new Error('Failed to improve bullet point. Please try again.');
  }
};

// generateResumeScore - Analyzes the resume and gives it a score out of 100
// Also provides feedback on what's good and what needs improvement
export const generateResumeScore = async (resumeData) => {
  try {
    // First, check what the resume actually has
    // This helps us give smart feedback based on what's present (or missing)
    const hasPersonalInfo = resumeData.personalInfo.fullName && resumeData.personalInfo.email;
    const hasSummary = !!resumeData.summary; // !! converts to boolean (true/false)
    const hasExperience = resumeData.experience.length > 0;
    const hasEducation = resumeData.education.length > 0;
    const hasSkills = (resumeData.skills.technical.length + resumeData.skills.soft.length) > 0;
    const totalSkills = resumeData.skills.technical.length + resumeData.skills.soft.length;

    // Calculate a completeness score (out of 25 points)
    // Each section is worth different points based on importance
    const completenessScore = Math.round(
      (hasPersonalInfo ? 10 : 0) +  // Contact info is super important - 10 points
      (hasSummary ? 5 : 0) +         // Summary is nice to have - 5 points
      (hasExperience ? 5 : 0) +      // Experience is crucial - 5 points
      (hasEducation ? 3 : 0) +       // Education matters - 3 points
      (hasSkills ? 2 : 0)            // Skills are expected - 2 points
    );

    // Analyze how impactful the experience section is (out of 25 points)
    let impactScore = 0;
    if (hasExperience) {
      // Count how many experiences have numbers or strong action verbs
      const experiencesWithMetrics = resumeData.experience.filter(exp =>
        exp.description.some(desc =>
          /\d+/.test(desc) || // Contains any digits (like "increased sales by 50%")
          /\b(increased|decreased|improved|reduced|achieved|delivered|managed|led|created|built|developed)\b/i.test(desc) // Has power words
        )
      ).length;
      
      // Calculate percentage of good experiences and convert to points
      impactScore = Math.round((experiencesWithMetrics / resumeData.experience.length) * 25);
    }

    // Clarity score - how well-organized is the resume? (out of 20 points)
    const clarityScore = hasSummary && hasExperience && hasEducation ? 20 : // Perfect - all main sections
                        hasExperience && hasEducation ? 15 :                // Good - has key sections
                        hasExperience || hasEducation ? 10 : 5;             // Okay - has something

    // Presentation score - does it look professional? (out of 20 points)
    const presentationScore = hasPersonalInfo && hasSummary ? 20 : // Perfect - looks complete
                             hasPersonalInfo ? 15 : 10;            // Decent - at least has contact info

    // Add up all the scores (max 100)
    const overallScore = Math.min(100, completenessScore + impactScore + clarityScore + presentationScore);

    // Build lists of strengths and things to improve
    const strengths = [];
    const improvements = [];

    // Add strengths based on what's present
    if (hasPersonalInfo) strengths.push('Complete contact information');
    if (hasSummary) strengths.push('Professional summary included');
    if (hasExperience) strengths.push(`${resumeData.experience.length} experience ${resumeData.experience.length === 1 ? 'entry' : 'entries'}`);
    if (hasEducation) strengths.push(`${resumeData.education.length} education ${resumeData.education.length === 1 ? 'entry' : 'entries'}`);
    if (totalSkills > 5) strengths.push(`Strong skills section (${totalSkills} skills)`);

    // Add improvements based on what's missing
    if (!hasPersonalInfo) improvements.push('Add complete contact information');
    if (!hasSummary) improvements.push('Include a professional summary');
    if (!hasExperience) improvements.push('Add work experience section');
    if (!hasEducation) improvements.push('Add education section');
    if (totalSkills < 5) improvements.push('Expand skills section');
    if (impactScore < 15) improvements.push('Add quantifiable achievements to experience');

    // Build a prompt for the AI to generate or refine the score
    const prompt = `Analyze this resume and provide a detailed score from 0-100 with specific feedback.

Resume Data:
- Personal Info: ${hasPersonalInfo ? 'Complete' : 'Incomplete'}
- Summary: ${hasSummary ? 'Present' : 'Missing'}
- Experience: ${resumeData.experience.length} entries
- Education: ${resumeData.education.length} entries
- Skills: ${totalSkills} total skills
- Projects: ${resumeData.projects?.length || 0}
- Certifications: ${resumeData.certifications?.length || 0}

Based on this data, provide a JSON response with:
1. Overall score (0-100)
2. Breakdown scores for each category (0-25 each)
3. 2-3 specific strengths
4. 2-3 specific improvement suggestions

Return ONLY valid JSON in this exact format:
{
  "score": ${overallScore},
  "breakdown": {
    "completeness": ${completenessScore},
    "impact": ${impactScore},
    "clarity": ${clarityScore},
    "presentation": ${presentationScore}
  },
  "strengths": ${JSON.stringify(strengths.slice(0, 3))},
  "improvements": ${JSON.stringify(improvements.slice(0, 3))}
}`;

    return await callGroqAPI(prompt, 'json');
  } catch (error) {
    console.error('Error generating resume score:', error);

    // If the AI fails, calculate scores ourselves as a fallback
    // This ensures users always get SOME feedback even if the AI is down
    const hasPersonalInfo = resumeData.personalInfo.fullName && resumeData.personalInfo.email;
    const hasSummary = !!resumeData.summary;
    const hasExperience = resumeData.experience.length > 0;
    const hasEducation = resumeData.education.length > 0;
    const totalSkills = resumeData.skills.technical.length + resumeData.skills.soft.length;

    // Recalculate all the scores
    const completenessScore = (hasPersonalInfo ? 10 : 0) + (hasSummary ? 5 : 0) + (hasExperience ? 5 : 0) + (hasEducation ? 3 : 0) + (totalSkills > 0 ? 2 : 0);
    const impactScore = Math.min(25, resumeData.experience.length * 5); // Rough estimate: 5 points per experience
    const clarityScore = (hasSummary ? 10 : 0) + (hasExperience ? 8 : 0) + (hasEducation ? 7 : 0);
    const presentationScore = (hasPersonalInfo ? 12 : 0) + (hasSummary ? 8 : 0) + (totalSkills > 3 ? 5 : 0);

    const overallScore = completenessScore + impactScore + clarityScore + presentationScore;

    // Return a structured response just like the AI would
    return {
      score: Math.min(100, overallScore),
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
      ].filter(Boolean), // filter(Boolean) removes any null/undefined values
      improvements: [
        !hasPersonalInfo ? 'Add complete contact information' : null,
        !hasSummary ? 'Include a professional summary' : null,
        !hasExperience ? 'Add work experience section' : null,
        totalSkills < 5 ? 'Expand skills section' : null,
        'Add quantifiable achievements'
      ].filter(Boolean).slice(0, 3), // Get first 3 non-null improvements
    };
  }
};

// suggestMissingDetails - Tells users what they forgot to add to their resume
// Like a helpful friend pointing out "hey, you didn't mention your certifications!"
export const suggestMissingDetails = async (resumeData) => {
  try {
    // Check what the resume currently has
    const hasPersonalInfo = resumeData.personalInfo.fullName && resumeData.personalInfo.email && resumeData.personalInfo.phone;
    const hasSummary = !!resumeData.summary;
    const hasExperience = resumeData.experience.length > 0;
    const hasEducation = resumeData.education.length > 0;
    const hasSkills = (resumeData.skills.technical.length + resumeData.skills.soft.length) > 0;
    const totalSkills = resumeData.skills.technical.length + resumeData.skills.soft.length;

    // Build a list of contextual suggestions based on what's missing
    const suggestions = [];

    if (!hasPersonalInfo) {
      suggestions.push('Complete your contact information - add phone number and location');
    }

    if (!hasSummary) {
      suggestions.push('Add a compelling professional summary at the top of your resume');
    }

    if (!hasExperience) {
      suggestions.push('Include your work experience with specific achievements and responsibilities');
    } else if (resumeData.experience.length < 2) {
      // They have experience, but only one job - suggest adding more
      suggestions.push('Consider adding more work experience entries to show career progression');
    }

    if (!hasEducation) {
      suggestions.push('Add your educational background and any relevant certifications');
    }

    if (totalSkills < 5) {
      suggestions.push('Expand your skills section with more relevant technical and soft skills');
    }

    // Check if their experience descriptions have numbers/metrics
    if (hasExperience) {
      const experiencesWithMetrics = resumeData.experience.filter(exp =>
        exp.description.some(desc => /\d+/.test(desc)) // Check if any description has numbers
      ).length;

      if (experiencesWithMetrics < resumeData.experience.length) {
        // Some experiences are missing numbers - suggest adding them
        suggestions.push('Add quantifiable achievements to your experience (numbers, percentages, results)');
      }
    }

    // If they have neither projects nor certifications, suggest adding one
    if (resumeData.projects?.length === 0 && resumeData.certifications?.length === 0) {
      suggestions.push('Consider adding a projects or certifications section to showcase additional accomplishments');
    }

    // Ask the AI to provide targeted suggestions based on the resume's current state
    const prompt = `Analyze this resume and provide 3-5 specific, actionable suggestions for improvement.

Current Resume Status:
- Personal Info: ${hasPersonalInfo ? 'Complete' : 'Incomplete'}
- Summary: ${hasSummary ? 'Present' : 'Missing'}
- Experience: ${resumeData.experience.length} entries
- Education: ${resumeData.education.length} entries
- Skills: ${totalSkills} total skills
- Projects: ${resumeData.projects?.length || 0}
- Certifications: ${resumeData.certifications?.length || 0}

Based on the current state, provide targeted suggestions to improve the resume. Focus on the most impactful improvements first.

Return ONLY a JSON array of 3-5 specific suggestions:
["suggestion 1", "suggestion 2", "suggestion 3", "suggestion 4", "suggestion 5"]`;

    return await callGroqAPI(prompt, 'json');
  } catch (error) {
    console.error('Error suggesting missing details:', error);

    // Fallback: if AI fails, use our pre-calculated suggestions
    const suggestions = [];

    if (!resumeData.personalInfo.fullName || !resumeData.personalInfo.email) {
      suggestions.push('Complete your contact information');
    }

    if (!resumeData.summary) {
      suggestions.push('Add a professional summary');
    }

    if (resumeData.experience.length === 0) {
      suggestions.push('Add work experience section');
    }

    if (resumeData.skills.technical.length + resumeData.skills.soft.length < 5) {
      suggestions.push('Expand your skills section');
    }

    suggestions.push('Add quantifiable achievements to experience');

    return suggestions.slice(0, 5); // Return max 5 suggestions
  }
};

// generateJobDescriptionMatch - Compares resume with a job posting
// This feature isn't used in the current app, but it's here for future use
// It would tell you "your resume matches this job 75%" and suggest keywords to add
export const generateJobDescriptionMatch = async (resumeData, jobDescription) => {
  try {
    const prompt = `Compare this resume with the job description and provide tailored suggestions:

Resume Summary: ${resumeData.summary}
Resume Skills: ${[...resumeData.skills.technical, ...resumeData.skills.soft].join(', ')}

Job Description:
${jobDescription}

Provide:
1. Match percentage (0-100)
2. Missing keywords that should be added
3. Specific improvements to better match the job

Format as JSON (no markdown, just raw JSON):
{
  "matchPercentage": <number>,
  "missingKeywords": ["keyword1", "keyword2"],
  "suggestions": ["suggestion1", "suggestion2"]
}`;

    return await callGroqAPI(prompt, 'json');
  } catch (error) {
    console.error('Error matching job description:', error);
    // Fallback response if AI fails
    return {
      matchPercentage: 70,
      missingKeywords: [],
      suggestions: ['Tailor your experience to match the job requirements'],
    };
  }
};
