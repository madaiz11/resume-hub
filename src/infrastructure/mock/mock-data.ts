import { ResumeType } from "@/src/domain/resume/entities";
import { DegreeLevelEnum, SkillCategoryEnum, SkillLevelEnum } from "@/src/domain/resume/enums";

  export const mockResumeData: ResumeType = {
  profile: {
    name: "Alex Morgan",
    title: "Senior Software Engineer",
    summary:
      "Experienced software engineer with 8+ years building scalable web applications and leading development teams. Specialized in frontend architecture, performance optimization, and mentoring junior developers.",
    email: "alex.morgan@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexmorgan",
    github: "github.com/alexmorgan",
    website: "alexmorgan.dev",
    avatar:
      "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  experiences: [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      startDate: "2020-03",
      description: [
        "Led the frontend development team of 5 engineers, implementing best practices and improving code quality across projects.",
        "Architected and built a new React-based design system that reduced development time by 40% and improved consistency across products.",
        "Optimized application performance, reducing load times by 65% and improving user engagement metrics by 25%.",
        "Mentored junior developers through pair programming sessions and code reviews, improving team knowledge sharing.",
      ],
      skills: [
        { name: "React", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "TypeScript", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "Next.js", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "Redux", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "Performance Optimization", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.SPECIALITIES },
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions LLC",
      location: "Portland, OR",
      startDate: "2017-06",
      endDate: "2020-02",
      description: [
        "Developed responsive web applications using React and Redux for various clients in e-commerce and fintech sectors.",
        "Implemented CI/CD pipelines that reduced deployment times by 70% and improved release reliability.",
        "Collaborated with UX designers to implement accessible user interfaces following WCAG guidelines.",
        "Reduced bundle sizes by 45% through code splitting and lazy loading strategies.",
      ],
      skills: [
        { name: "JavaScript", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "React", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "CSS/SCSS", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "Webpack", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "Accessibility", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.SPECIALITIES },
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Creations",
      location: "Seattle, WA",
      startDate: "2015-08",
      endDate: "2017-05",
      description: [
        "Built and maintained client websites using JavaScript, HTML5, and CSS3.",
        "Developed custom WordPress themes and plugins for small business clients.",
        "Improved site performance through image optimization and caching strategies.",
        "Participated in daily stand-ups and sprint planning in an Agile work environment.",
      ],
      skills: [
        { name: "HTML", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "CSS", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "JavaScript", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
        { name: "WordPress", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.BACKEND },
        { name: "PHP", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.BACKEND },
      ],
    },
  ],
  educations: [
    {
      degree: DegreeLevelEnum.BACHELORS,
      institution: "Stanford University",
      location: "Stanford, CA",
      startDate: "2013-09",
      endDate: "2015-06",
      description:
        "Focused on web technologies and distributed systems. Thesis on performance optimization techniques for JavaScript applications.",
    },
    {
      degree: DegreeLevelEnum.BACHELORS,
      institution: "University of Washington",
      location: "Seattle, WA",
      startDate: "2009-09",
      endDate: "2013-06",
      description:
        "Graduated with honors. Active member of the web development club and hackathon participant.",
    },
  ],
  skills: [
    { name: "JavaScript", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
    { name: "TypeScript", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
    { name: "React", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
    { name: "Next.js", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
    { name: "CSS/SCSS", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
    { name: "HTML5", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.FRONTEND },
    { name: "Node.js", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.BACKEND },
    { name: "Express", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.BACKEND },
    { name: "MongoDB", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.BACKEND },
    { name: "PostgreSQL", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.BACKEND },
    { name: "Git", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.TOOLS },
    { name: "Docker", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.TOOLS },
    { name: "CI/CD", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.TOOLS },
    { name: "Agile/Scrum", level: SkillLevelEnum.EXPERT, category: SkillCategoryEnum.TOOLS },
    {
      name: "Performance Optimization",
      level: SkillLevelEnum.EXPERT,
      category: SkillCategoryEnum.SPECIALITIES,
    },
  ],
  projects: [
    {
      title: "E-commerce Platform Redesign",
      description:
        "Completely redesigned and rebuilt the frontend of a major e-commerce platform, improving conversion rates by 35%.",
      technologies: ["React", "Redux", "Styled Components", "Next.js"],
      url: "https://example.com/ecommerce",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Banking Dashboard",
      description:
        "Created an interactive dashboard for a fintech company that visualizes financial data and transactions in real-time.",
      technologies: ["React", "D3.js", "TypeScript", "WebSockets"],
      url: "https://example.com/banking",
      image:
        "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Content Management System",
      description:
        "Built a custom CMS for a publishing company that improved content creation workflow efficiency by 50%.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      url: "https://example.com/cms",
      image:
        "https://images.pexels.com/photos/4960464/pexels-photo-4960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
};
