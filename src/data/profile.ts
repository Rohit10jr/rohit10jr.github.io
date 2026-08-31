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
    alt: 'Rohit J at the Kedarkantha summit, above a layer of cloud',
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
