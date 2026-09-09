import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { openSource } from "../data/profile";

/**
 * Where upstream work landed, named rather than enumerated. Individual pull
 * requests are not listed: a single documentation fix given a row of its own
 * reads as more than it is, and GitHub already keeps that record.
 */
export function OpenSource() {
  const listRef = useReveal<HTMLUListElement>();

  return (
    <section
      id="open-source"
      className="section oss-section"
      aria-labelledby="open-source-title"
    >
      <div className="section-heading">
        <h2 id="open-source-title">Open source</h2>
      </div>

      <ul className="oss-grid" ref={listRef}>
        {openSource.projects.map((project) => (
          <li key={project.name} className="oss-cell reveal">
            <a
              className="oss-link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              {project.name}
              <ArrowUpRight
                className="oss-arrow"
                aria-hidden="true"
                size={15}
              />
            </a>
          </li>
        ))}
      </ul>

      <p className="oss-note">
        Fixes and corrections merged into open source projects, full record in
        my{" "}
        <a
          className="prose-link"
          href={openSource.activityUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub contribution activity
        </a>
        .
      </p>
    </section>
  );
}
