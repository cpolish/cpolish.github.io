import type { JSX } from "react";

import Page from "../../components/Page/Page";

import "./FeaturedProjects.css";


const FEATURED_PROJECTS = [
  {
    name: "c-hashmap",
    description: (
      <p>
        An experimental, small project to implement type-safe hashmaps using macros in C.
      </p>
    ),
    githubLink: "https://github.com/cpolish/c-hashmap",
  },
  {
    name: "craspy",
    description: (
      <>
        <p>
          A new, interpreted programming language. Coming soon!
        </p>
        <p>
          In collaboration with <a href="https://github.com/Ankit-0202">Ankit-0202</a>.
        </p>
      </>
    ),
    githubLink: "https://github.com/Ankit-0202/craspy",
  },
];


export default function FeaturedProjects(): JSX.Element {
  return (
    <Page id="featured-projects">
      <h1>Featured Projects:</h1>
      <ul>
        {FEATURED_PROJECTS.map((project) => {
          return (
            <li>
              <p><b><a href={project.githubLink}>{project.name}</a></b></p>
              {project.description}
            </li>
          );
        })}
      </ul>
    </Page>
  );
}
