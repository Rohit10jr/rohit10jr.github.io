export type Post = {
  title: string
  slug: string
  dateLabel: string
  summary: string
  status: 'placeholder'
}

export const posts: Post[] = [
  {
    title: 'Building my new portfolio',
    slug: 'building-my-new-portfolio',
    dateLabel: 'Future post',
    summary:
      'Placeholder for a future process note about planning, rebuilding, and refining this portfolio.',
    status: 'placeholder',
  },
  {
    title: 'Notes from a backend project',
    slug: 'notes-from-a-backend-project',
    dateLabel: 'Future post',
    summary:
      'Placeholder for a future technical note about decisions made while building a backend project.',
    status: 'placeholder',
  },
]
