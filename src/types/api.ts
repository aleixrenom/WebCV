export interface CvData {
  name: string;
  photoLink: string;
  introduction: string;
  skills: string[];
  languages: Language[];
  education: Education[];
  workExperience: WorkExperience[];
  otherExperience: OtherExperience[];
}

interface Education {
  institution: string;
  years: string;
  degree: string;
  description?: string;
}

interface WorkExperience {
  company: string;
  years: string;
  position: string;
  description?: string;
  responsibilities?: string[];
}

interface OtherExperience {
  volunteerWork: VolunteerWork[];
  ownProjects: OwnProject[];
}

interface VolunteerWork {
  title: string;
  year: string;
  description?: string;
  takeaways?: string[];
}

interface OwnProject {
  title: string;
  year: string;
  description?: string;
  takeaways?: string[];
  link?: string;
}

interface Language {
  language: string;
  proficiency: string;
}
