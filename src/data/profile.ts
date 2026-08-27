export type SocialLink = {
  label: string
  href: string
  kind: 'github' | 'linkedin'
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
  role: 'Back-end developer',
  location: 'Chennai',
  headline: 'Back-end developer building practical web applications.',
  summary:
    'Rohit works with Python, Django, Django REST Framework, Flask, JavaScript, and CSS. This portfolio keeps the current public content focused and easy to update as newer projects are added.',
  image: {
    src: '/assets/rohit-profile.webp',
    alt: 'Portrait of Rohit J',
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
  ] satisfies SocialLink[],
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    skills: ['Python', 'Django', 'Django REST Framework', 'Flask'],
  },
  {
    title: 'Frontend',
    skills: ['JavaScript', 'CSS'],
  },
]

export const focusAreas: FocusArea[] = [
  {
    title: 'Backend-first web apps',
    description:
      'Server-rendered and API-backed projects shaped around practical workflows.',
  },
  {
    title: 'Django and REST APIs',
    description:
      'Project work centered on Django, DRF, authentication flows, and application data models.',
  },
  {
    title: 'Clean project handoff',
    description:
      'A simple portfolio structure with editable data so projects can be replaced without touching layout code.',
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
