import { PostList } from '../components/PostList'
import { posts } from '../data/posts'

export function PostsPage() {
  return (
    <article className="page-shell posts-page">
      <header className="page-hero">
        <div>
          <p className="section-kicker">Posts</p>
          <h1>Future writing index.</h1>
          <p>
            These two entries are dummy placeholders so the writing structure can
            be filled with real notes later.
          </p>
        </div>
      </header>

      <PostList posts={posts} />
    </article>
  )
}
