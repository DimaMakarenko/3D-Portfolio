export type Direction = 'left' | 'up' | 'right' | 'down'

export type Service = {
  icon: string,
  title: string
}

export type Experience = {
  title: string,
  company_name: string,
  icon: string,
  iconBg: string,
  date: string,
  points: string[]
}

export type Technologies = {
  name: string;
  icon: string;
}

export type Project = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}
