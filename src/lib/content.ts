import data from '../content/content.json';

export type Profile = {
  name: string;
  headline: string;
  location: string;
  pronouns: string;
  currentRole: string;
  education: string;
  connections: number;
  followers: number;
  avatar: string;
  banner: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  about: string;
  openTo: string[];
};

export type Post = {
  id: string;
  timeAgo: string;
  visibility: string;
  body: string;
  media:
    | null
    | { kind: 'image'; ratio: string; label: string }
    | { kind: 'article'; title: string; domain: string; subtitle: string }
    | { kind: 'video'; provider: 'youtube'; id: string; title: string };
  likes: number;
  comments: number;
  reposts: number;
};

export type LinkItem = { label: string; subtitle: string; url: string };

export type Experience = {
  role: string;
  company: string;
  logo: string;
  type: string;
  dates: string;
  location: string;
  summary: string;
  skills: string[];
};

export type Project = {
  name: string;
  dates: string;
  summary: string;
  link: string;
  skills: string[];
};

export type Education = {
  school: string;
  degree: string;
  dates: string;
  summary: string;
};

export type Skill = { name: string; endorsements: number };

export type Person = {
  name: string;
  subtitle: string;
  url: string;
  initial: string;
  avatar: string;
};

export const content = data as {
  profile: Profile;
  posts: Post[];
  links: { title: string; subtitle: string; items: LinkItem[] };
  today: { title: string; items: { icon: string; label: string; subtitle: string }[] };
  people: Person[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skill[];
};
