export interface IExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  skills: string[];
}

export interface IEducation {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface ISkill {
  id: string;
  name: string;
  level: number; // 1-5
  category: string;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  image?: string;
}

export interface IBurndownPoint {
  date: string;
  planned: number;
  actual: number;
}

export interface IProfileData {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
  avatar?: string;
}

export interface IResumeData {
  profile: IProfileData;
  experiences: IExperience[];
  educations: IEducation[];
  skills: ISkill[];
  projects: IProject[];
  burndownPoints: IBurndownPoint[];
}
