# CareerForge - Project Notes

Just documenting how I built this thing, mostly for my own reference (and maybe future me when I forget how everything works).

## What This Is

A resume builder that uses AI to make your resume not suck. Built for the Technovanza 2025 hackathon with Vihaan Pandey and Aditi Chopra (shoutout to Mrs. Gunjan Khanna for putting up with our questions).

Had like 2 days to build it. Turned out better than expected honestly.

## Tech Choices (and why)

**React + Vite**: Because Create React App is slow and Vite is fast. Simple.

**Tailwind CSS**: Utility-first styling. Yeah yeah, some people hate it, but once you get used to it... chef's kiss. No more naming CSS classes.

**Groq API**: Originally tried Google Gemini but it kept throwing 404s. Switched to Groq - way faster, free tier is generous, and the Llama 3.3 model is actually really good.

**jsPDF + html2canvas**: For PDF generation. Getting the PDF to match the on-screen preview was... an adventure. Eventually figured out you gotta capture the actual pixel dimensions and convert to mm. Math is fun when it finally works.

## Cool Features

**AI Stuff:**
- Generates personalized "About Me" sections
- Improves bullet points (turns "did customer service" into actual achievements)
- Scores your resume (0-100) with breakdown
- Suggests what's missing

**UX Stuff:**
- 7-step form that doesn't feel overwhelming
- Real-time progress bar
- Template preview before you choose
- PDF matches exactly what you see
- Works on mobile (kinda proud of that)

**Template Variety:**
- 17 templates ranging from super professional to artsy
- Category filtering
- Live preview with actual data

## Things I Learned

1. **AI APIs are unpredictable**: Have fallbacks. Always.
2. **PDF generation is harder than it looks**: Pixels to mm conversion, respecting actual rendered sizes, handling dynamic content... yeah.
3. **Context API is underrated**: Sure, Redux exists, but for this scale? Context was perfect.
4. **Tailwind actually rocks**: Once you stop fighting it and embrace the utility-first approach.
5. **Sometimes simple solutions are best**: Almost added React Router, but state-based navigation worked fine.

## Known Issues (that I'm pretending aren't issues)

- AI sometimes returns wonky JSON (fixed with robust parsing)
- No authentication (it's a demo, relax)
- API key is hardcoded (again, demo)
- Some templates might look weird with lots of content (tested with reasonable amounts)

## If I Had More Time

- Add authentication so people can save resumes
- Let users edit AI-generated content inline
- More templates (because 17 isn't enough apparently)
- Dark mode (everyone asks for dark mode)
- Export to other formats (Word, markdown)
- ATS score analysis
- Job description matching

## File Structure That Actually Makes Sense

```
src/
├── components/
│   ├── forms/           # All the input forms
│   ├── templates/       # All 17 resume templates
│   ├── Landing.jsx      # Homepage
│   ├── ExamplesPage.jsx # Template gallery
│   ├── ReviewStep.jsx   # Final review & download
│   └── ...
├── context/
│   └── ResumeContext.jsx # Shared state
├── utils/
│   ├── ai.js            # Groq API integration
│   ├── sampleData.js    # Example resumes
│   ├── skillsData.js    # Skill suggestions
│   └── textUtils.js     # Auto-capitalization
└── App.jsx              # Main app logic
```

## Credits

Built by:
- Vihaan Pandey (that's me - mostly code)
- Aditi Chopra (design input and testing)

Guided by:
- Mrs. Gunjan Khanna

For:
- Technovanza Hackathon 2025

Powered by:
- Coffee (too much)
- Groq AI (surprisingly good)
- Stack Overflow (when things broke)

## Final Thoughts

Started as "let's build a basic resume builder" and ended up with an AI-powered, multi-template, feature-rich web app.

Not bad for 2 days of work and questionable amounts of caffeine.

If you're reading this and wondering "should I use this for my actual resume?" - NOOOO WAYSSS HAHA

---

Last updated: October 2025  
Status: Feature complete, surprisingly bug-free  
Coffee consumed: Lost count

