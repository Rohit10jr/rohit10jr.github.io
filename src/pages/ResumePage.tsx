import { PrivateResume } from '../components/PrivateResume'

// The whole resume lives behind the password: the page is only the gate.
export function ResumePage() {
  return (
    <article className="page-shell resume-page">
      <PrivateResume />
    </article>
  )
}
