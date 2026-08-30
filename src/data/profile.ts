export type SocialLink = {
  label: string
  href: string
  kind: 'github' | 'linkedin' | 'email'
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type Project = {
  title: string
  repositoryName: string
  description: string
  tags: string[]
  sourceUrl?: string
  status: 'verified' | 'needs-review'
}

export type FocusArea = {
  title: string
  description: string
}

export const profile = {
  name: 'Rohit J',
  role: 'Software engineer',
  location: 'Chennai',
  headline:
    'Software engineer building backend systems, full-stack products, and agent-powered workflows.',
  summary:
    'Backend systems, full-stack products, and agent-powered workflows, built mostly with Python, Django, FastAPI, React, and TypeScript.',
  image: {
    src: '/assets/rohit-profile.webp',
    alt: 'Portrait of Rohit J',
  },
  aboutImage: {
    src: '/assets/rohit-kedar.webp',
    alt: 'Rohit J standing on a mountain summit above a layer of cloud',
  },
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/Rohit10jr',
      kind: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rohit-j/',
      kind: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:rohitjworkspace@gmail.com',
      kind: 'email',
    },
  ] satisfies SocialLink[],
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    skills: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'Flask'],
  },
  {
    title: 'Frontend',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Bootstrap',
      'Sass',
    ],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Tooling',
    skills: ['Git'],
  },
]

export const focusAreas: FocusArea[] = [
  {
    title: 'Backend-first web apps',
    description:
      'Django and API-backed projects shaped around practical workflows.',
  },
  {
    title: 'Django and REST APIs',
    description:
      'Project work centered on Django, DRF, and application data models.',
  },
  {
    title: 'Simple web interfaces',
    description:
      'JavaScript and CSS interfaces that keep project workflows understandable.',
  },
]

// These are provisional entries from the previous static site. Replace them
// when Rohit provides newer project selections, live URLs, or stronger copy.
export const projects: Project[] = [
  {
    title: 'Fullchat',
    repositoryName: 'fullchat',
    description:
      'A real-time chat app built with Django and WebSockets for live communication between users.',
    tags: ['Python', 'Django', 'WebSockets'],
    sourceUrl: 'https://github.com/Rohit10jr/fullchat',
    status: 'verified',
  },
  {
    title: 'School Management System',
    repositoryName: 'school-management-system',
    description:
      'Legacy school-management placeholder from the previous portfolio. The old source URL needs owner review before it is linked again.',
    tags: ['Django', 'DRF', 'JavaScript'],
    status: 'needs-review',
  },
  {
    title: 'Ecommerce Site',
    repositoryName: 'Ecommerce-site',
    description:
      'A Django e-commerce project for an online shopping platform.',
    tags: ['Python', 'Django', 'JavaScript'],
    sourceUrl: 'https://github.com/Rohit10jr/Ecommerce-site',
    status: 'verified',
  },
  {
    title: 'iCoder Blog',
    repositoryName: 'icoder-blog',
    description: 'A blog application developed with Django.',
    tags: ['Python', 'Django', 'JavaScript'],
    sourceUrl: 'https://github.com/Rohit10jr/icoder-blog',
    status: 'verified',
  },
  {
    title: 'Chatrooms',
    repositoryName: 'chatrooms',
    description:
      'Legacy chat-room placeholder from the previous portfolio. The old source URL needs owner review before it is linked again.',
    tags: ['Python', 'Django', 'CSS'],
    status: 'needs-review',
  },
]
