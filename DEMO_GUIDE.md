# Demo Guide - How to Show This Off

Alright, so you're about to demo CareerForge. Here's how to make it look good (and not accidentally break something live).

## Pre-Demo Checklist

Before you even think about opening your browser:

- [ ] Dev server is running (`npm run dev`)
- [ ] Browser is open to `http://localhost:5173`
- [ ] Close any tabs with console errors open (clean slate!)
- [ ] Have a fake persona ready (name, job title, etc.) - don't wing it
- [ ] Clear browser cache if things look weird
- [ ] Test the Groq API is working (generate an About Me once to check)

## The Pitch (30 seconds)

"Hey! This is CareerForge - basically an AI-powered resume builder I made for the hackathon. You fill in your info across 7 easy steps, and the AI helps make everything sound more professional. Plus there's 17 different template designs to choose from. Oh, and it generates a PDF that actually matches what you see on screen."

Keep it simple. Don't overexplain.

## Demo Flow (5-7 minutes)

### 1. Landing Page (30 seconds)
- Show the homepage
- Point out the "Made by BBPS, Brij Vihar" badge
- Mention there are 17 templates
- Click "See Examples" to show the gallery

### 2. Template Gallery (1 minute)
- Show the 17 templates with category filters
- Hover over a card (watch the smooth fade animation!)
- Click one to open the preview modal
- Show how you can "Use This Template"
- Go back to home

### 3. Start Building (30 seconds)
- Click "Build My Resume Now"
- Show the progress bar at the top
- Mention it's 7 steps total

### 4. Personal Info (45 seconds)
- Fill in name, email, phone
- Mention the auto-capitalization (type in lowercase, watch it fix itself)
- Upload a profile picture if you have one handy
- Click Next

### 5. Experience (1-2 minutes) - **This is where AI shines**
- Add a job title and company
- Type a boring description like "responsible for sales"
- Click the sparkle icon (✨) next to it
- Watch the AI improve it to something like "Drove sales growth through strategic client engagement"
- Add it, click Next

### 6. Education (30 seconds)
- Quickly add a degree
- Mention it's India-focused (CGPA not GPA, B.Tech options, etc.)
- Click Next

### 7. Skills (1 minute)
- Select a profession from the dropdown
- Show how it suggests relevant skills
- Add 4-5 skills quickly
- Click Next

### 8. Skip Projects & Additional Info (15 seconds)
- Just say "these are optional sections for projects, certs, awards, languages, etc."
- Click Next twice to skip to Review

### 9. Review & Download (2 minutes) - **The Grand Finale**
- Show the "Generate About Me" button
- Click it, wait for AI (usually 2-3 seconds)
- Read the generated About Me aloud - it's usually pretty good
- Show the resume score (hopefully 75+)
- Browse through the 17 templates - click a few
- Watch the resume update in real-time
- Click "Download PDF"
- Open the PDF, show it matches the preview exactly

## Pro Tips

**If AI is slow**: Have a resume partially filled beforehand, jump to step 6

**If AI fails**: Say "network hiccup" and use the fallback scores (they still work!)

**If someone asks about the tech**: React + Vite, Tailwind, Groq AI (Llama 3.3), jsPDF for PDFs

**If PDF looks weird**: Make sure you're showing the downloaded PDF, not printing it

## Common Questions & Answers

**Q: "How does the AI work?"**
A: "It uses Groq's Llama 3.3 model. You give it your experience and skills, it writes professional content. Pretty neat."

**Q: "Can I save my resume?"**
A: "Right now it's just download as PDF. For a hackathon demo, that works. Could add auth and cloud saves later."

**Q: "Why 17 templates?"**
A: "Started with 2... got carried away. They're in different categories - ATS-friendly, creative, professional, etc. Something for everyone."

**Q: "What if I don't like what the AI wrote?"**
A: "You can edit anything. The AI is just there to help, not force you."

**Q: "Is this mobile-friendly?"**
A: "Yep! The forms work great on phones. PDF download too."

## Things NOT to Demo

- The code (unless they specifically ask)
- Error handling (don't try to break it on purpose)
- The "Additional Info" form (it's cool but takes time)
- Comparing all 17 templates one by one (pick 3-4 diverse ones)

## Backup Plan

If something breaks:
1. Have a pre-made resume PDF ready to show
2. Show the Examples page with all the templates
3. Walk through the code if needed (it's well-commented now!)
4. Blame it on "conference WiFi" (always works)

## Closing

"So yeah, that's CareerForge. Built it in 2 days with my teammate for this hackathon. It actually works and people can use it for real resumes. Questions?"

Then shut up and let them ask questions. Don't oversell.

## Post-Demo

- Mention it's on GitHub if they want to check it out
- Hand them a business card if you have one
- Thank them for their time

---

**Remember**: Confidence is key. You built something cool. Show it off like you're proud of it (because you should be).

Good luck! 🚀
