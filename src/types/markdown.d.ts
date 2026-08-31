declare module '*.md' {
  const post: {
    title: string
    date: string
    summary: string
    tags: string[]
    draft: boolean
    placeholder: boolean
    readingMinutes: number
    html: string
  }
  export default post
}
