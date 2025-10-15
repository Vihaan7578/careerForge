# 🚀 CareerForge- LINK TO THE WEBSITE AT THE BOTTOM

So... I built this resume builder thing for a hackathon (Technovanza 2025), and honestly? It turned out way cooler than I expected.

Basically, it's an AI-powered tool that helps you whip up professional-looking resumes without wanting to throw your laptop out the window. You know how tedious resume building usually is, right? Yeah. Not anymore.

## ✨ What It Actually Does

Okay so here's what this website can do

- **AI Content Magic**: Uses Groq AI to write your professional summary. Like, it actually sounds good—not robotic at all
- **Bullet Point Makeover**: Takes your boring job descriptions and makes them... well, impressive. The AI has some tricks up its sleeve
- **Score Your Resume**: Get feedback on what's missing or could be better. It's kinda like having a career counselor, but free (and available at 3 AM)
- **17 Templates!**: Yep, seventeen. From super professional to artsy-modern. There's probably one that fits your vibe
- **About Me Section**: Generates a personalized introduction using everything you've entered
- **PDF Download**: Export your masterpiece. The PDF actually matches what you see on screen (trust me, this was harder than it sounds)
- **Step-by-Step Forms**: No overwhelming single page with a million fields. Just... one thing at a time
- **Works on Mobile**: Because sometimes inspiration strikes when you're not at your desk

## 🛠️ Tech Stack (for the nerds)

Here's what I used to build this:

- **Frontend**: React 19 + Vite (because hot reload is life)
- **Styling**: Tailwind CSS (utility-first all the way)
- **AI**: Groq API with Llama 3.3-70B (switched from Gemini—long story)
- **PDF Magic**: jsPDF + html2canvas (making pixels cooperate since 2024)
- **Icons**: Lucide React (clean and simple)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

Alright, let's get this thing running on your machine:

1. Jump into the project folder:
```bash
cd ai-resume-builder
```

2. Install all the stuff it needs:
```bash
npm install
```

3. Set up your Groq API key:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Get a free API key from [Groq Console](https://console.groq.com)
   - Open `.env` and add your key:
     ```
     VITE_GROQ_API_KEY=your_actual_api_key_here
     ```

4. Fire up the dev server:
```bash
npm run dev
```

5. Open your browser and head to: `http://localhost:5173`

That's it! Should be up and running.

## 📖 How to Use

Using this is pretty straightforward, honestly:

1. **Hit that "Get Started" button** on the landing page (or click "See Examples" if you wanna browse templates first)
2. **Personal Info**: Your name, email, phone—the usual stuff
3. **Experience**: Add your jobs. Pro tip: use that little sparkle icon to let AI jazz up your descriptions
4. **Education**: Where you studied, what you studied, when you studied
5. **Skills**: Both the technical stuff and the "I'm a team player" soft skills
6. **Projects & Certifications**: Show off what you've built and what you're certified in
7. **Additional Info**: Awards, languages, volunteer work—whatever else makes you awesome
8. **Review & Generate**: This is where the magic happens. Generate your "About Me", pick from 17 templates, and download
9. **Download**: Get your PDF. It'll look exactly like what you see on screen (I promise)

## 🎯 Key Features Explained

### AI Summary Generation
- Analyzes your experience, skills, and education
- Creates a compelling 2-4 sentence professional summary
- Tailored to highlight your unique value proposition

### Bullet Point Enhancement
- Click the sparkle (✨) icon next to any job description
- AI rewrites it with strong action verbs and impact focus
- Suggests quantifiable metrics where applicable

### Resume Scoring
- Scores your resume from 0-100
- Provides breakdown across 4 categories
- Lists specific strengths and improvements
- Suggests missing details



## 🤝 Contributing
  This project was built for Technovanza Hackathon 2025.

## 📄 License

MIT License

## 🙏 Acknowledgments

- Google Gemini AI for powerful language model
- Tailwind CSS for beautiful styling
- Lucide React for amazing icons
- Vite for lightning-fast development

---

Link to the website WOOOOOHOOOOOOO- https://career-forge-psi.vercel.app/

