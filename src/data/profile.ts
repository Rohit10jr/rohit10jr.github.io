export type SocialLink = {
  label: string
  href: string
  kind: 'github' | 'linkedin' | 'twitter' | 'email'
}

export type Project = {
  title: string
  description: string
  /** Short right-hand label, e.g. "Django · PostgreSQL". */
  meta: string
  url?: string
  /** Placeholder entries are marked in the UI until the work is public. */
  placeholder?: boolean
}

export const profile = {
  name: 'Rohit J',
  role: 'Software engineer',
  location: 'India',
  /* The headline is split because it carries markup rather than being one
     string: "build" takes the drawn underline, and the closing phrase is set
     in the accent. Keeping the pieces here still beats leaving the sentence in
     the component, which is where it disagreed with this file for weeks. */
  hero: {
    headlineLead: 'I',
    headlineUnderlined: 'build',
    headlineRest: 'products end to end',
    headlineTail: 'that',
    headlineAccent: 'hold up.',
    summary:
      'Software engineer, exploring and building full-stack products and agent systems to understand them.',
    summaryLink: 'Say hello.',
  },
  sayHello: {
    lead: 'Say',
    accent: 'hello.',
    availability: 'Open to full-stack and agent-related work.',
  },
  aboutImage: {
    src: '/assets/rohit-kedar.webp',
    alt: 'Rohit J at the Kedarkantha summit, above a layer of cloud',
  },
  about: {
    paragraphs: [
      'I am a software engineer in India, building full-stack products, backend systems, and agent-powered workflows.',
      'Mostly I am chasing the forefront of technology and AI. I build things to understand them, and the exploring is the point.',
      'Most of my work is Python, with React and TypeScript on top. Lately that has meant going deeper on scalable backend architecture, cloud infrastructure, and agent-based systems.',
      'Progress beats perfection. I would rather ship a clear increment, take the feedback, and improve from there.',
      'Away from the keyboard it is usually the gym, a long walk, a book or a film. That photo is from the Kedarkantha summit.',
    ],
    githubActivity: {
      chartSrc: 'https://ghchart.rshah.org/Rohit10jr',
      chartAlt: 'Rohit10jr GitHub contribution activity chart',
      body: 'I build what I am curious about and leave the source code open.',
      linkLabel: 'Follow me on GitHub',
      linkHref: 'https://github.com/Rohit10jr',
      linkTail: 'to catch new projects as they land.',
    },
    connect: {
      title: 'Stay connected',
      body: 'If you’d like to connect or have questions about my work, feel free to reach out through any of the links below.',
    },
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
      label: 'X',
      href: 'https://x.com/imrohit_jr',
      kind: 'twitter',
    },
    {
      label: 'Email',
      href: 'mailto:rohitjworkspace@gmail.com',
      kind: 'email',
    },
  ] satisfies SocialLink[],
}

export type OpenSourceProject = {
  name: string
  url: string
}

/**
 * Upstream projects with merged work. Links point at the repository, not at a
 * fork here and not at individual pull requests — the section says where the
 * work landed, and GitHub's own activity page carries the detail.
 */
export const openSource = {
  projects: [
    { name: 'Django', url: 'https://github.com/django/django' },
    {
      name: 'Django REST Framework',
      url: 'https://github.com/encode/django-rest-framework',
    },
    { name: 'Django-CRM', url: 'https://github.com/Django-CRM/Django-CRM' },
    { name: 'RAGFlow', url: 'https://github.com/infiniflow/ragflow' },
    { name: "Google's ADK docs", url: 'https://github.com/google/adk-docs' },
  ] satisfies OpenSourceProject[],
  activityUrl: 'https://github.com/Rohit10jr',
}

// mailto: links open the mail client, not a new tab, and get no external marker.
export function isExternalLink(href: string): boolean {
  return !href.startsWith('mailto:')
}

// These are provisional entries from the previous static site. Replace them
// when Rohit provides newer project selections, live URLs, or stronger copy.
// Placeholder set drawn from work in progress. Replace url/placeholder as
// each repository becomes public.
export const projects: Project[] = [
  {
    title: 'OpenCRM',
    description:
      'Open-source CRM on Django REST Framework and SvelteKit. Multi-tenancy through PostgreSQL row-level security, JWT auth, and a REST surface across leads, accounts, opportunities and invoices.',
    meta: 'Django REST · PostgreSQL · SvelteKit',
    placeholder: true,
  },
  {
    title: 'NanoBot',
    description:
      'Ultra-light agent framework with tool execution, memory, multi-channel chat and support for several LLM providers.',
    meta: 'Python · Agents · MCP',
    placeholder: true,
  },
  {
    title: 'DataLine',
    description:
      'Connects to CSV, Excel, SQLite, PostgreSQL, MySQL and Snowflake, turns plain questions into SQL, runs it, and charts the result.',
    meta: 'FastAPI · React · SQL',
    placeholder: true,
  },
  {
    title: 'AgentSEO',
    description:
      'Self-hostable tool that plans SEO content and drafts posts, built to deploy in one command.',
    meta: 'Django · Redis · Docker',
    placeholder: true,
  },
  {
    title: 'RAG engine',
    description:
      'Retrieval pipeline built around deep document understanding, producing citation-backed answers across mixed formats.',
    meta: 'Python · Embeddings · RAG',
    placeholder: true,
  },
  {
    title: 'JobNext',
    description:
      'Job platform pairing seekers and employers, with OTP auth, resume parsing and semantic matching over pgvector.',
    meta: 'Django · pgvector · React',
    placeholder: true,
  },
  {
    title: 'Job Application Agent',
    description:
      'Agent that reads a profile, finds roles worth applying for, and handles the application on the user behalf.',
    meta: 'Agents · Automation',
    placeholder: true,
  },
  {
    title: 'Fullchat',
    description:
      'Real-time chat built on Django and WebSockets, the project that got me into backend work properly.',
    meta: 'Django · WebSockets',
    url: 'https://github.com/Rohit10jr/fullchat',
  },
]
