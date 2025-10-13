# 🚀 AI Resume Builder

An intelligent, AI-powered resume builder that helps job seekers create professional resumes in minutes. Built for Technovanza Hackathon 2025.

## ✨ Features

- **AI-Powered Content Generation**: Generate professional summaries using Google Gemini AI
- **Smart Bullet Point Enhancement**: AI improves your job descriptions to be more impactful
- **Resume Scoring**: Get AI-powered feedback with scores and suggestions
- **Beautiful Templates**: Choose from modern and classic professional designs
- **Real-time Preview**: See your resume update as you type
- **PDF Export**: Download high-quality PDF resumes
- **Intuitive Multi-step Form**: Easy-to-use interface guides you through the process
- **Mobile Responsive**: Works on all devices

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **AI**: Google Gemini Pro API
- **PDF Generation**: jsPDF + html2canvas
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd ai-resume-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📖 How to Use

1. **Start**: Click "Get Started" on the landing page
2. **Personal Info**: Fill in your contact details
3. **Experience**: Add your work experience (use AI to enhance descriptions!)
4. **Education**: Add your educational background
5. **Skills**: Add technical and soft skills
6. **Generate Summary**: Click to let AI create a professional summary
7. **Choose Template**: Select Modern or Classic design
8. **Analyze**: Get AI-powered score and suggestions
9. **Download**: Export your resume as PDF

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

## 📱 Templates

### Modern Template
- Clean, contemporary design
- Bold section headers
- Perfect for tech and creative roles

### Classic Template
- Traditional, elegant layout
- Professional and timeless
- Great for corporate positions

## 🎨 Customization

The app uses Tailwind CSS, making it easy to customize:
- Colors defined in `tailwind.config.js`
- Custom styles in `src/index.css`
- Component-level styling in individual files

## 🔐 API Configuration

The Google Gemini API key is currently hardcoded for hackathon purposes.
For production use, move it to environment variables:

1. Create `.env` file:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

2. Update `src/utils/gemini.js`:
```javascript
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
```

## 📦 Build for Production

```bash
npm run build
```

The build files will be in the `dist/` directory.

## 🚀 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Drag the `dist/` folder to Netlify

## 🏆 Hackathon Highlights

### Innovation & Originality ⭐⭐⭐⭐⭐
- AI-powered content generation
- Smart resume scoring algorithm
- Real-time bullet point enhancement

### Design & Visual Appeal ⭐⭐⭐⭐⭐
- Modern, intuitive interface
- Smooth animations and transitions
- Professional resume templates

### Technical Execution ⭐⭐⭐⭐⭐
- Clean, modular code architecture
- Efficient state management
- Seamless AI integration

## 📝 Demo Script

For presentation, use this flow:
1. Show landing page - explain the problem
2. Click "Get Started"
3. Quickly fill personal info
4. Add one work experience
5. Click sparkle to enhance it with AI
6. Add education and skills
7. Click "Generate Summary"
8. Switch between templates
9. Click "Analyze Resume"
10. Show the score and suggestions
11. Download PDF
12. Show final result

## 🤝 Contributing

This project was built for Technovanza Hackathon 2025.

## 📄 License

MIT License - Built with ❤️ for Technovanza

## 🙏 Acknowledgments

- Google Gemini AI for powerful language model
- Tailwind CSS for beautiful styling
- Lucide React for amazing icons
- Vite for lightning-fast development

---

**Built for Technovanza Hackathon 2025** 🎉

