import { IResumeData } from '@/src/domain/entities/resume';

export const mockResumeData: IResumeData = {
  profile: {
    name: 'Alex Morgan',
    title: 'Senior Software Engineer',
    summary:
      'Experienced software engineer with 8+ years building scalable web applications and leading development teams. Specialized in frontend architecture, performance optimization, and mentoring junior developers.',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexmorgan',
    github: 'github.com/alexmorgan',
    website: 'alexmorgan.dev',
    avatar:
      'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  experiences: [
    {
      id: 'exp1',
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      startDate: '2020-03',
      endDate: null,
      description: [
        'Led the frontend development team of 5 engineers, implementing best practices and improving code quality across projects.',
        'Architected and built a new React-based design system that reduced development time by 40% and improved consistency across products.',
        'Optimized application performance, reducing load times by 65% and improving user engagement metrics by 25%.',
        'Mentored junior developers through pair programming sessions and code reviews, improving team knowledge sharing.',
      ],
      skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'Performance Optimization'],
    },
    {
      id: 'exp2',
      title: 'Frontend Developer',
      company: 'WebSolutions LLC',
      location: 'Portland, OR',
      startDate: '2017-06',
      endDate: '2020-02',
      description: [
        'Developed responsive web applications using React and Redux for various clients in e-commerce and fintech sectors.',
        'Implemented CI/CD pipelines that reduced deployment times by 70% and improved release reliability.',
        'Collaborated with UX designers to implement accessible user interfaces following WCAG guidelines.',
        'Reduced bundle sizes by 45% through code splitting and lazy loading strategies.',
      ],
      skills: ['JavaScript', 'React', 'CSS/SCSS', 'Webpack', 'Accessibility'],
    },
    {
      id: 'exp3',
      title: 'Junior Web Developer',
      company: 'Digital Creations',
      location: 'Seattle, WA',
      startDate: '2015-08',
      endDate: '2017-05',
      description: [
        'Built and maintained client websites using JavaScript, HTML5, and CSS3.',
        'Developed custom WordPress themes and plugins for small business clients.',
        'Improved site performance through image optimization and caching strategies.',
        'Participated in daily stand-ups and sprint planning in an Agile work environment.',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
    },
  ],
  educations: [
    {
      id: 'edu1',
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      startDate: '2013-09',
      endDate: '2015-06',
      description:
        'Focused on web technologies and distributed systems. Thesis on performance optimization techniques for JavaScript applications.',
    },
    {
      id: 'edu2',
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'University of Washington',
      location: 'Seattle, WA',
      startDate: '2009-09',
      endDate: '2013-06',
      description:
        'Graduated with honors. Active member of the web development club and hackathon participant.',
    },
  ],
  skills: [
    { id: 's1', name: 'JavaScript', level: 5, category: 'Frontend' },
    { id: 's2', name: 'TypeScript', level: 5, category: 'Frontend' },
    { id: 's3', name: 'React', level: 5, category: 'Frontend' },
    { id: 's4', name: 'Next.js', level: 4, category: 'Frontend' },
    { id: 's5', name: 'CSS/SCSS', level: 4, category: 'Frontend' },
    { id: 's6', name: 'HTML5', level: 5, category: 'Frontend' },
    { id: 's7', name: 'Node.js', level: 4, category: 'Backend' },
    { id: 's8', name: 'Express', level: 3, category: 'Backend' },
    { id: 's9', name: 'MongoDB', level: 3, category: 'Backend' },
    { id: 's10', name: 'PostgreSQL', level: 3, category: 'Backend' },
    { id: 's11', name: 'Git', level: 4, category: 'Tools' },
    { id: 's12', name: 'Docker', level: 3, category: 'Tools' },
    { id: 's13', name: 'CI/CD', level: 4, category: 'Tools' },
    { id: 's14', name: 'Agile/Scrum', level: 4, category: 'Methodology' },
    {
      id: 's15',
      name: 'Performance Optimization',
      level: 5,
      category: 'Specialty',
    },
  ],
  projects: [
    {
      id: 'p1',
      title: 'E-commerce Platform Redesign',
      description:
        'Completely redesigned and rebuilt the frontend of a major e-commerce platform, improving conversion rates by 35%.',
      technologies: ['React', 'Redux', 'Styled Components', 'Next.js'],
      url: 'https://example.com/ecommerce',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'p2',
      title: 'Banking Dashboard',
      description:
        'Created an interactive dashboard for a fintech company that visualizes financial data and transactions in real-time.',
      technologies: ['React', 'D3.js', 'TypeScript', 'WebSockets'],
      url: 'https://example.com/banking',
      image:
        'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'p3',
      title: 'Content Management System',
      description:
        'Built a custom CMS for a publishing company that improved content creation workflow efficiency by 50%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      url: 'https://example.com/cms',
      image:
        'https://images.pexels.com/photos/4960464/pexels-photo-4960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ],
  burndownPoints: [
    { date: '2023-01-15', planned: 120, actual: 115 },
    { date: '2023-02-15', planned: 100, actual: 90 },
    { date: '2023-03-15', planned: 80, actual: 75 },
    { date: '2023-04-15', planned: 60, actual: 50 },
    { date: '2023-05-15', planned: 40, actual: 30 },
    { date: '2023-06-15', planned: 20, actual: 10 },
    { date: '2023-07-15', planned: 0, actual: 0 },
  ],
};

// For client-side storage
export const storeResumeData = (data: IResumeData) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('resumeData', JSON.stringify(data));
  }
};

export const getStoredResumeData = (): IResumeData | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('resumeData');
    return data ? JSON.parse(data) : null;
  }
  return null;
};

// Admin authentication (simple token-based auth for POC)
export const ADMIN_TOKEN = 'resume-admin-token-2023';

export const isValidAdminToken = (token: string) => {
  return token === ADMIN_TOKEN;
};

export const storeAdminToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminToken', token);
  }
};

export const getStoredAdminToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('adminToken');
  }
  return null;
};

export const clearAdminToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminToken');
  }
};
