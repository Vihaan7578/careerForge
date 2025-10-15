// Sample resume data for template showcase

export const sampleResumes = [
  {
    id: 1,
    template: 'modern',
    name: 'Priya Sharma',
    profession: 'Software Engineer',
    data: {
      personalInfo: {
        fullName: 'Priya Sharma',
        email: 'priya.sharma@email.com',
        phone: '+91 98765 43210',
        location: 'Bangalore, Karnataka',
        linkedin: 'linkedin.com/in/priyasharma',
        portfolio: 'priyasharma.dev',
        profileImage: '',
      },
      summary: 'Innovative Software Engineer with 4+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Passionate about creating efficient solutions and mentoring junior developers.',
      experience: [
        {
          title: 'Senior Software Engineer',
          company: 'Tech Solutions India',
          location: 'Bangalore, Karnataka',
          startDate: '2022-01',
          endDate: '',
          current: true,
          description: ['Led development of microservices architecture serving 1M+ users', 'Reduced API response time by 40% through optimization', 'Mentored team of 5 junior developers']
        },
        {
          title: 'Software Engineer',
          company: 'Digital Innovations Pvt Ltd',
          location: 'Mumbai, Maharashtra',
          startDate: '2020-06',
          endDate: '2021-12',
          current: false,
          description: ['Developed full-stack applications using MERN stack', 'Implemented CI/CD pipeline reducing deployment time by 60%', 'Collaborated with cross-functional teams of 10+ members']
        }
      ],
      education: [
        {
          degree: 'B.Tech in Computer Science',
          school: 'Indian Institute of Technology, Delhi',
          location: 'New Delhi',
          startDate: '2016',
          endDate: '2020',
          grade: '8.5',
          field: 'Computer Science & Engineering'
        }
      ],
      skills: {
        technical: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Python', 'Git'],
        soft: ['Leadership', 'Problem Solving', 'Communication', 'Team Collaboration', 'Agile Methodology']
      },
      projects: [
        {
          name: 'E-Commerce Platform',
          description: 'Built scalable e-commerce platform handling 50K+ daily transactions',
          technologies: ['React', 'Node.js', 'MongoDB', 'Redis'],
          url: 'github.com/priya/ecommerce'
        }
      ],
      certifications: [
        {
          name: 'AWS Certified Solutions Architect',
          issuer: 'Amazon Web Services',
          date: '2023',
          credentialId: 'AWS-SA-2023-1234'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 2,
    template: 'classic',
    name: 'Rahul Verma',
    profession: 'Marketing Manager',
    data: {
      personalInfo: {
        fullName: 'Rahul Verma',
        email: 'rahul.verma@email.com',
        phone: '+91 87654 32109',
        location: 'Delhi, NCR',
        linkedin: 'linkedin.com/in/rahulverma',
        portfolio: '',
        profileImage: '',
      },
      summary: 'Results-driven Marketing Manager with 6+ years of experience in digital marketing, brand strategy, and campaign management. Proven track record of increasing ROI by 150% through data-driven marketing initiatives.',
      experience: [
        {
          title: 'Marketing Manager',
          company: 'Brand Ventures Ltd',
          location: 'Gurgaon, Haryana',
          startDate: '2021-03',
          endDate: '',
          current: true,
          description: ['Managed marketing budget of ₹50 Lakhs annually', 'Increased brand awareness by 200% through social media campaigns', 'Led team of 8 marketing professionals']
        },
        {
          title: 'Digital Marketing Specialist',
          company: 'Creative Agency India',
          location: 'Delhi, NCR',
          startDate: '2018-07',
          endDate: '2021-02',
          current: false,
          description: ['Developed and executed digital marketing strategies', 'Achieved 180% increase in website traffic', 'Managed Google Ads campaigns with ₹20L monthly budget']
        }
      ],
      education: [
        {
          degree: 'MBA in Marketing',
          school: 'Faculty of Management Studies, Delhi University',
          location: 'New Delhi',
          startDate: '2016',
          endDate: '2018',
          grade: '8.2',
          field: 'Marketing Management'
        }
      ],
      skills: {
        technical: ['Google Analytics', 'SEO/SEM', 'Google Ads', 'Facebook Ads', 'Content Marketing', 'Email Marketing', 'HubSpot', 'Salesforce'],
        soft: ['Strategic Thinking', 'Leadership', 'Communication', 'Data Analysis', 'Project Management']
      },
      projects: [],
      certifications: [
        {
          name: 'Google Analytics Certification',
          issuer: 'Google',
          date: '2022',
          credentialId: 'GA-2022-5678'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 3,
    template: 'executive',
    name: 'Dr. Ananya Reddy',
    profession: 'Healthcare Administrator',
    data: {
      personalInfo: {
        fullName: 'Dr. Ananya Reddy',
        email: 'ananya.reddy@email.com',
        phone: '+91 99887 76655',
        location: 'Hyderabad, Telangana',
        linkedin: 'linkedin.com/in/ananyareddy',
        portfolio: '',
        profileImage: '',
      },
      summary: 'Accomplished Healthcare Administrator with 10+ years of experience managing multi-specialty hospitals. Expert in operational excellence, patient care optimization, and healthcare policy implementation.',
      experience: [
        {
          title: 'Chief Operating Officer',
          company: 'Apollo Hospitals',
          location: 'Hyderabad, Telangana',
          startDate: '2020-01',
          endDate: '',
          current: true,
          description: ['Oversee operations of 500-bed multi-specialty hospital', 'Improved patient satisfaction scores by 45%', 'Led digital transformation initiative saving ₹2 Crores annually']
        },
        {
          title: 'Hospital Administrator',
          company: 'Max Healthcare',
          location: 'Delhi, NCR',
          startDate: '2015-06',
          endDate: '2019-12',
          current: false,
          description: ['Managed daily operations of 300-bed facility', 'Implemented quality control systems achieving NABH accreditation', 'Reduced operational costs by 25% through process optimization']
        }
      ],
      education: [
        {
          degree: 'Master of Hospital Administration',
          school: 'All India Institute of Medical Sciences',
          location: 'New Delhi',
          startDate: '2013',
          endDate: '2015',
          grade: '9.0',
          field: 'Hospital Administration'
        }
      ],
      skills: {
        technical: ['Healthcare Management', 'NABH Standards', 'EMR Systems', 'Budget Planning', 'Quality Assurance', 'Healthcare Analytics'],
        soft: ['Leadership', 'Strategic Planning', 'Crisis Management', 'Communication', 'Team Building']
      },
      projects: [],
      certifications: [
        {
          name: 'Certified Healthcare Executive',
          issuer: 'American College of Healthcare Executives',
          date: '2021',
          credentialId: 'CHE-2021-9012'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 4,
    template: 'tech',
    name: 'Arjun Patel',
    profession: 'Data Scientist',
    data: {
      personalInfo: {
        fullName: 'Arjun Patel',
        email: 'arjun.patel@email.com',
        phone: '+91 91234 56789',
        location: 'Pune, Maharashtra',
        linkedin: 'linkedin.com/in/arjunpatel',
        portfolio: 'arjunpatel.ai',
        profileImage: '',
      },
      summary: 'Data Scientist with 5+ years of experience in machine learning, statistical analysis, and predictive modeling. Specialized in NLP and computer vision with proven track record of delivering business impact through AI solutions.',
      experience: [
        {
          title: 'Senior Data Scientist',
          company: 'AI Labs India',
          location: 'Pune, Maharashtra',
          startDate: '2021-08',
          endDate: '',
          current: true,
          description: ['Built ML models improving customer retention by 35%', 'Led data science team of 6 members', 'Developed NLP-based chatbot serving 100K+ monthly users']
        },
        {
          title: 'Data Scientist',
          company: 'Analytics Corp',
          location: 'Bangalore, Karnataka',
          startDate: '2019-01',
          endDate: '2021-07',
          current: false,
          description: ['Created predictive models with 92% accuracy', 'Analyzed datasets of 10M+ records', 'Presented insights to C-level executives']
        }
      ],
      education: [
        {
          degree: 'M.Tech in Data Science',
          school: 'Indian Institute of Science',
          location: 'Bangalore, Karnataka',
          startDate: '2017',
          endDate: '2019',
          grade: '8.8',
          field: 'Data Science & Engineering'
        }
      ],
      skills: {
        technical: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'SQL', 'Spark', 'Tableau', 'AWS SageMaker', 'NLP', 'Computer Vision'],
        soft: ['Analytical Thinking', 'Problem Solving', 'Communication', 'Research', 'Presentation']
      },
      projects: [
        {
          name: 'Sentiment Analysis Platform',
          description: 'Built real-time sentiment analysis system processing 1M+ tweets daily',
          technologies: ['Python', 'BERT', 'FastAPI', 'Docker'],
          url: 'github.com/arjun/sentiment-ai'
        }
      ],
      certifications: [
        {
          name: 'TensorFlow Developer Certificate',
          issuer: 'Google',
          date: '2022',
          credentialId: 'TF-2022-3456'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 5,
    template: 'creative',
    name: 'Meera Kapoor',
    profession: 'UI/UX Designer',
    data: {
      personalInfo: {
        fullName: 'Meera Kapoor',
        email: 'meera.kapoor@email.com',
        phone: '+91 98123 45678',
        location: 'Mumbai, Maharashtra',
        linkedin: 'linkedin.com/in/meerakapoor',
        portfolio: 'meerakapoor.design',
        profileImage: '',
      },
      summary: 'Creative UI/UX Designer with 5+ years of experience crafting intuitive digital experiences. Specialized in user research, wireframing, and prototyping. Passionate about designing accessible and beautiful interfaces.',
      experience: [
        {
          title: 'Lead UI/UX Designer',
          company: 'Design Studio Mumbai',
          location: 'Mumbai, Maharashtra',
          startDate: '2022-02',
          endDate: '',
          current: true,
          description: ['Led design for 15+ mobile and web applications', 'Increased user engagement by 60% through UX improvements', 'Managed design team of 4 designers']
        },
        {
          title: 'UI/UX Designer',
          company: 'Creative Labs',
          location: 'Pune, Maharashtra',
          startDate: '2019-06',
          endDate: '2022-01',
          current: false,
          description: ['Designed user interfaces for SaaS products', 'Conducted user research with 500+ participants', 'Created design systems used across 10+ products']
        }
      ],
      education: [
        {
          degree: 'Bachelor of Design',
          school: 'National Institute of Design',
          location: 'Ahmedabad, Gujarat',
          startDate: '2015',
          endDate: '2019',
          grade: '8.6',
          field: 'Interaction Design'
        }
      ],
      skills: {
        technical: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'HTML/CSS', 'Prototyping', 'User Research'],
        soft: ['Creativity', 'Empathy', 'Communication', 'Collaboration', 'Problem Solving']
      },
      projects: [
        {
          name: 'E-Learning App Redesign',
          description: 'Redesigned mobile app increasing user retention by 45%',
          technologies: ['Figma', 'User Research', 'A/B Testing'],
          url: 'behance.net/meera/elearning'
        }
      ],
      certifications: [
        {
          name: 'Google UX Design Professional Certificate',
          issuer: 'Google',
          date: '2021',
          credentialId: 'GUX-2021-7890'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 6,
    template: 'ats-standard',
    name: 'Vikram Singh',
    profession: 'Financial Analyst',
    data: {
      personalInfo: {
        fullName: 'Vikram Singh',
        email: 'vikram.singh@email.com',
        phone: '+91 97654 32108',
        location: 'Gurgaon, Haryana',
        linkedin: 'linkedin.com/in/vikramsingh',
        portfolio: '',
        profileImage: '',
      },
      summary: 'Detail-oriented Financial Analyst with 4+ years of experience in financial modeling, forecasting, and investment analysis. Proven ability to provide actionable insights driving business growth and profitability.',
      experience: [
        {
          title: 'Senior Financial Analyst',
          company: 'ICICI Bank',
          location: 'Gurgaon, Haryana',
          startDate: '2022-04',
          endDate: '',
          current: true,
          description: ['Developed financial models for investment portfolios worth ₹500 Crores', 'Improved forecasting accuracy by 30%', 'Prepared quarterly reports for senior management']
        },
        {
          title: 'Financial Analyst',
          company: 'HDFC Securities',
          location: 'Mumbai, Maharashtra',
          startDate: '2020-07',
          endDate: '2022-03',
          current: false,
          description: ['Analyzed financial statements and market trends', 'Supported M&A transactions worth ₹200 Crores', 'Created valuation models for equity research']
        }
      ],
      education: [
        {
          degree: 'MBA in Finance',
          school: 'Indian Institute of Management, Ahmedabad',
          location: 'Ahmedabad, Gujarat',
          startDate: '2018',
          endDate: '2020',
          grade: '8.4',
          field: 'Finance & Accounting'
        }
      ],
      skills: {
        technical: ['Financial Modeling', 'Excel', 'Bloomberg Terminal', 'SAP', 'Tableau', 'SQL', 'PowerBI', 'Valuation'],
        soft: ['Analytical Thinking', 'Attention to Detail', 'Communication', 'Time Management', 'Problem Solving']
      },
      projects: [],
      certifications: [
        {
          name: 'Chartered Financial Analyst (CFA) Level II',
          issuer: 'CFA Institute',
          date: '2023',
          credentialId: 'CFA-2023-4567'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 7,
    template: 'geometric',
    name: 'Sneha Iyer',
    profession: 'Product Manager',
    data: {
      personalInfo: {
        fullName: 'Sneha Iyer',
        email: 'sneha.iyer@email.com',
        phone: '+91 96543 21098',
        location: 'Bangalore, Karnataka',
        linkedin: 'linkedin.com/in/snehaiyer',
        portfolio: 'snehaiyer.com',
        profileImage: '',
      },
      summary: 'Strategic Product Manager with 6+ years of experience launching successful B2B and B2C products. Expert in product strategy, roadmap planning, and cross-functional team leadership. Passionate about building products users love.',
      experience: [
        {
          title: 'Senior Product Manager',
          company: 'Flipkart',
          location: 'Bangalore, Karnataka',
          startDate: '2021-05',
          endDate: '',
          current: true,
          description: ['Led product strategy for payments vertical serving 10M+ users', 'Launched 5 major features increasing transaction volume by 80%', 'Managed cross-functional teams of 20+ members']
        },
        {
          title: 'Product Manager',
          company: 'PayTM',
          location: 'Noida, Uttar Pradesh',
          startDate: '2018-08',
          endDate: '2021-04',
          current: false,
          description: ['Owned product roadmap for lending products', 'Increased user retention by 55% through feature optimization', 'Conducted user research with 1000+ customers']
        }
      ],
      education: [
        {
          degree: 'B.Tech in Computer Science',
          school: 'BITS Pilani',
          location: 'Pilani, Rajasthan',
          startDate: '2014',
          endDate: '2018',
          grade: '8.7',
          field: 'Computer Science'
        }
      ],
      skills: {
        technical: ['Product Strategy', 'Roadmap Planning', 'A/B Testing', 'SQL', 'JIRA', 'Agile/Scrum', 'Analytics', 'Wireframing'],
        soft: ['Leadership', 'Strategic Thinking', 'Communication', 'Stakeholder Management', 'Problem Solving']
      },
      projects: [],
      certifications: [
        {
          name: 'Certified Scrum Product Owner',
          issuer: 'Scrum Alliance',
          date: '2022',
          credentialId: 'CSPO-2022-8901'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 8,
    template: 'healthcare',
    name: 'Dr. Rohan Mehta',
    profession: 'General Physician',
    data: {
      personalInfo: {
        fullName: 'Dr. Rohan Mehta',
        email: 'rohan.mehta@email.com',
        phone: '+91 95432 10987',
        location: 'Chennai, Tamil Nadu',
        linkedin: 'linkedin.com/in/rohanmehta',
        portfolio: '',
        profileImage: '',
      },
      summary: 'Dedicated General Physician with 8+ years of clinical experience providing comprehensive primary care. Specialized in preventive medicine, chronic disease management, and patient-centered care.',
      experience: [
        {
          title: 'Senior Consultant - General Medicine',
          company: 'Fortis Hospitals',
          location: 'Chennai, Tamil Nadu',
          startDate: '2020-03',
          endDate: '',
          current: true,
          description: ['Provide primary care to 50+ patients daily', 'Manage chronic disease cases with 95% patient satisfaction', 'Lead health awareness programs reaching 5000+ people annually']
        },
        {
          title: 'Resident Doctor',
          company: 'Christian Medical College',
          location: 'Vellore, Tamil Nadu',
          startDate: '2016-07',
          endDate: '2020-02',
          current: false,
          description: ['Completed residency in General Medicine', 'Handled emergency cases in 24-hour shifts', 'Published 3 research papers in peer-reviewed journals']
        }
      ],
      education: [
        {
          degree: 'MD in General Medicine',
          school: 'Christian Medical College',
          location: 'Vellore, Tamil Nadu',
          startDate: '2013',
          endDate: '2016',
          grade: '85%',
          field: 'General Medicine'
        },
        {
          degree: 'MBBS',
          school: 'Madras Medical College',
          location: 'Chennai, Tamil Nadu',
          startDate: '2008',
          endDate: '2013',
          grade: '82%',
          field: 'Medicine and Surgery'
        }
      ],
      skills: {
        technical: ['Patient Care', 'Diagnosis', 'Treatment Planning', 'Emergency Medicine', 'Preventive Care', 'Medical Records'],
        soft: ['Empathy', 'Communication', 'Decision Making', 'Time Management', 'Patient Counseling']
      },
      projects: [],
      certifications: [
        {
          name: 'Basic Life Support (BLS)',
          issuer: 'American Heart Association',
          date: '2023',
          credentialId: 'BLS-2023-2345'
        }
      ],
      additionalInfo: [
        {
          category: 'Publication',
          title: 'Diabetes Management in Rural India',
          description: 'Published in Indian Journal of Medicine',
          date: '2022',
          url: ''
        }
      ]
    }
  },
  {
    id: 9,
    template: 'academic',
    name: 'Prof. Anjali Deshmukh',
    profession: 'Associate Professor',
    data: {
      personalInfo: {
        fullName: 'Prof. Anjali Deshmukh',
        email: 'anjali.deshmukh@email.com',
        phone: '+91 94321 09876',
        location: 'Pune, Maharashtra',
        linkedin: 'linkedin.com/in/anjalideshmukh',
        portfolio: 'anjalideshmukh.academia.edu',
        profileImage: '',
      },
      summary: 'Accomplished Academic with 12+ years of teaching and research experience in Computer Science. Published 25+ research papers in top-tier conferences and journals. Passionate about advancing AI research and mentoring students.',
      experience: [
        {
          title: 'Associate Professor',
          company: 'Savitribai Phule Pune University',
          location: 'Pune, Maharashtra',
          startDate: '2018-07',
          endDate: '',
          current: true,
          description: ['Teaching undergraduate and postgraduate courses in AI/ML', 'Supervised 15 PhD students and 50+ Masters students', 'Secured research grants worth ₹1.5 Crores']
        },
        {
          title: 'Assistant Professor',
          company: 'College of Engineering, Pune',
          location: 'Pune, Maharashtra',
          startDate: '2012-08',
          endDate: '2018-06',
          current: false,
          description: ['Taught core computer science courses', 'Published 18 research papers in international conferences', 'Organized 5 national-level workshops and conferences']
        }
      ],
      education: [
        {
          degree: 'PhD in Computer Science',
          school: 'Indian Institute of Technology, Bombay',
          location: 'Mumbai, Maharashtra',
          startDate: '2008',
          endDate: '2012',
          grade: '9.2',
          field: 'Artificial Intelligence'
        },
        {
          degree: 'M.Tech in Computer Science',
          school: 'Indian Institute of Technology, Bombay',
          location: 'Mumbai, Maharashtra',
          startDate: '2006',
          endDate: '2008',
          grade: '9.0',
          field: 'Computer Science'
        }
      ],
      skills: {
        technical: ['Machine Learning', 'Deep Learning', 'Research Methodology', 'Python', 'MATLAB', 'LaTeX', 'Academic Writing'],
        soft: ['Teaching', 'Research', 'Mentoring', 'Presentation', 'Critical Thinking']
      },
      projects: [],
      certifications: [],
      additionalInfo: [
        {
          category: 'Publication',
          title: 'Deep Learning for Medical Imaging',
          description: 'Published in IEEE Transactions on Medical Imaging (Impact Factor: 11.037)',
          date: '2023',
          url: 'doi.org/10.1109/TMI.2023.123456'
        },
        {
          category: 'Award',
          title: 'Best Paper Award',
          description: 'International Conference on Artificial Intelligence 2022',
          date: '2022',
          url: ''
        }
      ]
    }
  },
  {
    id: 10,
    template: 'pastel',
    name: 'Kavya Nair',
    profession: 'Content Writer',
    data: {
      personalInfo: {
        fullName: 'Kavya Nair',
        email: 'kavya.nair@email.com',
        phone: '+91 93210 98765',
        location: 'Kochi, Kerala',
        linkedin: 'linkedin.com/in/kavyanair',
        portfolio: 'kavyanair.medium.com',
        profileImage: '',
      },
      summary: 'Creative Content Writer with 4+ years of experience crafting compelling narratives for digital platforms. Specialized in SEO content, blogs, and social media. Passionate about storytelling that drives engagement and conversions.',
      experience: [
        {
          title: 'Senior Content Writer',
          company: 'Digital Content Hub',
          location: 'Kochi, Kerala',
          startDate: '2022-01',
          endDate: '',
          current: true,
          description: ['Write 20+ articles monthly generating 500K+ monthly views', 'Increased organic traffic by 120% through SEO optimization', 'Manage content strategy for 10+ clients']
        },
        {
          title: 'Content Writer',
          company: 'Media Solutions India',
          location: 'Bangalore, Karnataka',
          startDate: '2020-06',
          endDate: '2021-12',
          current: false,
          description: ['Produced engaging content for blogs and social media', 'Achieved 85% increase in social media engagement', 'Collaborated with design team on content campaigns']
        }
      ],
      education: [
        {
          degree: 'MA in English Literature',
          school: 'University of Kerala',
          location: 'Thiruvananthapuram, Kerala',
          startDate: '2018',
          endDate: '2020',
          grade: '8.5',
          field: 'English Literature'
        }
      ],
      skills: {
        technical: ['Content Writing', 'SEO', 'WordPress', 'Google Analytics', 'Copywriting', 'Social Media', 'Editing', 'Research'],
        soft: ['Creativity', 'Communication', 'Time Management', 'Adaptability', 'Research']
      },
      projects: [],
      certifications: [
        {
          name: 'Google Analytics Certification',
          issuer: 'Google',
          date: '2022',
          credentialId: 'GA-2022-6789'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 11,
    template: 'gradient',
    name: 'Aditya Gupta',
    profession: 'Business Analyst',
    data: {
      personalInfo: {
        fullName: 'Aditya Gupta',
        email: 'aditya.gupta@email.com',
        phone: '+91 92109 87654',
        location: 'Noida, Uttar Pradesh',
        linkedin: 'linkedin.com/in/adityagupta',
        portfolio: '',
        profileImage: '',
      },
      summary: 'Analytical Business Analyst with 5+ years of experience translating business requirements into technical solutions. Expert in process improvement, data analysis, and stakeholder management. Proven track record of delivering projects that drive business value.',
      experience: [
        {
          title: 'Senior Business Analyst',
          company: 'TCS',
          location: 'Noida, Uttar Pradesh',
          startDate: '2021-09',
          endDate: '',
          current: true,
          description: ['Lead requirements gathering for enterprise projects worth ₹10 Crores', 'Improved business processes reducing operational costs by 30%', 'Manage stakeholder relationships across 5 client organizations']
        },
        {
          title: 'Business Analyst',
          company: 'Infosys',
          location: 'Bangalore, Karnataka',
          startDate: '2019-07',
          endDate: '2021-08',
          current: false,
          description: ['Analyzed business processes and identified improvement opportunities', 'Created detailed business requirement documents for 15+ projects', 'Facilitated workshops with stakeholders across multiple departments']
        }
      ],
      education: [
        {
          degree: 'MBA in Information Systems',
          school: 'Symbiosis Institute of Business Management',
          location: 'Pune, Maharashtra',
          startDate: '2017',
          endDate: '2019',
          grade: '8.3',
          field: 'Information Systems'
        }
      ],
      skills: {
        technical: ['Business Analysis', 'SQL', 'Tableau', 'JIRA', 'Confluence', 'Process Mapping', 'Requirements Gathering', 'Agile'],
        soft: ['Analytical Thinking', 'Communication', 'Problem Solving', 'Stakeholder Management', 'Collaboration']
      },
      projects: [],
      certifications: [
        {
          name: 'Certified Business Analysis Professional (CBAP)',
          issuer: 'IIBA',
          date: '2022',
          credentialId: 'CBAP-2022-3456'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 12,
    template: 'typography',
    name: 'Neha Joshi',
    profession: 'HR Manager',
    data: {
      personalInfo: {
        fullName: 'Neha Joshi',
        email: 'neha.joshi@email.com',
        phone: '+91 91098 76543',
        location: 'Mumbai, Maharashtra',
        linkedin: 'linkedin.com/in/nehajoshi',
        portfolio: '',
        profileImage: '',
      },
      summary: 'Strategic HR Manager with 7+ years of experience in talent acquisition, employee engagement, and organizational development. Passionate about building high-performing teams and fostering positive workplace culture.',
      experience: [
        {
          title: 'HR Manager',
          company: 'Reliance Industries',
          location: 'Mumbai, Maharashtra',
          startDate: '2020-04',
          endDate: '',
          current: true,
          description: ['Manage HR operations for 500+ employees', 'Reduced employee turnover by 40% through retention initiatives', 'Led recruitment drives hiring 100+ employees annually']
        },
        {
          title: 'HR Executive',
          company: 'Aditya Birla Group',
          location: 'Mumbai, Maharashtra',
          startDate: '2017-08',
          endDate: '2020-03',
          current: false,
          description: ['Handled end-to-end recruitment for multiple departments', 'Implemented employee engagement programs increasing satisfaction by 50%', 'Managed payroll and benefits for 200+ employees']
        }
      ],
      education: [
        {
          degree: 'MBA in Human Resources',
          school: 'XLRI Jamshedpur',
          location: 'Jamshedpur, Jharkhand',
          startDate: '2015',
          endDate: '2017',
          grade: '8.6',
          field: 'Human Resource Management'
        }
      ],
      skills: {
        technical: ['Talent Acquisition', 'Employee Relations', 'Performance Management', 'HRIS', 'Payroll', 'Training & Development'],
        soft: ['Leadership', 'Communication', 'Conflict Resolution', 'Empathy', 'Negotiation']
      },
      projects: [],
      certifications: [
        {
          name: 'SHRM Certified Professional (SHRM-CP)',
          issuer: 'SHRM',
          date: '2021',
          credentialId: 'SHRM-2021-7890'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 13,
    template: 'split-column',
    name: 'Karan Malhotra',
    profession: 'Mechanical Engineer',
    data: {
      personalInfo: {
        fullName: 'Karan Malhotra',
        email: 'karan.malhotra@email.com',
        phone: '+91 90987 65432',
        location: 'Pune, Maharashtra',
        linkedin: 'linkedin.com/in/karanmalhotra',
        portfolio: '',
        profileImage: '',
      },
      summary: 'Results-driven Mechanical Engineer with 6+ years of experience in product design, manufacturing, and quality control. Expert in CAD/CAM software and lean manufacturing principles. Committed to optimizing processes and reducing costs.',
      experience: [
        {
          title: 'Senior Design Engineer',
          company: 'Tata Motors',
          location: 'Pune, Maharashtra',
          startDate: '2021-06',
          endDate: '',
          current: true,
          description: ['Lead design team for automotive component development', 'Reduced manufacturing costs by 25% through design optimization', 'Managed projects worth ₹5 Crores from concept to production']
        },
        {
          title: 'Design Engineer',
          company: 'Mahindra & Mahindra',
          location: 'Mumbai, Maharashtra',
          startDate: '2018-07',
          endDate: '2021-05',
          current: false,
          description: ['Designed mechanical components using SolidWorks and AutoCAD', 'Conducted FEA analysis ensuring design reliability', 'Collaborated with cross-functional teams of 15+ members']
        }
      ],
      education: [
        {
          degree: 'B.E. in Mechanical Engineering',
          school: 'College of Engineering, Pune',
          location: 'Pune, Maharashtra',
          startDate: '2014',
          endDate: '2018',
          grade: '8.4',
          field: 'Mechanical Engineering'
        }
      ],
      skills: {
        technical: ['SolidWorks', 'AutoCAD', 'CATIA', 'ANSYS', 'GD&T', 'Lean Manufacturing', 'Quality Control', '3D Printing'],
        soft: ['Problem Solving', 'Team Collaboration', 'Project Management', 'Attention to Detail', 'Innovation']
      },
      projects: [],
      certifications: [
        {
          name: 'Certified SolidWorks Professional',
          issuer: 'Dassault Systèmes',
          date: '2022',
          credentialId: 'CSWP-2022-4567'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 14,
    template: 'timeline',
    name: 'Simran Kaur',
    profession: 'Civil Engineer',
    data: {
      personalInfo: {
        fullName: 'Simran Kaur',
        email: 'simran.kaur@email.com',
        phone: '+91 89876 54321',
        location: 'Chandigarh, Punjab',
        linkedin: 'linkedin.com/in/simrankaur',
        portfolio: '',
        profileImage: '',
      },
      summary: 'Dedicated Civil Engineer with 5+ years of experience in infrastructure development, project management, and site supervision. Specialized in highway construction and structural design. Committed to delivering projects on time and within budget.',
      experience: [
        {
          title: 'Project Engineer',
          company: 'Larsen & Toubro',
          location: 'Chandigarh, Punjab',
          startDate: '2021-03',
          endDate: '',
          current: true,
          description: ['Manage highway construction projects worth ₹50 Crores', 'Supervise team of 50+ workers and contractors', 'Completed 3 major projects ahead of schedule']
        },
        {
          title: 'Site Engineer',
          company: 'Shapoorji Pallonji',
          location: 'Delhi, NCR',
          startDate: '2019-07',
          endDate: '2021-02',
          current: false,
          description: ['Supervised construction activities at residential projects', 'Ensured compliance with safety and quality standards', 'Coordinated with architects and contractors']
        }
      ],
      education: [
        {
          degree: 'B.Tech in Civil Engineering',
          school: 'Punjab Engineering College',
          location: 'Chandigarh, Punjab',
          startDate: '2015',
          endDate: '2019',
          grade: '8.2',
          field: 'Civil Engineering'
        }
      ],
      skills: {
        technical: ['AutoCAD', 'Primavera', 'MS Project', 'Structural Analysis', 'Estimation', 'Quality Control', 'Site Management'],
        soft: ['Leadership', 'Problem Solving', 'Communication', 'Time Management', 'Team Management']
      },
      projects: [],
      certifications: [
        {
          name: 'PMP Certification',
          issuer: 'Project Management Institute',
          date: '2022',
          credentialId: 'PMP-2022-8901'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 15,
    template: 'card',
    name: 'Ravi Kumar',
    profession: 'Sales Executive',
    data: {
      personalInfo: {
        fullName: 'Ravi Kumar',
        email: 'ravi.kumar@email.com',
        phone: '+91 88765 43210',
        location: 'Hyderabad, Telangana',
        linkedin: 'linkedin.com/in/ravikumar',
        portfolio: '',
        profileImage: '',
      },
      summary: 'Dynamic Sales Executive with 4+ years of experience in B2B sales, client relationship management, and revenue generation. Proven track record of exceeding sales targets by 150%. Passionate about building long-term client partnerships.',
      experience: [
        {
          title: 'Senior Sales Executive',
          company: 'Oracle India',
          location: 'Hyderabad, Telangana',
          startDate: '2022-02',
          endDate: '',
          current: true,
          description: ['Generated ₹10 Crores in annual revenue', 'Exceeded quarterly sales targets by average of 130%', 'Managed portfolio of 50+ enterprise clients']
        },
        {
          title: 'Sales Executive',
          company: 'Microsoft India',
          location: 'Bangalore, Karnataka',
          startDate: '2020-06',
          endDate: '2022-01',
          current: false,
          description: ['Closed deals worth ₹3 Crores annually', 'Built relationships with C-level executives', 'Achieved 120% of annual sales quota']
        }
      ],
      education: [
        {
          degree: 'BBA in Marketing',
          school: 'Christ University',
          location: 'Bangalore, Karnataka',
          startDate: '2016',
          endDate: '2020',
          grade: '8.0',
          field: 'Marketing and Sales'
        }
      ],
      skills: {
        technical: ['Salesforce', 'CRM', 'Lead Generation', 'Contract Negotiation', 'Sales Forecasting', 'Market Research'],
        soft: ['Communication', 'Persuasion', 'Relationship Building', 'Negotiation', 'Presentation']
      },
      projects: [],
      certifications: [
        {
          name: 'Salesforce Certified Sales Cloud Consultant',
          issuer: 'Salesforce',
          date: '2023',
          credentialId: 'SF-2023-1234'
        }
      ],
      additionalInfo: []
    }
  },
  {
    id: 16,
    template: 'compact',
    name: 'Pooja Menon',
    profession: 'Customer Support Specialist',
    data: {
      personalInfo: {
        fullName: 'Pooja Menon',
        email: 'pooja.menon@email.com',
        phone: '+91 87654 32109',
        location: 'Kochi, Kerala',
        linkedin: 'linkedin.com/in/poojamenon',
        portfolio: '',
        profileImage: '',
      },
      summary: 'Customer-focused Support Specialist with 3+ years of experience delivering exceptional service. Expert in troubleshooting, ticket management, and customer satisfaction. Passionate about solving problems and building positive customer relationships.',
      experience: [
        {
          title: 'Senior Customer Support Specialist',
          company: 'Amazon India',
          location: 'Kochi, Kerala',
          startDate: '2022-08',
          endDate: '',
          current: true,
          description: ['Resolve 100+ customer queries daily with 98% satisfaction rate', 'Reduced average resolution time by 35%', 'Train and mentor team of 5 junior support staff']
        },
        {
          title: 'Customer Support Representative',
          company: 'Zoho Corporation',
          location: 'Chennai, Tamil Nadu',
          startDate: '2021-06',
          endDate: '2022-07',
          current: false,
          description: ['Handled customer inquiries via phone, email, and chat', 'Achieved 95% customer satisfaction score', 'Documented common issues for knowledge base']
        }
      ],
      education: [
        {
          degree: 'Bachelor of Commerce',
          school: 'Cochin University of Science and Technology',
          location: 'Kochi, Kerala',
          startDate: '2017',
          endDate: '2021',
          grade: '7.8',
          field: 'Commerce'
        }
      ],
      skills: {
        technical: ['Zendesk', 'Freshdesk', 'Salesforce', 'CRM', 'Ticketing Systems', 'Live Chat Support'],
        soft: ['Communication', 'Empathy', 'Problem Solving', 'Patience', 'Active Listening']
      },
      projects: [],
      certifications: [
        {
          name: 'Zendesk Support Administrator',
          issuer: 'Zendesk',
          date: '2023',
          credentialId: 'ZD-2023-5678'
        }
      ],
      additionalInfo: [
        {
          category: 'Language',
          title: 'Malayalam - Native',
          description: 'Fluent in Malayalam, English, and Hindi',
          date: '',
          url: ''
        }
      ]
    }
  },
  {
    id: 17,
    template: 'visual-skills',
    name: 'Amit Shah',
    profession: 'DevOps Engineer',
    data: {
      personalInfo: {
        fullName: 'Amit Shah',
        email: 'amit.shah@email.com',
        phone: '+91 86543 21098',
        location: 'Ahmedabad, Gujarat',
        linkedin: 'linkedin.com/in/amitshah',
        portfolio: 'amitshah.dev',
        profileImage: '',
      },
      summary: 'DevOps Engineer with 5+ years of experience in cloud infrastructure, CI/CD pipelines, and automation. Expert in AWS, Docker, Kubernetes, and infrastructure as code. Passionate about optimizing deployment processes and system reliability.',
      experience: [
        {
          title: 'Senior DevOps Engineer',
          company: 'Zomato',
          location: 'Bangalore, Karnataka',
          startDate: '2021-10',
          endDate: '',
          current: true,
          description: ['Manage AWS infrastructure serving 10M+ users', 'Reduced deployment time by 70% through CI/CD automation', 'Implemented monitoring solutions reducing downtime by 85%']
        },
        {
          title: 'DevOps Engineer',
          company: 'OYO Rooms',
          location: 'Gurgaon, Haryana',
          startDate: '2019-08',
          endDate: '2021-09',
          current: false,
          description: ['Built and maintained CI/CD pipelines using Jenkins', 'Automated infrastructure provisioning with Terraform', 'Managed Kubernetes clusters for microservices']
        }
      ],
      education: [
        {
          degree: 'B.Tech in Information Technology',
          school: 'Nirma University',
          location: 'Ahmedabad, Gujarat',
          startDate: '2015',
          endDate: '2019',
          grade: '8.5',
          field: 'Information Technology'
        }
      ],
      skills: {
        technical: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'Python', 'Shell Scripting', 'Git', 'Prometheus'],
        soft: ['Problem Solving', 'Automation', 'Communication', 'Team Collaboration', 'Critical Thinking']
      },
      projects: [
        {
          name: 'Infrastructure Automation Platform',
          description: 'Built platform automating infrastructure provisioning reducing setup time by 80%',
          technologies: ['Terraform', 'AWS', 'Python', 'Docker'],
          url: 'github.com/amit/infra-automation'
        }
      ],
      certifications: [
        {
          name: 'AWS Certified Solutions Architect',
          issuer: 'Amazon Web Services',
          date: '2022',
          credentialId: 'AWS-SA-2022-9012'
        },
        {
          name: 'Certified Kubernetes Administrator',
          issuer: 'CNCF',
          date: '2023',
          credentialId: 'CKA-2023-3456'
        }
      ],
      additionalInfo: []
    }
  }
];

// Template info for display
export const templateInfo = {
  'modern': { name: 'Modern Professional', category: 'Clean & Professional', color: 'bg-blue-500' },
  'classic': { name: 'Classic Elegance', category: 'ATS Optimized', color: 'bg-gray-700' },
  'executive': { name: 'Executive', category: 'Clean & Professional', color: 'bg-purple-600' },
  'tech': { name: 'Tech Minimalist', category: 'Modern & Artsy', color: 'bg-green-600' },
  'creative': { name: 'Creative Bold', category: 'Modern & Artsy', color: 'bg-pink-500' },
  'ats-standard': { name: 'ATS Standard', category: 'ATS Optimized', color: 'bg-indigo-600' },
  'geometric': { name: 'Geometric Edge', category: 'Modern & Artsy', color: 'bg-teal-600' },
  'healthcare': { name: 'Healthcare Pro', category: 'Industry Specific', color: 'bg-blue-400' },
  'academic': { name: 'Academic Scholar', category: 'Industry Specific', color: 'bg-amber-600' },
  'pastel': { name: 'Pastel Dreams', category: 'Aesthetic', color: 'bg-rose-300' },
  'gradient': { name: 'Gradient Flow', category: 'Aesthetic', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  'typography': { name: 'Typography Focus', category: 'Clean & Professional', color: 'bg-slate-800' },
  'split-column': { name: 'Split Column', category: 'Modern & Artsy', color: 'bg-cyan-600' },
  'timeline': { name: 'Timeline Journey', category: 'Creative', color: 'bg-orange-500' },
  'card': { name: 'Card Layout', category: 'Modern & Artsy', color: 'bg-violet-600' },
  'compact': { name: 'Compact Pro', category: 'ATS Optimized', color: 'bg-emerald-600' },
  'visual-skills': { name: 'Visual Skills', category: 'Modern & Artsy', color: 'bg-fuchsia-600' },
};

// Get resume by template name
export const getResumeByTemplate = (templateName) => {
  return sampleResumes.find(resume => resume.template === templateName);
};

// Get all resumes for showcase
export const getAllSampleResumes = () => {
  return sampleResumes;
};

